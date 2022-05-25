'reach 0.1';
'use strict';

// DAOs with basic voting functionality for various proposals. 
// In this code we have 2 proposals that are being voted on. 

const [ _, PROPOSAL_1, PROPOSAL_2, TIMEOUT ] = makeEnum(3);

const Common = {
  showOutcome: Fun([UInt, UInt, UInt], Null),
};

export const main =
  Reach.App(() => {

    setOptions({ connectors: [ETH, ALGO ]});

    //Pollster is the Participant that would make knows the address for proposal 1 and propsal 2
    //where the money would be transfered based on which proposal wins. 
    //and also decides how long the deadline for the proposal to be passed would be
    //It also decides the money that each participant would have to stake in order to vote for any proposal. 
    const Pollster =
      Participant('Pollster', { ...Common,
        getParams: Fun([], Object({
          ticketPrice: UInt,
          deadline: UInt,
          prop1Addr: Address,
          prop2Addr: Address }))
      });

    //Voter is the participant that votes on ny proposal in this case proposal 1 or 2  
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

    //This loop is triggered every time a voter votes on any proposal and 
    //it keeps count of votes for each proposal 
    //This loop also checks whether time is remaining for the voting period and 
    //if the time is over then it shows a timeout and then voting results are shown
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

    //The winning proposal gets all the staked money
    const outcome = forA >= forB ? PROPOSAL_1 : PROPOSAL_2;
    const winner = outcome == PROPOSAL_1 ? prop1Addr : prop2Addr;
    transfer(balance()).to(winner);
    commit();
    showOutcome(outcome, forA, forB)();

  });