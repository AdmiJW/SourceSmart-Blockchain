// Automatically generated with Reach 0.1.12 (ae94865f)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (ae94865f)';
export const _backendVersion = 24;

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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  
  const Explorer_buyerAddress = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1048, v1049, v1050, v1051, v1069, v1070, v1071, v1072, v1370, v1371] = svs;
      return (await ((async () => {
        
        
        return v1048;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v1048, v1049, v1050, v1051, v1068, v1069, v1070, v1071, v1072] = svs;
      return (await ((async () => {
        
        
        return v1048;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Explorer_deliveredNetworkTime = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1048, v1049, v1050, v1051, v1069, v1070, v1071, v1072, v1370, v1371] = svs;
      return (await ((async () => {
        
        
        return v1370;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v1048, v1049, v1050, v1051, v1068, v1069, v1070, v1071, v1072] = svs;
      return (await ((async () => {
        
        
        return stdlib.checkedBigNumberify('./index.rsh:69:39:decimal', stdlib.UInt_max, '0');}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Explorer_deployedNetworkTime = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1048, v1049, v1050, v1051, v1069, v1070, v1071, v1072, v1370, v1371] = svs;
      return (await ((async () => {
        
        
        return v1051;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v1048, v1049, v1050, v1051, v1068, v1069, v1070, v1071, v1072] = svs;
      return (await ((async () => {
        
        
        return v1051;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Explorer_listOfIngredients = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1048, v1049, v1050, v1051, v1069, v1070, v1071, v1072, v1370, v1371] = svs;
      return (await ((async () => {
        
        
        return v1069;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v1048, v1049, v1050, v1051, v1068, v1069, v1070, v1071, v1072] = svs;
      return (await ((async () => {
        
        
        return v1069;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Explorer_name = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1048, v1049, v1050, v1051, v1069, v1070, v1071, v1072, v1370, v1371] = svs;
      return (await ((async () => {
        
        
        return v1049;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v1048, v1049, v1050, v1051, v1068, v1069, v1070, v1071, v1072] = svs;
      return (await ((async () => {
        
        
        return v1049;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Explorer_rejectReason = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1048, v1049, v1050, v1051, v1069, v1070, v1071, v1072, v1370, v1371] = svs;
      return (await ((async () => {
        
        
        return v1070;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v1048, v1049, v1050, v1051, v1068, v1069, v1070, v1071, v1072] = svs;
      return (await ((async () => {
        
        
        return v1070;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Explorer_reviewedNetworkTime = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1048, v1049, v1050, v1051, v1069, v1070, v1071, v1072, v1370, v1371] = svs;
      return (await ((async () => {
        
        
        return v1071;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v1048, v1049, v1050, v1051, v1068, v1069, v1070, v1071, v1072] = svs;
      return (await ((async () => {
        
        
        return v1071;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Explorer_state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1048, v1049, v1050, v1051, v1069, v1070, v1071, v1072, v1370, v1371] = svs;
      return (await ((async () => {
        
        
        return v1371;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v1048, v1049, v1050, v1051, v1068, v1069, v1070, v1071, v1072] = svs;
      return (await ((async () => {
        
        
        return v1072;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Explorer_supplierAddress = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'))) {
      const [v1048, v1049, v1050, v1051, v1069, v1070, v1071, v1072, v1370, v1371] = svs;
      return (await ((async () => {
        
        
        return v1050;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v1048, v1049, v1050, v1051, v1068, v1069, v1070, v1071, v1072] = svs;
      return (await ((async () => {
        
        
        return v1050;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Explorer: {
        buyerAddress: {
          decode: Explorer_buyerAddress,
          dom: [],
          rng: ctc0
          },
        deliveredNetworkTime: {
          decode: Explorer_deliveredNetworkTime,
          dom: [],
          rng: ctc2
          },
        deployedNetworkTime: {
          decode: Explorer_deployedNetworkTime,
          dom: [],
          rng: ctc2
          },
        listOfIngredients: {
          decode: Explorer_listOfIngredients,
          dom: [],
          rng: ctc4
          },
        name: {
          decode: Explorer_name,
          dom: [],
          rng: ctc1
          },
        rejectReason: {
          decode: Explorer_rejectReason,
          dom: [],
          rng: ctc1
          },
        reviewedNetworkTime: {
          decode: Explorer_reviewedNetworkTime,
          dom: [],
          rng: ctc2
          },
        state: {
          decode: Explorer_state,
          dom: [],
          rng: ctc2
          },
        supplierAddress: {
          decode: Explorer_supplierAddress,
          dom: [],
          rng: ctc0
          }
        }
      },
    views: {
      4: [ctc0, ctc1, ctc0, ctc2, ctc4, ctc1, ctc2, ctc2, ctc2, ctc2],
      5: [ctc0, ctc1, ctc0, ctc2, ctc2, ctc4, ctc1, ctc2, ctc2]
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
export async function Buyer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Object({
    name: ctc0,
    supplierAddress: ctc1
    });
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc0]);
  const ctc8 = stdlib.T_Data({
    SellerAPI_addIngredient0_110: ctc5,
    SellerAPI_approve0_110: ctc6,
    SellerAPI_reject0_110: ctc7
    });
  
  
  const v1041 = stdlib.protect(ctc2, interact.details, 'for Buyer\'s interact field details');
  const v1042 = v1041.name;
  const v1043 = v1041.supplierAddress;
  
  const txn1 = await (ctc.sendrecv({
    args: [v1042, v1043],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:59:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:59:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1049, v1050], secs: v1052, time: v1051, didSend: v32, from: v1048 } = txn1;
      
      ;
      const v1053 = await ctc.getContractInfo();
      
      const v1066 = [v1053, v1053, v1053, v1053, v1053, v1053, v1053, v1053, v1053, v1053];
      const v1067 = '                                                                                                                                ';
      const v1068 = stdlib.checkedBigNumberify('./index.rsh:85:51:decimal', stdlib.UInt_max, '0');
      const v1069 = v1066;
      const v1070 = v1067;
      const v1071 = stdlib.checkedBigNumberify('./index.rsh:85:90:decimal', stdlib.UInt_max, '0');
      const v1072 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
      const v1073 = v1051;
      
      if (await (async () => {
        const v1112 = stdlib.eq(v1072, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        
        return v1112;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v1370 = stdlib.checkedBigNumberify('./index.rsh:124:33:decimal', stdlib.UInt_max, '0');
        const v1371 = v1072;
        const v1372 = v1073;
        
        if (await (async () => {
          
          return true;})()) {
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v1049, v1050], secs: v1052, time: v1051, didSend: v32, from: v1048 } = txn1;
  ;
  const v1053 = await ctc.getContractInfo();
  stdlib.protect(ctc3, await interact.launched(v1053), {
    at: './index.rsh:62:28:application',
    fs: ['at ./index.rsh:62:28:application call to [unknown function] (defined at: ./index.rsh:62:28:function exp)', 'at ./index.rsh:62:28:application call to "liftedInteract" (defined at: ./index.rsh:62:28:application)'],
    msg: 'launched',
    who: 'Buyer'
    });
  
  const v1066 = [v1053, v1053, v1053, v1053, v1053, v1053, v1053, v1053, v1053, v1053];
  const v1067 = '                                                                                                                                ';
  let v1068 = stdlib.checkedBigNumberify('./index.rsh:85:51:decimal', stdlib.UInt_max, '0');
  let v1069 = v1066;
  let v1070 = v1067;
  let v1071 = stdlib.checkedBigNumberify('./index.rsh:85:90:decimal', stdlib.UInt_max, '0');
  let v1072 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
  let v1073 = v1051;
  
  let txn2 = txn1;
  while (await (async () => {
    const v1112 = stdlib.eq(v1072, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    
    return v1112;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc8],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1177], secs: v1179, time: v1178, didSend: v696, from: v1176 } = txn3;
    switch (v1177[0]) {
      case 'SellerAPI_addIngredient0_110': {
        const v1180 = v1177[1];
        undefined /* setApiDetails */;
        const v1186 = stdlib.addressEq(v1176, v1050);
        stdlib.assert(v1186, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:96:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:95:52:application call to [unknown function] (defined at: ./index.rsh:95:52:function exp)', 'at ./index.rsh:85:23:application call to [unknown function] (defined at: ./index.rsh:95:52:function exp)', 'at ./index.rsh:85:23:application call to [unknown function] (defined at: ./index.rsh:85:23:function exp)'],
          msg: 'Unauthorized. Your wallet address does not match the supplier\'s address.',
          who: 'Buyer'
          });
        const v1188 = stdlib.lt(v1068, stdlib.checkedBigNumberify('./index.rsh:97:28:decimal', stdlib.UInt_max, '10'));
        stdlib.assert(v1188, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:97:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:95:52:application call to [unknown function] (defined at: ./index.rsh:95:52:function exp)', 'at ./index.rsh:85:23:application call to [unknown function] (defined at: ./index.rsh:95:52:function exp)', 'at ./index.rsh:85:23:application call to [unknown function] (defined at: ./index.rsh:85:23:function exp)'],
          msg: 'Bad Request. The total number of ingredients cannot exceed 10',
          who: 'Buyer'
          });
        ;
        const v1198 = v1180[stdlib.checkedBigNumberify('./index.rsh:95:14:spread', stdlib.UInt_max, '0')];
        const v1204 = null;
        await txn3.getOutput('SellerAPI_addIngredient', 'v1204', ctc3, v1204);
        const v1212 = stdlib.Array_set(v1069, v1068, v1198);
        const v1213 = stdlib.safeAdd(v1068, stdlib.checkedBigNumberify('./index.rsh:101:76:decimal', stdlib.UInt_max, '1'));
        const cv1068 = v1213;
        const cv1069 = v1212;
        const cv1070 = v1070;
        const cv1071 = v1071;
        const cv1072 = v1072;
        const cv1073 = v1178;
        
        v1068 = cv1068;
        v1069 = cv1069;
        v1070 = cv1070;
        v1071 = cv1071;
        v1072 = cv1072;
        v1073 = cv1073;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'SellerAPI_approve0_110': {
        const v1240 = v1177[1];
        undefined /* setApiDetails */;
        const v1251 = stdlib.addressEq(v1176, v1050);
        stdlib.assert(v1251, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:105:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:104:37:application call to [unknown function] (defined at: ./index.rsh:104:37:function exp)', 'at ./index.rsh:85:23:application call to [unknown function] (defined at: ./index.rsh:104:37:function exp)', 'at ./index.rsh:85:23:application call to [unknown function] (defined at: ./index.rsh:85:23:function exp)'],
          msg: 'Unauthorized. Your wallet address does not match the supplier\'s address.',
          who: 'Buyer'
          });
        ;
        const v1278 = null;
        await txn3.getOutput('SellerAPI_approve', 'v1278', ctc3, v1278);
        const cv1068 = v1068;
        const cv1069 = v1069;
        const cv1070 = v1070;
        const cv1071 = v1178;
        const cv1072 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
        const cv1073 = v1178;
        
        v1068 = cv1068;
        v1069 = cv1069;
        v1070 = cv1070;
        v1071 = cv1071;
        v1072 = cv1072;
        v1073 = cv1073;
        
        txn2 = txn3;
        continue;
        break;
        }
      case 'SellerAPI_reject0_110': {
        const v1300 = v1177[1];
        undefined /* setApiDetails */;
        const v1315 = stdlib.addressEq(v1176, v1050);
        stdlib.assert(v1315, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:113:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:112:42:application call to [unknown function] (defined at: ./index.rsh:112:42:function exp)', 'at ./index.rsh:85:23:application call to [unknown function] (defined at: ./index.rsh:112:42:function exp)', 'at ./index.rsh:85:23:application call to [unknown function] (defined at: ./index.rsh:85:23:function exp)'],
          msg: 'Unauthorized. Your wallet address does not match the supplier\'s address.',
          who: 'Buyer'
          });
        ;
        const v1347 = v1300[stdlib.checkedBigNumberify('./index.rsh:112:14:spread', stdlib.UInt_max, '0')];
        const v1351 = null;
        await txn3.getOutput('SellerAPI_reject', 'v1351', ctc3, v1351);
        const cv1068 = v1068;
        const cv1069 = v1069;
        const cv1070 = v1347;
        const cv1071 = v1178;
        const cv1072 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
        const cv1073 = v1178;
        
        v1068 = cv1068;
        v1069 = cv1069;
        v1070 = cv1070;
        v1071 = cv1071;
        v1072 = cv1072;
        v1073 = cv1073;
        
        txn2 = txn3;
        continue;
        break;
        }
      }
    
    }
  let v1370 = stdlib.checkedBigNumberify('./index.rsh:124:33:decimal', stdlib.UInt_max, '0');
  let v1371 = v1072;
  let v1372 = v1073;
  
  let txn3 = txn2;
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1395], secs: v1397, time: v1396, didSend: v978, from: v1394 } = txn4;
    undefined /* setApiDetails */;
    const v1399 = stdlib.addressEq(v1394, v1048);
    stdlib.assert(v1399, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:133:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:132:38:application call to [unknown function] (defined at: ./index.rsh:132:38:function exp)', 'at ./index.rsh:132:38:application call to [unknown function] (defined at: ./index.rsh:132:38:function exp)'],
      msg: 'Unauthorized. Your wallet address does not match the buyer\'s address.',
      who: 'Buyer'
      });
    const v1401 = stdlib.eq(v1072, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
    stdlib.assert(v1401, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:134:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:132:38:application call to [unknown function] (defined at: ./index.rsh:132:38:function exp)', 'at ./index.rsh:132:38:application call to [unknown function] (defined at: ./index.rsh:132:38:function exp)'],
      msg: 'Bad Request. You can only finalize a contract that is already approved by supplier.',
      who: 'Buyer'
      });
    ;
    const v1407 = null;
    await txn4.getOutput('BuyerAPI_delivered', 'v1407', ctc3, v1407);
    const cv1370 = v1396;
    const cv1371 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3');
    const cv1372 = v1396;
    
    v1370 = cv1370;
    v1371 = cv1371;
    v1372 = cv1372;
    
    txn3 = txn4;
    continue;
    
    }
  return;
  
  
  };
export async function _BuyerAPI_delivered4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _BuyerAPI_delivered4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _BuyerAPI_delivered4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Null;
  
  
  const [v1048, v1049, v1050, v1051, v1069, v1070, v1071, v1072, v1370, v1371] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc1, ctc0, ctc2, ctc4, ctc1, ctc2, ctc2, ctc2, ctc2]);
  const v1381 = ctc.selfAddress();
  const v1383 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:132:38:application call to [unknown function] (defined at: ./index.rsh:132:38:function exp)', 'at ./index.rsh:132:38:application call to [unknown function] (defined at: ./index.rsh:132:38:function exp)'],
    msg: 'in',
    who: 'BuyerAPI_delivered'
    });
  const v1384 = stdlib.addressEq(v1381, v1048);
  stdlib.assert(v1384, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:133:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:132:38:application call to [unknown function] (defined at: ./index.rsh:132:38:function exp)', 'at ./index.rsh:132:38:application call to [unknown function] (defined at: ./index.rsh:132:38:function exp)'],
    msg: 'Unauthorized. Your wallet address does not match the buyer\'s address.',
    who: 'BuyerAPI_delivered'
    });
  const v1386 = stdlib.eq(v1072, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  stdlib.assert(v1386, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:134:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:132:38:application call to [unknown function] (defined at: ./index.rsh:132:38:function exp)', 'at ./index.rsh:132:38:application call to [unknown function] (defined at: ./index.rsh:132:38:function exp)'],
    msg: 'Bad Request. You can only finalize a contract that is already approved by supplier.',
    who: 'BuyerAPI_delivered'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1048, v1049, v1050, v1051, v1069, v1070, v1071, v1072, v1370, v1371, v1383],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5],
    pay: [stdlib.checkedBigNumberify('./index.rsh:136:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1395], secs: v1397, time: v1396, didSend: v978, from: v1394 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "BuyerAPI_delivered"
        });
      ;
      const v1407 = null;
      const v1408 = await txn1.getOutput('BuyerAPI_delivered', 'v1407', ctc6, v1407);
      
      const v2115 = v1396;
      const v2116 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3');
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc0, ctc2, ctc4, ctc1, ctc2, ctc2, ctc2, ctc2, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [v1395], secs: v1397, time: v1396, didSend: v978, from: v1394 } = txn1;
  undefined /* setApiDetails */;
  const v1399 = stdlib.addressEq(v1394, v1048);
  stdlib.assert(v1399, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:133:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:132:38:application call to [unknown function] (defined at: ./index.rsh:132:38:function exp)', 'at ./index.rsh:132:38:application call to [unknown function] (defined at: ./index.rsh:132:38:function exp)'],
    msg: 'Unauthorized. Your wallet address does not match the buyer\'s address.',
    who: 'BuyerAPI_delivered'
    });
  const v1401 = stdlib.eq(v1072, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
  stdlib.assert(v1401, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:134:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:132:38:application call to [unknown function] (defined at: ./index.rsh:132:38:function exp)', 'at ./index.rsh:132:38:application call to [unknown function] (defined at: ./index.rsh:132:38:function exp)'],
    msg: 'Bad Request. You can only finalize a contract that is already approved by supplier.',
    who: 'BuyerAPI_delivered'
    });
  ;
  const v1407 = null;
  const v1408 = await txn1.getOutput('BuyerAPI_delivered', 'v1407', ctc6, v1407);
  if (v978) {
    stdlib.protect(ctc6, await interact.out(v1395, v1408), {
      at: './index.rsh:132:15:application',
      fs: ['at ./index.rsh:132:15:application call to [unknown function] (defined at: ./index.rsh:132:15:function exp)', 'at ./index.rsh:137:20:application call to "ret" (defined at: ./index.rsh:136:29:function exp)', 'at ./index.rsh:136:29:application call to [unknown function] (defined at: ./index.rsh:136:29:function exp)'],
      msg: 'out',
      who: 'BuyerAPI_delivered'
      });
    }
  else {
    }
  
  const v2115 = v1396;
  const v2116 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3');
  return;
  
  
  
  };
export async function _SellerAPI_addIngredient5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _SellerAPI_addIngredient5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _SellerAPI_addIngredient5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc5 = stdlib.T_Tuple([ctc3]);
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Data({
    SellerAPI_addIngredient0_110: ctc5,
    SellerAPI_approve0_110: ctc6,
    SellerAPI_reject0_110: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v1048, v1049, v1050, v1051, v1068, v1069, v1070, v1071, v1072] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc0, ctc2, ctc2, ctc4, ctc1, ctc2, ctc2]);
  const v1123 = ctc.selfAddress();
  const v1125 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:95:52:application call to [unknown function] (defined at: ./index.rsh:95:52:function exp)', 'at ./index.rsh:85:23:application call to "runSellerAPI_addIngredient0_110" (defined at: ./index.rsh:95:14:function exp)', 'at ./index.rsh:85:23:application call to [unknown function] (defined at: ./index.rsh:85:23:function exp)'],
    msg: 'in',
    who: 'SellerAPI_addIngredient'
    });
  const v1128 = stdlib.addressEq(v1123, v1050);
  stdlib.assert(v1128, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:96:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:95:52:application call to [unknown function] (defined at: ./index.rsh:95:52:function exp)', 'at ./index.rsh:85:23:application call to "runSellerAPI_addIngredient0_110" (defined at: ./index.rsh:95:14:function exp)', 'at ./index.rsh:85:23:application call to [unknown function] (defined at: ./index.rsh:85:23:function exp)'],
    msg: 'Unauthorized. Your wallet address does not match the supplier\'s address.',
    who: 'SellerAPI_addIngredient'
    });
  const v1130 = stdlib.lt(v1068, stdlib.checkedBigNumberify('./index.rsh:97:28:decimal', stdlib.UInt_max, '10'));
  stdlib.assert(v1130, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:97:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:95:52:application call to [unknown function] (defined at: ./index.rsh:95:52:function exp)', 'at ./index.rsh:85:23:application call to "runSellerAPI_addIngredient0_110" (defined at: ./index.rsh:95:14:function exp)', 'at ./index.rsh:85:23:application call to [unknown function] (defined at: ./index.rsh:85:23:function exp)'],
    msg: 'Bad Request. The total number of ingredients cannot exceed 10',
    who: 'SellerAPI_addIngredient'
    });
  const v1137 = ['SellerAPI_addIngredient0_110', v1125];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1048, v1049, v1050, v1051, v1068, v1069, v1070, v1071, v1072, v1137],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:99:22:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1177], secs: v1179, time: v1178, didSend: v696, from: v1176 } = txn1;
      
      switch (v1177[0]) {
        case 'SellerAPI_addIngredient0_110': {
          const v1180 = v1177[1];
          sim_r.txns.push({
            kind: 'api',
            who: "SellerAPI_addIngredient"
            });
          ;
          const v1198 = v1180[stdlib.checkedBigNumberify('./index.rsh:95:14:spread', stdlib.UInt_max, '0')];
          const v1204 = null;
          const v1205 = await txn1.getOutput('SellerAPI_addIngredient', 'v1204', ctc9, v1204);
          
          const v1212 = stdlib.Array_set(v1069, v1068, v1198);
          const v1213 = stdlib.safeAdd(v1068, stdlib.checkedBigNumberify('./index.rsh:101:76:decimal', stdlib.UInt_max, '1'));
          const v2118 = v1213;
          const v2119 = v1212;
          const v2120 = v1070;
          const v2121 = v1071;
          const v2122 = v1072;
          const v2124 = stdlib.eq(v1072, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          if (v2124) {
            sim_r.isHalt = false;
            }
          else {
            const v2137 = stdlib.checkedBigNumberify('./index.rsh:124:33:decimal', stdlib.UInt_max, '0');
            const v2138 = v1072;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'SellerAPI_approve0_110': {
          const v1240 = v1177[1];
          
          break;
          }
        case 'SellerAPI_reject0_110': {
          const v1300 = v1177[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc0, ctc2, ctc2, ctc4, ctc1, ctc2, ctc2, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1177], secs: v1179, time: v1178, didSend: v696, from: v1176 } = txn1;
  switch (v1177[0]) {
    case 'SellerAPI_addIngredient0_110': {
      const v1180 = v1177[1];
      undefined /* setApiDetails */;
      const v1186 = stdlib.addressEq(v1176, v1050);
      stdlib.assert(v1186, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:96:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:95:52:application call to [unknown function] (defined at: ./index.rsh:95:52:function exp)', 'at ./index.rsh:85:23:application call to [unknown function] (defined at: ./index.rsh:95:52:function exp)', 'at ./index.rsh:85:23:application call to [unknown function] (defined at: ./index.rsh:85:23:function exp)'],
        msg: 'Unauthorized. Your wallet address does not match the supplier\'s address.',
        who: 'SellerAPI_addIngredient'
        });
      const v1188 = stdlib.lt(v1068, stdlib.checkedBigNumberify('./index.rsh:97:28:decimal', stdlib.UInt_max, '10'));
      stdlib.assert(v1188, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:97:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:95:52:application call to [unknown function] (defined at: ./index.rsh:95:52:function exp)', 'at ./index.rsh:85:23:application call to [unknown function] (defined at: ./index.rsh:95:52:function exp)', 'at ./index.rsh:85:23:application call to [unknown function] (defined at: ./index.rsh:85:23:function exp)'],
        msg: 'Bad Request. The total number of ingredients cannot exceed 10',
        who: 'SellerAPI_addIngredient'
        });
      ;
      const v1198 = v1180[stdlib.checkedBigNumberify('./index.rsh:95:14:spread', stdlib.UInt_max, '0')];
      const v1204 = null;
      const v1205 = await txn1.getOutput('SellerAPI_addIngredient', 'v1204', ctc9, v1204);
      if (v696) {
        stdlib.protect(ctc9, await interact.out(v1180, v1205), {
          at: './index.rsh:95:15:application',
          fs: ['at ./index.rsh:95:15:application call to [unknown function] (defined at: ./index.rsh:95:15:function exp)', 'at ./index.rsh:100:20:application call to "ret" (defined at: ./index.rsh:99:30:function exp)', 'at ./index.rsh:99:30:application call to [unknown function] (defined at: ./index.rsh:99:30:function exp)'],
          msg: 'out',
          who: 'SellerAPI_addIngredient'
          });
        }
      else {
        }
      
      const v1212 = stdlib.Array_set(v1069, v1068, v1198);
      const v1213 = stdlib.safeAdd(v1068, stdlib.checkedBigNumberify('./index.rsh:101:76:decimal', stdlib.UInt_max, '1'));
      const v2118 = v1213;
      const v2119 = v1212;
      const v2120 = v1070;
      const v2121 = v1071;
      const v2122 = v1072;
      const v2124 = stdlib.eq(v1072, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      if (v2124) {
        return;
        }
      else {
        const v2137 = stdlib.checkedBigNumberify('./index.rsh:124:33:decimal', stdlib.UInt_max, '0');
        const v2138 = v1072;
        return;
        }
      break;
      }
    case 'SellerAPI_approve0_110': {
      const v1240 = v1177[1];
      return;
      break;
      }
    case 'SellerAPI_reject0_110': {
      const v1300 = v1177[1];
      return;
      break;
      }
    }
  
  
  };
export async function _SellerAPI_approve5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _SellerAPI_approve5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _SellerAPI_approve5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc3]);
  const ctc7 = stdlib.T_Tuple([ctc1]);
  const ctc8 = stdlib.T_Data({
    SellerAPI_addIngredient0_110: ctc6,
    SellerAPI_approve0_110: ctc5,
    SellerAPI_reject0_110: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v1048, v1049, v1050, v1051, v1068, v1069, v1070, v1071, v1072] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc0, ctc2, ctc2, ctc4, ctc1, ctc2, ctc2]);
  const v1139 = ctc.selfAddress();
  const v1141 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:104:37:application call to [unknown function] (defined at: ./index.rsh:104:37:function exp)', 'at ./index.rsh:85:23:application call to "runSellerAPI_approve0_110" (defined at: ./index.rsh:104:14:function exp)', 'at ./index.rsh:85:23:application call to [unknown function] (defined at: ./index.rsh:85:23:function exp)'],
    msg: 'in',
    who: 'SellerAPI_approve'
    });
  const v1142 = stdlib.addressEq(v1139, v1050);
  stdlib.assert(v1142, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:105:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:104:37:application call to [unknown function] (defined at: ./index.rsh:104:37:function exp)', 'at ./index.rsh:85:23:application call to "runSellerAPI_approve0_110" (defined at: ./index.rsh:104:14:function exp)', 'at ./index.rsh:85:23:application call to [unknown function] (defined at: ./index.rsh:85:23:function exp)'],
    msg: 'Unauthorized. Your wallet address does not match the supplier\'s address.',
    who: 'SellerAPI_approve'
    });
  const v1147 = ['SellerAPI_approve0_110', v1141];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1048, v1049, v1050, v1051, v1068, v1069, v1070, v1071, v1072, v1147],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:107:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1177], secs: v1179, time: v1178, didSend: v696, from: v1176 } = txn1;
      
      switch (v1177[0]) {
        case 'SellerAPI_addIngredient0_110': {
          const v1180 = v1177[1];
          
          break;
          }
        case 'SellerAPI_approve0_110': {
          const v1240 = v1177[1];
          sim_r.txns.push({
            kind: 'api',
            who: "SellerAPI_approve"
            });
          ;
          const v1278 = null;
          const v1279 = await txn1.getOutput('SellerAPI_approve', 'v1278', ctc9, v1278);
          
          const v2207 = v1069;
          const v2208 = v1070;
          const v2209 = v1178;
          const v2210 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v2225 = stdlib.checkedBigNumberify('./index.rsh:124:33:decimal', stdlib.UInt_max, '0');
          const v2226 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          sim_r.isHalt = false;
          
          break;
          }
        case 'SellerAPI_reject0_110': {
          const v1300 = v1177[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc0, ctc2, ctc2, ctc4, ctc1, ctc2, ctc2, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1177], secs: v1179, time: v1178, didSend: v696, from: v1176 } = txn1;
  switch (v1177[0]) {
    case 'SellerAPI_addIngredient0_110': {
      const v1180 = v1177[1];
      return;
      break;
      }
    case 'SellerAPI_approve0_110': {
      const v1240 = v1177[1];
      undefined /* setApiDetails */;
      const v1251 = stdlib.addressEq(v1176, v1050);
      stdlib.assert(v1251, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:105:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:104:37:application call to [unknown function] (defined at: ./index.rsh:104:37:function exp)', 'at ./index.rsh:85:23:application call to [unknown function] (defined at: ./index.rsh:104:37:function exp)', 'at ./index.rsh:85:23:application call to [unknown function] (defined at: ./index.rsh:85:23:function exp)'],
        msg: 'Unauthorized. Your wallet address does not match the supplier\'s address.',
        who: 'SellerAPI_approve'
        });
      ;
      const v1278 = null;
      const v1279 = await txn1.getOutput('SellerAPI_approve', 'v1278', ctc9, v1278);
      if (v696) {
        stdlib.protect(ctc9, await interact.out(v1240, v1279), {
          at: './index.rsh:104:15:application',
          fs: ['at ./index.rsh:104:15:application call to [unknown function] (defined at: ./index.rsh:104:15:function exp)', 'at ./index.rsh:108:20:application call to "ret" (defined at: ./index.rsh:107:29:function exp)', 'at ./index.rsh:107:29:application call to [unknown function] (defined at: ./index.rsh:107:29:function exp)'],
          msg: 'out',
          who: 'SellerAPI_approve'
          });
        }
      else {
        }
      
      const v2207 = v1069;
      const v2208 = v1070;
      const v2209 = v1178;
      const v2210 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v2225 = stdlib.checkedBigNumberify('./index.rsh:124:33:decimal', stdlib.UInt_max, '0');
      const v2226 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      return;
      
      break;
      }
    case 'SellerAPI_reject0_110': {
      const v1300 = v1177[1];
      return;
      break;
      }
    }
  
  
  };
export async function _SellerAPI_reject5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _SellerAPI_reject5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _SellerAPI_reject5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Contract;
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc5 = stdlib.T_Tuple([ctc1]);
  const ctc6 = stdlib.T_Tuple([ctc3]);
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    SellerAPI_addIngredient0_110: ctc6,
    SellerAPI_approve0_110: ctc7,
    SellerAPI_reject0_110: ctc5
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v1048, v1049, v1050, v1051, v1068, v1069, v1070, v1071, v1072] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc0, ctc2, ctc2, ctc4, ctc1, ctc2, ctc2]);
  const v1149 = ctc.selfAddress();
  const v1151 = stdlib.protect(ctc5, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:112:42:application call to [unknown function] (defined at: ./index.rsh:112:42:function exp)', 'at ./index.rsh:85:23:application call to "runSellerAPI_reject0_110" (defined at: ./index.rsh:112:14:function exp)', 'at ./index.rsh:85:23:application call to [unknown function] (defined at: ./index.rsh:85:23:function exp)'],
    msg: 'in',
    who: 'SellerAPI_reject'
    });
  const v1154 = stdlib.addressEq(v1149, v1050);
  stdlib.assert(v1154, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:113:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:112:42:application call to [unknown function] (defined at: ./index.rsh:112:42:function exp)', 'at ./index.rsh:85:23:application call to "runSellerAPI_reject0_110" (defined at: ./index.rsh:112:14:function exp)', 'at ./index.rsh:85:23:application call to [unknown function] (defined at: ./index.rsh:85:23:function exp)'],
    msg: 'Unauthorized. Your wallet address does not match the supplier\'s address.',
    who: 'SellerAPI_reject'
    });
  const v1161 = ['SellerAPI_reject0_110', v1151];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1048, v1049, v1050, v1051, v1068, v1069, v1070, v1071, v1072, v1161],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./index.rsh:115:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1177], secs: v1179, time: v1178, didSend: v696, from: v1176 } = txn1;
      
      switch (v1177[0]) {
        case 'SellerAPI_addIngredient0_110': {
          const v1180 = v1177[1];
          
          break;
          }
        case 'SellerAPI_approve0_110': {
          const v1240 = v1177[1];
          
          break;
          }
        case 'SellerAPI_reject0_110': {
          const v1300 = v1177[1];
          sim_r.txns.push({
            kind: 'api',
            who: "SellerAPI_reject"
            });
          ;
          const v1347 = v1300[stdlib.checkedBigNumberify('./index.rsh:112:14:spread', stdlib.UInt_max, '0')];
          const v1351 = null;
          const v1352 = await txn1.getOutput('SellerAPI_reject', 'v1351', ctc9, v1351);
          
          const v2295 = v1069;
          const v2296 = v1347;
          const v2297 = v1178;
          const v2298 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
          const v2313 = stdlib.checkedBigNumberify('./index.rsh:124:33:decimal', stdlib.UInt_max, '0');
          const v2314 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc0, ctc2, ctc2, ctc4, ctc1, ctc2, ctc2, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1177], secs: v1179, time: v1178, didSend: v696, from: v1176 } = txn1;
  switch (v1177[0]) {
    case 'SellerAPI_addIngredient0_110': {
      const v1180 = v1177[1];
      return;
      break;
      }
    case 'SellerAPI_approve0_110': {
      const v1240 = v1177[1];
      return;
      break;
      }
    case 'SellerAPI_reject0_110': {
      const v1300 = v1177[1];
      undefined /* setApiDetails */;
      const v1315 = stdlib.addressEq(v1176, v1050);
      stdlib.assert(v1315, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:113:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:112:42:application call to [unknown function] (defined at: ./index.rsh:112:42:function exp)', 'at ./index.rsh:85:23:application call to [unknown function] (defined at: ./index.rsh:112:42:function exp)', 'at ./index.rsh:85:23:application call to [unknown function] (defined at: ./index.rsh:85:23:function exp)'],
        msg: 'Unauthorized. Your wallet address does not match the supplier\'s address.',
        who: 'SellerAPI_reject'
        });
      ;
      const v1347 = v1300[stdlib.checkedBigNumberify('./index.rsh:112:14:spread', stdlib.UInt_max, '0')];
      const v1351 = null;
      const v1352 = await txn1.getOutput('SellerAPI_reject', 'v1351', ctc9, v1351);
      if (v696) {
        stdlib.protect(ctc9, await interact.out(v1300, v1352), {
          at: './index.rsh:112:15:application',
          fs: ['at ./index.rsh:112:15:application call to [unknown function] (defined at: ./index.rsh:112:15:function exp)', 'at ./index.rsh:116:20:application call to "ret" (defined at: ./index.rsh:115:29:function exp)', 'at ./index.rsh:115:29:application call to [unknown function] (defined at: ./index.rsh:115:29:function exp)'],
          msg: 'out',
          who: 'SellerAPI_reject'
          });
        }
      else {
        }
      
      const v2295 = v1069;
      const v2296 = v1347;
      const v2297 = v1178;
      const v2298 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      const v2313 = stdlib.checkedBigNumberify('./index.rsh:124:33:decimal', stdlib.UInt_max, '0');
      const v2314 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      return;
      
      break;
      }
    }
  
  
  };
export async function BuyerAPI_delivered(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for BuyerAPI_delivered expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for BuyerAPI_delivered expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _BuyerAPI_delivered4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function SellerAPI_addIngredient(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for SellerAPI_addIngredient expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for SellerAPI_addIngredient expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _SellerAPI_addIngredient5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function SellerAPI_approve(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for SellerAPI_approve expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for SellerAPI_approve expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _SellerAPI_approve5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function SellerAPI_reject(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for SellerAPI_reject expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for SellerAPI_reject expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _SellerAPI_reject5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`BuyerAPI_delivered()byte[0]`, `SellerAPI_addIngredient(uint64)byte[0]`, `SellerAPI_approve()byte[0]`, `SellerAPI_reject(byte[128])byte[0]`],
    pure: [`Explorer_buyerAddress()address`, `Explorer_deliveredNetworkTime()uint64`, `Explorer_deployedNetworkTime()uint64`, `Explorer_listOfIngredients()uint64[10]`, `Explorer_name()byte[128]`, `Explorer_rejectReason()byte[128]`, `Explorer_reviewedNetworkTime()uint64`, `Explorer_state()uint64`, `Explorer_supplierAddress()address`],
    sigs: [`BuyerAPI_delivered()byte[0]`, `Explorer_buyerAddress()address`, `Explorer_deliveredNetworkTime()uint64`, `Explorer_deployedNetworkTime()uint64`, `Explorer_listOfIngredients()uint64[10]`, `Explorer_name()byte[128]`, `Explorer_rejectReason()byte[128]`, `Explorer_reviewedNetworkTime()uint64`, `Explorer_state()uint64`, `Explorer_supplierAddress()address`, `SellerAPI_addIngredient(uint64)byte[0]`, `SellerAPI_approve()byte[0]`, `SellerAPI_reject(byte[128])byte[0]`]
    },
  appApproval: `ByAbAAUEAQiAAagDoAMCosaI2wWBvIzlB8TmsY8NmcT4kg2YA/3psbgIoAKYAqSAm5MGxaPdzQfl3uKuA6jTlL0Elqf0sQXv2o9brtj34gEDwAH9AiYFAQABAQECAQMAIjUAMRhBBjAnBGRJIls1ASEEWzUCNhoAF0lBAswiNQQlNQZJIQkMQAGFSSEKDEABDkkhCwxAAHtJIQwMQAAyIQwSRDQBSSMMQAALIxJEIQSvNQdCBdokEkQoZClkUCpkUCtkUEk1AyEGIQRYNQdCBb8hCxJENAFJIwxAABsjEkQoZClkUCpkUCtkUEk1AyEHIQRYNQdCBZgkEkQoZClkUCpkUCtkUEk1AyENIQRYNQdCBX1JIQ4MQABDIQ4SRDQBSSMMQAAbIxJEKGQpZFAqZFArZFBJNQMhBiEEWDUHQgVPJBJEKGQpZFAqZFArZFBJNQOBsAMhBFg1B0IFMyEKEkQ0AUkjDEAAGyMSRChkKWRQKmRQK2RQSTUDIQ8hBVg1B0IFDCQSRChkKWRQKmRQK2RQSTUDIRAhBVg1B0IE8UkhEQxAAFVJIRIMQAA+IRISRDQBSSMMQAAZIxJEKGQpZFAqZFArZFBJNQNXoCA1B0IEviQSRChkKWRQKmRQK2RQSTUDV6AgNQdCBKUhERJENhoBNf8qNP9QQgFrIQkSRDYaATX/KDT/UIF4r1BCAVdJIRMMQACTSSEUDEAATkkhFQxAAD4hFRJENAFJIwxAABkjEkQoZClkUCpkUCtkUEk1A1fQUDUHQgRHJBJEKGQpZFAqZFArZFBJNQNXyFA1B0IELiEUEkQnBEICESETEkQ0AUkjDEAAGSMSRChkKWRQKmRQK2RQSTUDV8AINQdCBAAkEkQoZClkUCpkUCtkUEk1A1fACDUHQgPnSSEWDEAAg0khFwxAAD4hFxJENAFJIwxAABkjEkQoZClkUCpkUCtkUEk1A1cggDUHQgO0JBJEKGQpZFAqZFArZFBJNQNXIIA1B0IDmyEWEkQ0AUkjDEAAGSMSRChkKWRQKmRQK2RQSTUDVwAgNQdCA3YkEkQoZClkUCpkUCtkUEk1A1cAIDUHQgNdgdOL9B8SRCcENf8pNP9QIQWvUEIAHTYaAhc1BDYaAzYaARdJIRgMQAGeSSQMQAEYJBJEIzQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQK2RQSTUDSUpKSVcAIDX/VyCANf5XoCA1/SEZWzX8gcgBWzX7V9BQNfohDyEFWDX5STUFNfiABMteWac0+FCwNPgiVUklDEAAakkhCAxAADchCBJENPhXAYA19zEANP0SRIAIAAAAAAAABUewJwQ1BzT/NP40/TT8NPs0+jT3MgYhCDIGQgFpSDEANP0SRIAIAAAAAAAABP6wJwQ1BzT/NP40/TT8NPs0+jT5MgYlMgZCAT1INPhXAQg19zEANP0SRDT7gQoMRIAIAAAAAAAABLSwJwQ1BzT/NP40/TT8NPslCDT6NPshBAs09100+TQDIQdbNAMhBlsyBkIA80gkNAESRDQESSISTDQCEhFEKGQpZFAqZFArZFBJNQNJVwAgNf8hB1s1/kk1BTX9gATImg+7NP1QsDEANP8SRDT+JRJEgAgAAAAAAAAFf7AnBDUHNP80A1cggDQDV6AgNAMhGVs0A1fIUDQDIRAhBVg0AyENWzT+MgYhGDIGQgDtIhJEgaCNBogBsCI0ARJENARJIhJMNAISEURJNQVJVwCANf9XgCA1/oAEr+ePjzT/UDT+ULAxGDX9MQA0/zT+MgYiNP0WNP0WUDT9FlA0/RZQNP0WUDT9FlA0/RZQNP0WUDT9FlA0/RZQIQWvIiIyBkIAADX/Nf41/TX8Nfs1+jX5Nfg19zX2NP4iEkEARzT2NPdQNPhQNPkWUDT6FlA0+1A0/FA0/RZQIQSvUChLAVcAf2cpSwFXf39nKksBV/5/ZytLASEagTNYZ0gjNQEyBjUCQgCTNPY09zT4NPk0+zT8NP00/iI0/jT/QgAANf81/jX9Nfw1+zX6Nfk1+DX3NfZJNfU09lA091A0+BZQNPlQNPpQNPsWUDT8FlA0/RZQNP4WUChLAVcAf2cpSwFXf39nKksBV/5/ZytLASEagTtYZ0gkNQEyBjUCQgAbMRkjEkSxIrIBIrIIJbIQMgmyCTIKsgezQgAFMRkiEkQnBDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJJQgyBBJEMRYSRCVDMRkiEkRC/98iMTQSRCMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUolCDUAOAcyChJEOBAlEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 4,
  stateSize: 440,
  unsupported: [],
  version: 11,
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v1049",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v1050",
                "type": "address"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T1",
                "name": "v1049",
                "type": "tuple"
              },
              {
                "internalType": "address payable",
                "name": "v1050",
                "type": "address"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
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
                "internalType": "bool",
                "name": "v1395",
                "type": "bool"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T17",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T15",
                    "name": "_SellerAPI_addIngredient0_110",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_SellerAPI_approve0_110",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "bytes32",
                            "name": "elem0",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem1",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem2",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem3",
                            "type": "bytes32"
                          }
                        ],
                        "internalType": "struct T1",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_SellerAPI_reject0_110",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T17",
                "name": "v1177",
                "type": "tuple"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T19",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1204",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1278",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1351",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1407",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "BuyerAPI_delivered",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Explorer_buyerAddress",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Explorer_deliveredNetworkTime",
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
    "name": "Explorer_deployedNetworkTime",
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
    "name": "Explorer_listOfIngredients",
    "outputs": [
      {
        "internalType": "address payable[10]",
        "name": "",
        "type": "address[10]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Explorer_name",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          }
        ],
        "internalType": "struct T1",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Explorer_rejectReason",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          }
        ],
        "internalType": "struct T1",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Explorer_reviewedNetworkTime",
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
    "name": "Explorer_state",
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
    "name": "Explorer_supplierAddress",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "SellerAPI_addIngredient",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "SellerAPI_approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          }
        ],
        "internalType": "struct T1",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "SellerAPI_reject",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
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
                "internalType": "bool",
                "name": "v1395",
                "type": "bool"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
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
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T17",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T15",
                    "name": "_SellerAPI_addIngredient0_110",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_SellerAPI_approve0_110",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "bytes32",
                            "name": "elem0",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem1",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem2",
                            "type": "bytes32"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "elem3",
                            "type": "bytes32"
                          }
                        ],
                        "internalType": "struct T1",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T16",
                    "name": "_SellerAPI_reject0_110",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T17",
                "name": "v1177",
                "type": "tuple"
              }
            ],
            "internalType": "struct T18",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T19",
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
  Bytecode: `0x608060405260405162003474380380620034748339810160408190526200002691620007f3565b600080554360035562000038620003f5565b7ff91ace7dfee6dacafdb1fa38da4ad74f2bff1584c4325a574a3ebf6c4078eafa33836040516200006b929190620008ac565b60405180910390a16200008134156010620001bf565b308082526020808301805192909252825182516001600160a01b03918216908301528351835190821660409182015284518451908316606091820152855185519084166080909101528551855190841660a0909101528551855190841660c0909101528551855190841660e09091015285518551908416610100909101528551945194909216610120909401939093528284018051600090819052815190930183905280519093018290529151909101526200013c62000449565b8051339052602083810180515183518301525181015182516001600160a01b0390911660409182015282514360609182018190528385018051600090819052878601518251909601959095528684015181519094019390935282519091018390528151608001929092525160a00152620001b681620001e9565b50505062000b2d565b81620001e55760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b602081015160800151620002ac57620002016200049c565b8151516001600160a01b0390811682528251602090810151818401528351604090810151909216828401528351606090810151818501528185018051516080860152805183015160a0860152805184015160c086015251015160e08401526000610100840181905260059055436001559051620002819183910162000945565b60405160208183030381529060405260029080519060200190620002a79291906200053a565b505050565b620002b6620005c9565b81515181516001600160a01b039182169052825160209081015183518201528351604090810151845193169281019290925283516060908101518451820152818501805183015185516080908101919091528151850151865160a090810191909152825190930151865160c001528151810151865160e00152838601805160009052825190910151815190940193909352510151905190910152620001e5816200035f62000608565b8151516001600160a01b039081168252825160209081015181840152835160409081015190921682840152835160609081015190840152835160809081015190840152835160a09081015190840152835160c09081015190840152835160e09081015190840152808401805151610100850152518101516101208401526004600055436001559051620002819183910162000a17565b604051806060016040528060006001600160a01b031681526020016200041a620006a4565b81526040805160808101825260008082526020828101829052928201819052606082015291015290565b905290565b6040805160c081018252600081830181815283516080818101865283825260208201849052948101839052606080820184905284015292820181905260a0820152908190815260200162000444620006c3565b604080516101208101825260008082528251608081018452818152602081810183905293810182905260608101919091529091820190815260200160006001600160a01b031681526020016000815260200160008152602001620004ff620006a4565b815260408051608081018252600080825260208281018290529282018190526060820152910190815260200160008152602001600081525090565b828054620005489062000af0565b90600052602060002090601f0160209004810192826200056c5760008555620005b7565b82601f106200058757805160ff1916838001178555620005b7565b82800160010185558215620005b7579182015b82811115620005b75782518255916020019190600101906200059a565b50620005c592915062000721565b5090565b6040518060400160405280620005de62000738565b81526020016200044460405180606001604052806000815260200160008152602001600081525090565b604080516101408101825260008082528251608081018452818152602081810183905293810182905260608101919091529091820190815260006020820181905260408201526060016200065b620006a4565b8152604080516080810182526000808252602082810182905292820181905260608201529101908152602001600081526020016000815260200160008152602001600081525090565b604051806101400160405280600a906020820280368337509192915050565b6040518060c0016040528060008152602001620006df620006a4565b81526040805160808101825260008082526020828101829052928201819052606082015291019081526020016000815260200160008152602001600081525090565b5b80821115620005c5576000815560010162000722565b60408051610100810182526000808252825160808101845281815260208181018390529381018290526060810191909152909182019081526000602082018190526040820152606001620004ff620006a4565b604080519081016001600160401b0381118282101715620007bc57634e487b7160e01b600052604160045260246000fd5b60405290565b604051608081016001600160401b0381118282101715620007bc57634e487b7160e01b600052604160045260246000fd5b600081830360c08112156200080757600080fd5b620008116200078b565b83518152601f198201915060a08212156200082b57600080fd5b620008356200078b565b60808312156200084457600080fd5b6200084e620007c2565b92506020850151835260408501516020840152606085015160408401526080850151606084015282815260a0850151925060018060a01b03831683146200089457600080fd5b82602082015280602083015250809250505092915050565b600060e08201905060018060a01b038085168352835160208401526020840151620008fc604085018251805182526020810151602083015260408101516040830152606081015160608301525050565b8160208201511660c085015250509392505050565b8060005b600a8110156200093f5781516001600160a01b031684526020938401939091019060010162000915565b50505050565b81516001600160a01b031681526020808301516103008301916200098c90840182805182526020810151602083015260408101516040830152606081015160608301525050565b5060408301516001600160a01b03811660a084015250606083015160c0830152608083015160e083015260a0830151610100620009cc8185018362000911565b60c0850151805161024086015260208101516102608601526040810151610280860152606001516102a085015260e08501516102c0850152909301516102e090920191909152919050565b81516001600160a01b031681526103208101602083015162000a5d6020840182805182526020810151602083015260408101516040830152606081015160608301525050565b5060408301516001600160a01b031660a0830152606083015160c0830152608083015162000a8f60e084018262000911565b5060a08301518051610220840152602081015161024084015260408101516102608401526060015161028083015260c08301516102a083015260e08301516102c08301526101008301516102e0830152610120909201516103009091015290565b600181811c9082168062000b0557607f821691505b6020821081141562000b2757634e487b7160e01b600052602260045260246000fd5b50919050565b6129378062000b3d6000396000f3fe6080604052600436106101015760003560e01c80639d652fa21161008f578063c95dab7a11610061578063c95dab7a14610242578063dae160311461026f578063e2186a0814610284578063efb3493314610297578063f186ecb1146102ac57005b80639d652fa2146101e2578063ab53f2c6146101f7578063ab7a7f411461021a578063bd7ce4101461022d57005b80632a146d07116100d35780632a146d071461017b57806379a7e9b71461018e578063810771ba146101a357806383230757146101ab5780638e4ad75f146101c057005b80630ef1b8d71461010a578063196c99be146101325780631e93b0f11461015457806321b46f331461017357005b3661010857005b005b61011d610118366004612129565b6102c1565b60405190151581526020015b60405180910390f35b34801561013e57600080fd5b506101476102d2565b604051610129919061214c565b34801561016057600080fd5b506003545b604051908152602001610129565b61011d6102eb565b61011d61018936600461218c565b6102fa565b34801561019a57600080fd5b50610165610305565b61011d610311565b3480156101b757600080fd5b50600154610165565b3480156101cc57600080fd5b506101d561031b565b60405161012991906121a9565b3480156101ee57600080fd5b5061014761032e565b34801561020357600080fd5b5061020c610341565b6040516101299291906121e4565b610108610228366004612241565b6103de565b34801561023957600080fd5b5061016561041e565b34801561024e57600080fd5b5061025761042a565b6040516001600160a01b039091168152602001610129565b34801561027b57600080fd5b50610165610436565b61010861029236600461225a565b610442565b3480156102a357600080fd5b5061016561047e565b3480156102b857600080fd5b5061025761048a565b60006102cc82610496565b92915050565b6102da611c86565b60006102e5816104ee565b91505090565b60006102f5610673565b905090565b60006102cc826106bf565b6000806102e58161071b565b60006102f561088a565b610323611cad565b60006102e5816108ce565b610336611c86565b60006102e581610a43565b6000606060005460028080546103569061226c565b80601f01602080910402602001604051908101604052809291908181526020018280546103829061226c565b80156103cf5780601f106103a4576101008083540402835291602001916103cf565b820191906000526020600020905b8154815290600101906020018083116103b257829003601f168201915b50505050509050915091509091565b60408051608081018252600080825260208201819052918101829052606081019190915261041a610414368490038401846122b1565b82610bad565b5050565b6000806102e58161103d565b6000806102e5816111a1565b6000806102e58161130d565b60408051608081018252600080825260208201819052918101829052606081019190915261041a6104783684900384018461238c565b82611487565b6000806102e5816116a2565b6000806102e581611812565b60006104a0611ccc565b6020818101805151600290525151606090810151859052604080516080810182526000808252938101849052908101839052908101919091526104e38282610bad565b606001519392505050565b6104f6611c86565b600460005414156105ac576000600280546105109061226c565b80601f016020809104026020016040519081016040528092919081815260200182805461053c9061226c565b80156105895780601f1061055e57610100808354040283529160200191610589565b820191906000526020600020905b81548152906001019060200180831161056c57829003601f168201915b50505050508060200190518101906105a191906124de565b60a001519392505050565b60056000541415610662576000600280546105c69061226c565b80601f01602080910402602001604051908101604052809291908181526020018280546105f29061226c565b801561063f5780601f106106145761010080835404028352916020019161063f565b820191906000526020600020905b81548152906001019060200180831161062257829003601f168201915b5050505050806020019051810190610657919061258b565b60c001519392505050565b61066e6000600c61197d565b919050565b600061067d611ccc565b602081810151516001905260408051608081018252600080825292810183905290810182905260608101919091526106b58282610bad565b6040015192915050565b60006106c9611ccc565b60208181018051516000908190529051518201516001600160a01b038616905260408051608081018252828152928301829052820181905260608201526107108282610bad565b602001519392505050565b6000600460005414156107c8576000600280546107379061226c565b80601f01602080910402602001604051908101604052809291908181526020018280546107639061226c565b80156107b05780601f10610785576101008083540402835291602001916107b0565b820191906000526020600020905b81548152906001019060200180831161079357829003601f168201915b505050505080602001905181019061065791906124de565b6005600054141561087e576000600280546107e29061226c565b80601f016020809104026020016040519081016040528092919081815260200182805461080e9061226c565b801561085b5780601f106108305761010080835404028352916020019161085b565b820191906000526020600020905b81548152906001019060200180831161083e57829003601f168201915b5050505050806020019051810190610873919061258b565b60e001519392505050565b61066e6000600d61197d565b6000610894611ceb565b60208181015160009081905260408051608081018252828152928301829052820181905260608201526108c78282611487565b5192915050565b6108d6611cad565b6004600054141561098c576000600280546108f09061226c565b80601f016020809104026020016040519081016040528092919081815260200182805461091c9061226c565b80156109695780601f1061093e57610100808354040283529160200191610969565b820191906000526020600020905b81548152906001019060200180831161094c57829003601f168201915b505050505080602001905181019061098191906124de565b608001519392505050565b60056000541415610a37576000600280546109a69061226c565b80601f01602080910402602001604051908101604052809291908181526020018280546109d29061226c565b8015610a1f5780601f106109f457610100808354040283529160200191610a1f565b820191906000526020600020905b815481529060010190602001808311610a0257829003601f168201915b50505050508060200190518101906105a1919061258b565b61066e6000600a61197d565b610a4b611c86565b60046000541415610af657600060028054610a659061226c565b80601f0160208091040260200160405190810160405280929190818152602001828054610a919061226c565b8015610ade5780601f10610ab357610100808354040283529160200191610ade565b820191906000526020600020905b815481529060010190602001808311610ac157829003601f168201915b505050505080602001905181019061071091906124de565b60056000541415610ba157600060028054610b109061226c565b80601f0160208091040260200160405190810160405280929190818152602001828054610b3c9061226c565b8015610b895780601f10610b5e57610100808354040283529160200191610b89565b820191906000526020600020905b815481529060010190602001808311610b6c57829003601f168201915b5050505050806020019051810190610710919061258b565b61066e6000600b61197d565b610bbd600560005414601d61197d565b8151610bd8901580610bd157508251600154145b601e61197d565b600080805560028054610bea9061226c565b80601f0160208091040260200160405190810160405280929190818152602001828054610c169061226c565b8015610c635780601f10610c3857610100808354040283529160200191610c63565b820191906000526020600020905b815481529060010190602001808311610c4657829003601f168201915b5050505050806020019051810190610c7b919061258b565b9050610c85611d15565b7f1e4b67233cdda29ec5a0e9c4ecfb3bf44b7e195830f406631a2c5f624513b9783385604051610cb692919061262e565b60405180910390a16000602085015151516002811115610cd857610cd8612402565b1415610e105760208481015151015181526040820151610d04906001600160a01b03163314601661197d565b610d16600a836080015110601761197d565b610d223415601861197d565b604051600081527f84ba2a06bb47661d96f8b3f61ad3cc3e877040cdf1116a627d8e3087027ab4f19060200160405180910390a160006020840152610d65611d36565b825181516001600160a01b039182169052602080850151835190910152604080850151835192169101526060808401518251909101526080830151610dab9060016119a3565b60208201515260a08301516080840151835151610dc99291906119f0565b602080830180519091019190915260c084015181516040015260e0840151815160600152610100840151815160800152514360a090910152610e0a81611a80565b50611037565b6001602085015151516002811115610e2a57610e2a612402565b1415610f2257610e5382604001516001600160a01b0316336001600160a01b031614601961197d565b610e5f3415601a61197d565b604051600081527f7097e06603ef446fd4e3c1a893cc86bac9d2ed34ebfb1b9a94a98050a7d6db4f9060200160405180910390a160006040840152610ea2611d36565b825181516001600160a01b03918216905260208085015183518201526040808601518451931692810192909252606080860151845182015260808087015183860180519190915260a08089015182519095019490945260c088015181519095019490945283514392018290528351600191015291510152610e0a81611a80565b6002602085015151516002811115610f3c57610f3c612402565b1415611037576020848101515160600151908201526040820151610f6c906001600160a01b03163314601b61197d565b610f783415601c61197d565b604051600081527f3fafe75354f260145836f6231e8eaed0f3f87c3b9f3179a3b22f84a5845ededf9060200160405180910390a160006060840152610fbb611d36565b825181516001600160a01b03918216905260208085015183518201526040808601518451931692810192909252606080860151845182015260808087015183860180519190915260a0808901518251860152938701515181519095019490945283514392018290528351600291015291510152610e0a81611a80565b50505050565b6000600460005414156110ea576000600280546110599061226c565b80601f01602080910402602001604051908101604052809291908181526020018280546110859061226c565b80156110d25780601f106110a7576101008083540402835291602001916110d2565b820191906000526020600020905b8154815290600101906020018083116110b557829003601f168201915b50505050508060200190518101906104e391906124de565b60056000541415611195576000600280546111049061226c565b80601f01602080910402602001604051908101604052809291908181526020018280546111309061226c565b801561117d5780601f106111525761010080835404028352916020019161117d565b820191906000526020600020905b81548152906001019060200180831161116057829003601f168201915b50505050508060200190518101906104e3919061258b565b61066e6000600961197d565b600060046000541415611256576000600280546111bd9061226c565b80601f01602080910402602001604051908101604052809291908181526020018280546111e99061226c565b80156112365780601f1061120b57610100808354040283529160200191611236565b820191906000526020600020905b81548152906001019060200180831161121957829003601f168201915b505050505080602001905181019061124e91906124de565b519392505050565b60056000541415611301576000600280546112709061226c565b80601f016020809104026020016040519081016040528092919081815260200182805461129c9061226c565b80156112e95780601f106112be576101008083540402835291602001916112e9565b820191906000526020600020905b8154815290600101906020018083116112cc57829003601f168201915b505050505080602001905181019061124e919061258b565b61066e6000600761197d565b6000600460005414156113c6576000600280546113299061226c565b80601f01602080910402602001604051908101604052809291908181526020018280546113559061226c565b80156113a25780601f10611377576101008083540402835291602001916113a2565b820191906000526020600020905b81548152906001019060200180831161138557829003601f168201915b50505050508060200190518101906113ba91906124de565b61010001519392505050565b6005600054141561147b576000600280546113e09061226c565b80601f016020809104026020016040519081016040528092919081815260200182805461140c9061226c565b80156114595780601f1061142e57610100808354040283529160200191611459565b820191906000526020600020905b81548152906001019060200180831161143c57829003601f168201915b5050505050806020019051810190611471919061258b565b5060009392505050565b61066e6000600861197d565b611497600460005414601461197d565b81516114b29015806114ab57508251600154145b601561197d565b6000808055600280546114c49061226c565b80601f01602080910402602001604051908101604052809291908181526020018280546114f09061226c565b801561153d5780601f106115125761010080835404028352916020019161153d565b820191906000526020600020905b81548152906001019060200180831161152057829003601f168201915b505050505080602001905181019061155591906124de565b6040805133815285516020808301919091528601515115158183015290519192507fa5a264ad7bcb9788928e7795891942e9811712d8346314f9c3672363842f4e35919081900360600190a180516115b9906001600160a01b03163314601161197d565b6115cb60018260e0015114601261197d565b6115d73415601361197d565b604051600081527f70b1f2a83027293de909ed196cbb531500abd981a935d82ad58ab35c60c5f2e29060200160405180910390a160008252611617611d56565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169281019290925260608085015184519091015260808085015184519091015260a08085015184519091015260c08085015184519091015260e0808501518451909101528083018051439081905281516003930192909252519091015261103781611bea565b60006004600054141561175b576000600280546116be9061226c565b80601f01602080910402602001604051908101604052809291908181526020018280546116ea9061226c565b80156117375780601f1061170c57610100808354040283529160200191611737565b820191906000526020600020905b81548152906001019060200180831161171a57829003601f168201915b505050505080602001905181019061174f91906124de565b61012001519392505050565b60056000541415611806576000600280546117759061226c565b80601f01602080910402602001604051908101604052809291908181526020018280546117a19061226c565b80156117ee5780601f106117c3576101008083540402835291602001916117ee565b820191906000526020600020905b8154815290600101906020018083116117d157829003601f168201915b50505050508060200190518101906113ba919061258b565b61066e6000600e61197d565b6000600460005414156118ca5760006002805461182e9061226c565b80601f016020809104026020016040519081016040528092919081815260200182805461185a9061226c565b80156118a75780601f1061187c576101008083540402835291602001916118a7565b820191906000526020600020905b81548152906001019060200180831161188a57829003601f168201915b50505050508060200190518101906118bf91906124de565b604001519392505050565b60056000541415611975576000600280546118e49061226c565b80601f01602080910402602001604051908101604052809291908181526020018280546119109061226c565b801561195d5780601f106119325761010080835404028352916020019161195d565b820191906000526020600020905b81548152906001019060200180831161194057829003601f168201915b50505050508060200190518101906118bf919061258b565b61066e6000600f5b8161041a5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826119b083826126e7565b91508110156102cc5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640161199a565b6119f8611cad565b60005b600a811015611a52578481600a8110611a1657611a166126ff565b60200201518282600a8110611a2d57611a2d6126ff565b6001600160a01b03909216602092909202015280611a4a81612715565b9150506119fb565b50818184600a8110611a6657611a666126ff565b6001600160a01b0390921660209290920201529392505050565b602081015160800151611b3c57611a95611d92565b8151516001600160a01b0390811682528251602090810151818401528351604090810151909216828401528351606090810151818501528185018051516080860152805183015160a0860152805184015160c086015251015160e08401526000610100840181905260059055436001559051611b139183910161275c565b60405160208183030381529060405260029080519060200190611b37929190611e02565b505050565b611b44611d56565b81515181516001600160a01b039182169052825160209081015183518201528351604090810151845193169281019290925283516060908101518451820152818501805183015185516080908101919091528151850151865160a090810191909152825190930151865160c001528151810151865160e0015283860180516000905282519091015181519094019390935251015190519091015261041a81611bea565b50565b611bf2611e86565b8151516001600160a01b039081168252825160209081015181840152835160409081015190921682840152835160609081015190840152835160809081015190840152835160a09081015190840152835160c09081015190840152835160e09081015190840152808401805151610100850152518101516101208401526004600055436001559051611b139183910161282b565b60408051608081018252600080825260208201819052918101829052606081019190915290565b604051806101400160405280600a906020820280368337509192915050565b604051806040016040528060008152602001611ce6611ef4565b905290565b604051806040016040528060008152602001611ce660405180602001604052806000151581525090565b60408051606081018252600091810191825290815260208101611ce6611f07565b6040518060400160405280611d49611f1a565b8152602001611ce6611f51565b6040518060400160405280611d69611f93565b8152602001611ce660405180606001604052806000815260200160008152602001600081525090565b60405180610120016040528060006001600160a01b03168152602001611db6611c86565b815260200160006001600160a01b031681526020016000815260200160008152602001611de1611cad565b8152602001611dee611c86565b815260200160008152602001600081525090565b828054611e0e9061226c565b90600052602060002090601f016020900481019282611e305760008555611e76565b82601f10611e4957805160ff1916838001178555611e76565b82800160010185558215611e76579182015b82811115611e76578251825591602001919060010190611e5b565b50611e82929150611fd2565b5090565b60405180610140016040528060006001600160a01b03168152602001611eaa611c86565b81526000602082018190526040820152606001611ec5611cad565b8152602001611ed2611c86565b8152602001600081526020016000815260200160008152602001600081525090565b6040518060200160405280611ce6611fe7565b6040518060200160405280611ce6611c86565b604051806080016040528060006001600160a01b03168152602001611f3d611c86565b815260006020820181905260409091015290565b6040518060c0016040528060008152602001611f6b611cad565b8152602001611f78611c86565b81526020016000815260200160008152602001600081525090565b60405180610100016040528060006001600160a01b03168152602001611fb7611c86565b81526000602082018190526040820152606001611de1611cad565b5b80821115611e825760008155600101611fd3565b6040805160808101825260008082528251602080820185528282528301529181019190915260608101611ce6611f07565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff8111828210171561205157612051612018565b60405290565b6040805190810167ffffffffffffffff8111828210171561205157612051612018565b6040516020810167ffffffffffffffff8111828210171561205157612051612018565b604051610140810167ffffffffffffffff8111828210171561205157612051612018565b604051610120810167ffffffffffffffff8111828210171561205157612051612018565b6000608082840312156120f757600080fd5b6120ff61202e565b90508135815260208201356020820152604082013560408201526060820135606082015292915050565b60006080828403121561213b57600080fd5b61214583836120e5565b9392505050565b81518152602080830151908201526040808301519082015260608083015190820152608081016102cc565b6001600160a01b0381168114611be757600080fd5b60006020828403121561219e57600080fd5b813561214581612177565b6101408101818360005b600a8110156121db5781516001600160a01b03168352602092830192909101906001016121b3565b50505092915050565b82815260006020604081840152835180604085015260005b81811015612218578581018301518582016060015282016121fc565b8181111561222a576000606083870101525b50601f01601f191692909201606001949350505050565b6000610100828403121561225457600080fd5b50919050565b60006040828403121561225457600080fd5b600181811c9082168061228057607f821691505b6020821081141561225457634e487b7160e01b600052602260045260246000fd5b8035801515811461066e57600080fd5b60008183036101008112156122c557600080fd5b6122cd612057565b8335815260e0601f19830112156122e357600080fd5b6122eb61207a565b6122f361202e565b60208601356003811061230557600080fd5b81526020603f198501121561231957600080fd5b61232161207a565b604087013561232f81612177565b81526020820152612342606087016122a1565b60408201526080607f198501121561235957600080fd5b61236161207a565b935061237087608088016120e5565b8452606081019390935291825260208101919091529392505050565b6000818303604081121561239f57600080fd5b6040516040810181811067ffffffffffffffff821117156123c2576123c2612018565b604052833581526020601f19830112156123db57600080fd5b6123e361207a565b91506123f1602085016122a1565b825260208101919091529392505050565b634e487b7160e01b600052602160045260246000fd5b805161066e81612177565b60006080828403121561243557600080fd5b61243d61202e565b90508151815260208201516020820152604082015160408201526060820151606082015292915050565b600082601f83011261247857600080fd5b60405161014080820182811067ffffffffffffffff8211171561249d5761249d612018565b604052830181858211156124b057600080fd5b845b828110156124d35780516124c581612177565b8252602091820191016124b2565b509195945050505050565b600061032082840312156124f157600080fd5b6124f961209d565b61250283612418565b81526125118460208501612423565b602082015261252260a08401612418565b604082015260c0830151606082015261253e8460e08501612467565b6080820152612551846102208501612423565b60a08201526102a083015160c08201526102c083015160e08201526102e08301516101008201526103009092015161012083015250919050565b6000610300828403121561259e57600080fd5b6125a66120c1565b6125af83612418565b81526125be8460208501612423565b60208201526125cf60a08401612418565b604082015260c0830151606082015260e083015160808201526101006125f785828601612467565b60a083015261260a856102408601612423565b60c08301526102c084015160e08301526102e0909301519281019290925250919050565b6001600160a01b038381168252825160208084019190915283015151805161012084019291906003811061267257634e487b7160e01b600052602160045260246000fd5b806040860152508160208201515116606085015260408101511515608085015260608101519150506126c960a084018251805182526020810151602083015260408101516040830152606081015160608301525050565b509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156126fa576126fa6126d1565b500190565b634e487b7160e01b600052603260045260246000fd5b6000600019821415612729576127296126d1565b5060010190565b8060005b600a8110156110375781516001600160a01b0316845260209384019390910190600101612734565b81516001600160a01b031681526020808301516103008301916127a290840182805182526020810151602083015260408101516040830152606081015160608301525050565b5060408301516001600160a01b03811660a084015250606083015160c0830152608083015160e083015260a08301516101006127e081850183612730565b60c0850151805161024086015260208101516102608601526040810151610280860152606001516102a085015260e08501516102c0850152909301516102e090920191909152919050565b81516001600160a01b03168152610320810160208301516128706020840182805182526020810151602083015260408101516040830152606081015160608301525050565b5060408301516001600160a01b031660a0830152606083015160c083015260808301516128a060e0840182612730565b5060a08301518051610220840152602081015161024084015260408101516102608401526060015161028083015260c08301516102a083015260e08301516102c08301526101008301516102e083015261012090920151610300909101529056fea26469706673582212206fb201680e2ba5059b6c88587e8537c84f2fc69da8cd8a333f82550c5b37b36b64736f6c634300080c0033`,
  BytecodeLen: 13428,
  Which: `oD`,
  version: 8,
  views: {
    Explorer: {
      buyerAddress: `Explorer_buyerAddress`,
      deliveredNetworkTime: `Explorer_deliveredNetworkTime`,
      deployedNetworkTime: `Explorer_deployedNetworkTime`,
      listOfIngredients: `Explorer_listOfIngredients`,
      name: `Explorer_name`,
      rejectReason: `Explorer_rejectReason`,
      reviewedNetworkTime: `Explorer_reviewedNetworkTime`,
      state: `Explorer_state`,
      supplierAddress: `Explorer_supplierAddress`
      }
    }
  };
export const _stateSourceMap = {
  3: {
    at: './index.rsh:142:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:124:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:85:23:after expr stmt semicolon',
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
  "Buyer": Buyer,
  "BuyerAPI_delivered": BuyerAPI_delivered,
  "SellerAPI_addIngredient": SellerAPI_addIngredient,
  "SellerAPI_approve": SellerAPI_approve,
  "SellerAPI_reject": SellerAPI_reject
  };
export const _APIs = {
  BuyerAPI: {
    delivered: BuyerAPI_delivered
    },
  SellerAPI: {
    addIngredient: SellerAPI_addIngredient,
    approve: SellerAPI_approve,
    reject: SellerAPI_reject
    }
  };
