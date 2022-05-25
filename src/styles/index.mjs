import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

  const stdlib = loadStdlib();
  const [ N, timeoutFactor ] =
    stdlib.connector === 'ALGO' ? [ 5, 50 ] : [ 5, 50 ];

  const startingBalance = stdlib.parseCurrency(100);
  const accPollster = await stdlib.newTestAccount(startingBalance);
  const accVoter_arr = await Promise.all( Array.from({length: N}, () => stdlib.newTestAccount(startingBalance)) );
  const prop1Addr = await stdlib.newTestAccount(startingBalance);
  const prop2Addr = await stdlib.newTestAccount(startingBalance);

  const fmt = (x) => stdlib.formatCurrency(x, 4);
  const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
  const beforeProp1 = await getBalance(prop1Addr);
  const beforeProp2 = await getBalance(prop2Addr);

  const ctcPollster = accPollster.contract(backend);
  const ctcInfo = ctcPollster.getInfo();

  const OUTCOME = ['Alice wins', 'Bob wins', 'Timeout'];
  const Common = (Who) => ({
      showOutcome: (outcome, forA, forB) => {
        if ( outcome == 2 ) {
          console.log(`${Who} saw the timeout`); }
        else {
          console.log(`${Who} saw a ${forA}-${forB} outcome: ${OUTCOME[outcome]}`);
        }
  } });

  await Promise.all([
    backend.Pollster(ctcPollster, {
      ...Common('Pollster'),
      getParams: () => ({
        ticketPrice: stdlib.parseCurrency(5),
        deadline: N*timeoutFactor,
        prop1Addr: prop1Addr,
        prop2Addr: prop2Addr,
      }),
    }),
  ].concat(
    accVoter_arr.map((accVoter, i) => {
      const ctcVoter = accVoter.contract(backend, ctcInfo);
      const Who = `Voter #${i}`;
      const vote = Math.random() < 0.5;
      let voted = false;
      return backend.Voter(ctcVoter, {
        ...Common(Who),
        getVote: (() => vote),
        voterWas: ((voterAddr) => {
          if ( stdlib.addressEq(voterAddr, accVoter) ) {
            console.log(`${Who} voted: ${vote ? 'Proposal 1' : 'Proposal 2'}`);
            voted = true;
          } } ),
        shouldVote: (() => ! voted) }); } )
  ));
  

  const afterProp1 = await getBalance(prop1Addr);
  const afterProp2 = await getBalance(prop2Addr);

  console.log(`Proposal 1 went from ${beforeProp1} to ${afterProp1}.`);
  console.log(`Proposal 2 went from ${beforeProp2} to ${afterProp2}.`);