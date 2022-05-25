'reach 0.1';
'use strict';

const [ _, PROPOSAL_1, PROPOSAL_2, TIMEOUT ] = makeEnum(3);

const Common = {
  showOutcome: Fun([UInt, UInt, UInt], Null),
};

export const main =
  Reach.App(() => {

    setOptions({ connectors: [ETH, ALGO ]});

    const Pollster =
      Participant('Pollster', { ...Common,
        getParams: Fun([], Object({
          ticketPrice: UInt,
          deadline: UInt,
          prop1Addr: Address,
          prop2Addr: Address }))
      });

    const Voter =
      ParticipantClass('Voter',
      { ...Common,
        getVote: Fun([], Bool),
        voterWas: Fun([Address], Null),
        shouldVote: Fun([], Bool),
      });

    init();

    const showOutcome = (which, forA, forB) => () => {
      each([Pollster, Voter], () =>
        interact.showOutcome(which, forA, forB)); };

    Pollster.publish();
    commit();
    Pollster.only(() => {
      const { ticketPrice, deadline, prop1Addr, prop2Addr } =
        declassify(interact.getParams());
    });
    Pollster.publish(ticketPrice, deadline, prop1Addr, prop2Addr);

    const [ timeRemaining, keepGoing ] = makeDeadline(deadline);

    const [ forA, forB ] =
      parallelReduce([ 0, 0])
      .invariant(balance() == (forA + forB) * ticketPrice)
      .while( keepGoing() )
      .case(Voter, () => ({
          msg: declassify(interact.getVote()),
          when: declassify(interact.shouldVote()),
        }),
        (_) => ticketPrice,
        (forProposal1) => {
          const voter = this;
          Voter.only(() => interact.voterWas(voter));
          const [ nA, nB ] = forProposal1 ? [ 1, 0 ] : [ 0, 1 ];
          return [ forA + nA, forB + nB ]; })
      .timeout(timeRemaining(), () => {
        Anybody.publish();
        showOutcome(TIMEOUT, forA, forB)();
        return [ forA, forB ]; });

    const outcome = forA >= forB ? PROPOSAL_1 : PROPOSAL_2;
    const winner = outcome == PROPOSAL_1 ? prop1Addr : prop2Addr;
    transfer(balance()).to(winner);
    commit();
    showOutcome(outcome, forA, forB)();

  });