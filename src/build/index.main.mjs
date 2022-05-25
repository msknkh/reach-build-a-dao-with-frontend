// Automatically generated with Reach 0.1.10 (b3269997)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (b3269997)';
export const _backendVersion = 16;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      4: [ctc1, ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Pollster(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Pollster expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Pollster expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Object({
    deadline: ctc0,
    prop1Addr: ctc1,
    prop2Addr: ctc1,
    ticketPrice: ctc0
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:46:14:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:46:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v161, time: v160, didSend: v22, from: v159 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v161, time: v160, didSend: v22, from: v159 } = txn1;
  ;
  const v164 = stdlib.protect(ctc2, await interact.getParams(), {
    at: './index.rsh:50:38:application',
    fs: ['at ./index.rsh:48:18:application call to [unknown function] (defined at: ./index.rsh:48:22:function exp)'],
    msg: 'getParams',
    who: 'Pollster'
    });
  const v165 = v164.deadline;
  const v166 = v164.prop1Addr;
  const v167 = v164.prop2Addr;
  const v168 = v164.ticketPrice;
  
  const txn2 = await (ctc.sendrecv({
    args: [v159, v160, v168, v165, v166, v167],
    evt_cnt: 4,
    funcNum: 1,
    lct: v160,
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:52:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v174, v175, v176, v177], secs: v179, time: v178, didSend: v43, from: v173 } = txn2;
      
      ;
      const v180 = stdlib.addressEq(v159, v173);
      ;
      const v182 = stdlib.add(v160, v175);
      const v183 = stdlib.checkedBigNumberify('./index.rsh:61:24:decimal', stdlib.UInt_max, '0');
      const v184 = stdlib.checkedBigNumberify('./index.rsh:61:27:decimal', stdlib.UInt_max, '0');
      const v185 = v178;
      const v186 = v160;
      const v192 = stdlib.checkedBigNumberify('./index.rsh:40:11:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v198 = stdlib.gt(v182, v186);
        
        return v198;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v233 = stdlib.ge(v183, v184);
        const v234 = v233 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const v235 = stdlib.eq(v234, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v236 = v235 ? v176 : v177;
        sim_r.txns.push({
          amt: v192,
          kind: 'from',
          to: v236,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0, ctc0, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v174, v175, v176, v177], secs: v179, time: v178, didSend: v43, from: v173 } = txn2;
  ;
  const v180 = stdlib.addressEq(v159, v173);
  stdlib.assert(v180, {
    at: './index.rsh:52:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Pollster'
    });
  const v182 = stdlib.add(v160, v175);
  let v183 = stdlib.checkedBigNumberify('./index.rsh:61:24:decimal', stdlib.UInt_max, '0');
  let v184 = stdlib.checkedBigNumberify('./index.rsh:61:27:decimal', stdlib.UInt_max, '0');
  let v185 = v178;
  let v186 = v160;
  let v192 = stdlib.checkedBigNumberify('./index.rsh:40:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v198 = stdlib.gt(v182, v186);
    
    return v198;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc3],
      timeoutAt: ['time', v182],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v174, v176, v177, v182, v183, v184, v185, v192],
        evt_cnt: 0,
        funcNum: 4,
        lct: v185,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:75:17:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v227, time: v226, didSend: v113, from: v225 } = txn4;
          
          ;
          
          const cv183 = v183;
          const cv184 = v184;
          const cv185 = v226;
          const cv186 = v185;
          const cv192 = v192;
          
          await (async () => {
            const v183 = cv183;
            const v184 = cv184;
            const v185 = cv185;
            const v186 = cv186;
            const v192 = cv192;
            
            if (await (async () => {
              const v198 = stdlib.gt(v182, v186);
              
              return v198;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v233 = stdlib.ge(v183, v184);
              const v234 = v233 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              const v235 = stdlib.eq(v234, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
              const v236 = v235 ? v176 : v177;
              sim_r.txns.push({
                amt: v192,
                kind: 'from',
                to: v236,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v227, time: v226, didSend: v113, from: v225 } = txn4;
      ;
      stdlib.protect(ctc4, await interact.showOutcome(stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'), v183, v184), {
        at: './index.rsh:44:29:application',
        fs: ['at ./index.rsh:43:11:application call to [unknown function] (defined at: ./index.rsh:43:34:function exp)', 'at ./index.rsh:76:41:application call to [unknown function] (defined at: ./index.rsh:42:51:function exp)', 'at ./index.rsh:74:36:application call to [unknown function] (defined at: ./index.rsh:74:36:function exp)'],
        msg: 'showOutcome',
        who: 'Pollster'
        });
      
      const cv183 = v183;
      const cv184 = v184;
      const cv185 = v226;
      const cv186 = v185;
      const cv192 = v192;
      
      v183 = cv183;
      v184 = cv184;
      v185 = cv185;
      v186 = cv186;
      v192 = cv192;
      
      continue;
      }
    else {
      const {data: [v210], secs: v212, time: v211, didSend: v84, from: v209 } = txn3;
      const v215 = stdlib.add(v192, v174);
      ;
      const v217 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v218 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v219 = v210 ? v217 : v218;
      const v220 = v219[stdlib.checkedBigNumberify('./index.rsh:72:17:array', stdlib.UInt_max, '0')];
      const v221 = v219[stdlib.checkedBigNumberify('./index.rsh:72:17:array', stdlib.UInt_max, '1')];
      const v222 = stdlib.add(v183, v220);
      const v223 = stdlib.add(v184, v221);
      const cv183 = v222;
      const cv184 = v223;
      const cv185 = v211;
      const cv186 = v185;
      const cv192 = v215;
      
      v183 = cv183;
      v184 = cv184;
      v185 = cv185;
      v186 = cv186;
      v192 = cv192;
      
      continue;}
    
    }
  const v233 = stdlib.ge(v183, v184);
  const v234 = v233 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  const v235 = stdlib.eq(v234, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v236 = v235 ? v176 : v177;
  ;
  stdlib.protect(ctc4, await interact.showOutcome(v234, v183, v184), {
    at: './index.rsh:44:29:application',
    fs: ['at ./index.rsh:43:11:application call to [unknown function] (defined at: ./index.rsh:43:34:function exp)', 'at ./index.rsh:84:37:application call to [unknown function] (defined at: ./index.rsh:42:51:function exp)'],
    msg: 'showOutcome',
    who: 'Pollster'
    });
  
  return;
  
  
  
  
  };
export async function Voter(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Voter expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Voter expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v161, time: v160, didSend: v22, from: v159 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 4,
    funcNum: 1,
    out_tys: [ctc0, ctc0, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v174, v175, v176, v177], secs: v179, time: v178, didSend: v43, from: v173 } = txn2;
  ;
  const v180 = stdlib.addressEq(v159, v173);
  stdlib.assert(v180, {
    at: './index.rsh:52:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Voter'
    });
  const v182 = stdlib.add(v160, v175);
  let v183 = stdlib.checkedBigNumberify('./index.rsh:61:24:decimal', stdlib.UInt_max, '0');
  let v184 = stdlib.checkedBigNumberify('./index.rsh:61:27:decimal', stdlib.UInt_max, '0');
  let v185 = v178;
  let v186 = v160;
  let v192 = stdlib.checkedBigNumberify('./index.rsh:40:11:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v198 = stdlib.gt(v182, v186);
    
    return v198;})()) {
    const v206 = stdlib.protect(ctc2, await interact.getVote(), {
      at: './index.rsh:65:43:application',
      fs: ['at ./index.rsh:64:23:application call to [unknown function] (defined at: ./index.rsh:64:23:function exp)', 'at ./index.rsh:64:23:application call to [unknown function] (defined at: ./index.rsh:64:23:function exp)'],
      msg: 'getVote',
      who: 'Voter'
      });
    const v207 = stdlib.protect(ctc2, await interact.shouldVote(), {
      at: './index.rsh:66:47:application',
      fs: ['at ./index.rsh:64:23:application call to [unknown function] (defined at: ./index.rsh:64:23:function exp)', 'at ./index.rsh:64:23:application call to [unknown function] (defined at: ./index.rsh:64:23:function exp)'],
      msg: 'shouldVote',
      who: 'Voter'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v174, v176, v177, v182, v183, v184, v185, v192, v206],
      evt_cnt: 1,
      funcNum: 3,
      lct: v185,
      onlyIf: v207,
      out_tys: [ctc2],
      pay: [v174, []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v210], secs: v212, time: v211, didSend: v84, from: v209 } = txn3;
        
        const v215 = stdlib.add(v192, v174);
        sim_r.txns.push({
          amt: v174,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        
        const v217 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v218 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v219 = v210 ? v217 : v218;
        const v220 = v219[stdlib.checkedBigNumberify('./index.rsh:72:17:array', stdlib.UInt_max, '0')];
        const v221 = v219[stdlib.checkedBigNumberify('./index.rsh:72:17:array', stdlib.UInt_max, '1')];
        const v222 = stdlib.add(v183, v220);
        const v223 = stdlib.add(v184, v221);
        const cv183 = v222;
        const cv184 = v223;
        const cv185 = v211;
        const cv186 = v185;
        const cv192 = v215;
        
        await (async () => {
          const v183 = cv183;
          const v184 = cv184;
          const v185 = cv185;
          const v186 = cv186;
          const v192 = cv192;
          
          if (await (async () => {
            const v198 = stdlib.gt(v182, v186);
            
            return v198;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v233 = stdlib.ge(v183, v184);
            const v234 = v233 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            const v235 = stdlib.eq(v234, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
            const v236 = v235 ? v176 : v177;
            sim_r.txns.push({
              amt: v192,
              kind: 'from',
              to: v236,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: ['time', v182],
      tys: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v174, v176, v177, v182, v183, v184, v185, v192],
        evt_cnt: 0,
        funcNum: 4,
        lct: v185,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:75:17:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v227, time: v226, didSend: v113, from: v225 } = txn4;
          
          ;
          
          const cv183 = v183;
          const cv184 = v184;
          const cv185 = v226;
          const cv186 = v185;
          const cv192 = v192;
          
          await (async () => {
            const v183 = cv183;
            const v184 = cv184;
            const v185 = cv185;
            const v186 = cv186;
            const v192 = cv192;
            
            if (await (async () => {
              const v198 = stdlib.gt(v182, v186);
              
              return v198;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v233 = stdlib.ge(v183, v184);
              const v234 = v233 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              const v235 = stdlib.eq(v234, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
              const v236 = v235 ? v176 : v177;
              sim_r.txns.push({
                amt: v192,
                kind: 'from',
                to: v236,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v227, time: v226, didSend: v113, from: v225 } = txn4;
      ;
      stdlib.protect(ctc3, await interact.showOutcome(stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'), v183, v184), {
        at: './index.rsh:44:29:application',
        fs: ['at ./index.rsh:43:11:application call to [unknown function] (defined at: ./index.rsh:43:34:function exp)', 'at ./index.rsh:76:41:application call to [unknown function] (defined at: ./index.rsh:42:51:function exp)', 'at ./index.rsh:74:36:application call to [unknown function] (defined at: ./index.rsh:74:36:function exp)'],
        msg: 'showOutcome',
        who: 'Voter'
        });
      
      const cv183 = v183;
      const cv184 = v184;
      const cv185 = v226;
      const cv186 = v185;
      const cv192 = v192;
      
      v183 = cv183;
      v184 = cv184;
      v185 = cv185;
      v186 = cv186;
      v192 = cv192;
      
      continue;
      }
    else {
      const {data: [v210], secs: v212, time: v211, didSend: v84, from: v209 } = txn3;
      const v215 = stdlib.add(v192, v174);
      ;
      stdlib.protect(ctc3, await interact.voterWas(v209), {
        at: './index.rsh:71:45:application',
        fs: ['at ./index.rsh:71:21:application call to [unknown function] (defined at: ./index.rsh:71:25:function exp)', 'at ./index.rsh:69:24:application call to [unknown function] (defined at: ./index.rsh:69:24:function exp)'],
        msg: 'voterWas',
        who: 'Voter'
        });
      
      const v217 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v218 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v219 = v210 ? v217 : v218;
      const v220 = v219[stdlib.checkedBigNumberify('./index.rsh:72:17:array', stdlib.UInt_max, '0')];
      const v221 = v219[stdlib.checkedBigNumberify('./index.rsh:72:17:array', stdlib.UInt_max, '1')];
      const v222 = stdlib.add(v183, v220);
      const v223 = stdlib.add(v184, v221);
      const cv183 = v222;
      const cv184 = v223;
      const cv185 = v211;
      const cv186 = v185;
      const cv192 = v215;
      
      v183 = cv183;
      v184 = cv184;
      v185 = cv185;
      v186 = cv186;
      v192 = cv192;
      
      continue;}
    
    }
  const v233 = stdlib.ge(v183, v184);
  const v234 = v233 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
  const v235 = stdlib.eq(v234, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v236 = v235 ? v176 : v177;
  ;
  stdlib.protect(ctc3, await interact.showOutcome(v234, v183, v184), {
    at: './index.rsh:44:29:application',
    fs: ['at ./index.rsh:43:11:application call to [unknown function] (defined at: ./index.rsh:43:34:function exp)', 'at ./index.rsh:84:37:application call to [unknown function] (defined at: ./index.rsh:42:51:function exp)'],
    msg: 'showOutcome',
    who: 'Voter'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAJAAEECEhQWGBoJgIBAAAiNQAxGEECgClkSSJbNQElWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0mBAwxAAPVJJAxAAFMkEkQkNAESRDQESSISTDQCEhFEKGRJNQMhBFs1/4AEkSc087AyBjT/D0Q0AyJbNANXCCA0A1coIDT/NAMhBVs0AyEGWzIGNAMhB1s0AyEIW0IBQEgkNAESRDQESSISTDQCEhFEKGRJNQNJIls1/yEEWzX+STUFFzX9gARlsQNdNP0WUQcIULAyBjT+DEQ0/4gBw4AQAAAAAAAAAAAAAAAAAAAAAYAQAAAAAAAAAAEAAAAAAAAAADT9TTX8NP80A1cIIDQDVyggNP40AyEFWzT8IlsINAMhBls0/CVbCDIGNAMhB1s0AyEIWzT/CEIApEkjDEAAZyMSRCM0ARJENARJIhJMNAISEUQoZEk1A4EgWzX/STUFSUoiWzX+JVs1/VcQIDX8VzAgNfuABGlbjwU0/hZQNP0WUDT8UDT7ULA0A1cAIDEAEkQ0/jT8NPs0/zT9CCIiMgY0/yJCADdIIjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rCBoI0GiADaMQAyBhZQKEsBVwAoZ0gjNQEyBjUCQgCFNf81/jX9Nfw1+zX6Nfk1+DX3NPo0/g1BAC809xY0+FA0+VA0+hZQNPsWUDT8FlA0/RZQNP8WUChLAVcAcGdIJDUBMgY1AkIAPLEisgE0/7III7IQNPk0+CMiNPs0/A9NIhJNsgezQgAAMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 112,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v174",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v175",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v176",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v177",
                "type": "address"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v210",
                "type": "bool"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v174",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v175",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v176",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v177",
                "type": "address"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v210",
                "type": "bool"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620010d9380380620010d98339810160408190526200002691620001b3565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000e3565b604080518082018252338082524360208084018281526001600081905592909255845180820193909352905182850152835180830385018152606090920190935280519192620000da92600292909101906200010d565b5050506200025b565b81620001095760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200011b906200021e565b90600052602060002090601f0160209004810192826200013f57600085556200018a565b82601f106200015a57805160ff19168380011785556200018a565b828001600101855582156200018a579182015b828111156200018a5782518255916020019190600101906200016d565b50620001989291506200019c565b5090565b5b808211156200019857600081556001016200019d565b600060408284031215620001c657600080fd5b604080519081016001600160401b0381118282101715620001f757634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200021257600080fd5b60208201529392505050565b600181811c908216806200023357607f821691505b602082108114156200025557634e487b7160e01b600052602260045260246000fd5b50919050565b610e6e806200026b6000396000f3fe6080604052600436106100565760003560e01c80630d7b1bda1461005f5780631e93b0f1146100725780638323075714610096578063a7661d54146100ab578063ab53f2c6146100be578063e2186a08146100e157005b3661005d57005b005b61005d61006d366004610b15565b6100f4565b34801561007e57600080fd5b506003545b6040519081526020015b60405180910390f35b3480156100a257600080fd5b50600154610083565b61005d6100b9366004610b3f565b6102d2565b3480156100ca57600080fd5b506100d361047b565b60405161008d929190610b62565b61005d6100ef366004610b3f565b610518565b610104600160005414600a610753565b61011e8135158061011757506001548235145b600b610753565b60008080556002805461013090610bbf565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610bbf565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610c19565b90507fcad30ec15bac680b544a468e6654bae0bfba9da43bf39210a8d85a076bc21e6833836040516101f4929190610c7f565b60405180910390a161020834156008610753565b8051610220906001600160a01b031633146009610753565b61022861097d565b8051602084013590526102416080840160608501610ce4565b81516001600160a01b0390911660209091015261026460a0840160808501610ce4565b81516001600160a01b0390911660409182015260208301516102899185013590610d01565b81516060908101919091526020808301805160009081905281518301819052815143604090910152918501518151909301929092529051608001526102cd8161077c565b505050565b6102e26004600054146011610753565b6102fc813515806102f557506001548235145b6012610753565b60008080556002805461030e90610bbf565b80601f016020809104026020016040519081016040528092919081815260200182805461033a90610bbf565b80156103875780601f1061035c57610100808354040283529160200191610387565b820191906000526020600020905b81548152906001019060200180831161036a57829003601f168201915b505050505080602001905181019061039f9190610d27565b90506103b381606001514310156013610753565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb19072233836040516103e4929190610de8565b60405180910390a16103f834156010610753565b61040061097d565b815181515260208083015182516001600160a01b03918216908301526040808501518451921691810191909152606080850151845182015260808086015184860180519190915260a087015181519095019490945283514393019290925260c085015183519091015260e0840151915101526102cd8161077c565b60006060600054600280805461049090610bbf565b80601f01602080910402602001604051908101604052809291908181526020018280546104bc90610bbf565b80156105095780601f106104de57610100808354040283529160200191610509565b820191906000526020600020905b8154815290600101906020018083116104ec57829003601f168201915b50505050509050915091509091565b610528600460005414600d610753565b6105428135158061053b57506001548235145b600e610753565b60008080556002805461055490610bbf565b80601f016020809104026020016040519081016040528092919081815260200182805461058090610bbf565b80156105cd5780601f106105a2576101008083540402835291602001916105cd565b820191906000526020600020905b8154815290600101906020018083116105b057829003601f168201915b50505050508060200190518101906105e59190610d27565b90506105ef6109e4565b61060082606001514310600f610753565b7fa5a264ad7bcb9788928e7795891942e9811712d8346314f9c3672363842f4e353384604051610631929190610de8565b60405180910390a18151610648903414600c610753565b80516001908190528151600060209182018190528184018051919091525181019190915261067c9060408501908501610e1d565b61068a57806020015161068d565b80515b604082015261069a61097d565b825181515260208084015182516001600160a01b0391821692019190915260408085015183519216918101919091526060808501518351909101528201515160808401516106e89190610d01565b602080830151919091526040830151015160a08401516107089190610d01565b602080830180519091019190915280514360409091015260c0840151905160600152825160e084015161073b9190610d01565b60208201516080015261074d8161077c565b50505050565b816107785760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b80602001516060015181600001516060015111156108ed576107ee6040518061010001604052806000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b815151815281516020908101516001600160a01b0390811682840152835160409081015190911681840152835160609081015190840152818401805151608080860191909152815184015160a0860152815183015160c08601529051015160e0840152600460005543600155516108c99183910160006101008201905082518252602083015160018060a01b0380821660208501528060408601511660408501525050606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b604051602081830303815290604052600290805190602001906102cd929190610a46565b602080820151908101519051600091111561090957600161090c565b60005b1461091c57805160400151610923565b8051602001515b6001600160a01b03166108fc8260200151608001519081150290604051600060405180830381858888f19350505050158015610963573d6000803e3d6000fd5b506000808055600181905561097a90600290610aca565b50565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016109df6040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b905290565b6040805160a08101909152600060608201818152608083019190915281908152602001610a24604051806040016040528060008152602001600081525090565b81526020016109df604051806040016040528060008152602001600081525090565b828054610a5290610bbf565b90600052602060002090601f016020900481019282610a745760008555610aba565b82601f10610a8d57805160ff1916838001178555610aba565b82800160010185558215610aba579182015b82811115610aba578251825591602001919060010190610a9f565b50610ac6929150610b00565b5090565b508054610ad690610bbf565b6000825580601f10610ae6575050565b601f01602090049060005260206000209081019061097a91905b5b80821115610ac65760008155600101610b01565b600060a08284031215610b2757600080fd5b50919050565b600060408284031215610b2757600080fd5b600060408284031215610b5157600080fd5b610b5b8383610b2d565b9392505050565b82815260006020604081840152835180604085015260005b81811015610b9657858101830151858201606001528201610b7a565b81811115610ba8576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610bd357607f821691505b60208210811415610b2757634e487b7160e01b600052602260045260246000fd5b6001600160a01b038116811461097a57600080fd5b8051610c1481610bf4565b919050565b600060408284031215610c2b57600080fd5b6040516040810181811067ffffffffffffffff82111715610c5c57634e487b7160e01b600052604160045260246000fd5b6040528251610c6a81610bf4565b81526020928301519281019290925250919050565b600060c08201905060018060a01b0380851683528335602084015260208401356040840152604084013560608401526060840135610cbc81610bf4565b8181166080850152506080840135610cd381610bf4565b81811660a085015250509392505050565b600060208284031215610cf657600080fd5b8135610b5b81610bf4565b60008219821115610d2257634e487b7160e01b600052601160045260246000fd5b500190565b6000610100808385031215610d3b57600080fd5b6040519081019067ffffffffffffffff82118183101715610d6c57634e487b7160e01b600052604160045260246000fd5b816040528351815260208401519150610d8482610bf4565b816020820152610d9660408501610c09565b6040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b80358015158114610c1457600080fd5b6001600160a01b038316815281356020808301919091526060820190610e0f908401610dd8565b151560408301529392505050565b600060208284031215610e2f57600080fd5b610b5b82610dd856fea2646970667358221220524bd1933ce1f6a023eba19031a600eacf3365763bb79bb57c921b09aef7141b64736f6c634300080c0033`,
  BytecodeLen: 4313,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:47:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:83:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:61:21:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Pollster": Pollster,
  "Voter": Voter
  };
export const _APIs = {
  };
