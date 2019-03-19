import { Api, JsonRpc } from 'eosjs';
import JsSignatureProvider from 'eosjs/dist/eosjs-jssig'
import fetch from 'node-fetch';
import { TextEncoder, TextDecoder } from 'util';

const connectToCard = {
    EOS_CONTRACT_NAME: "user3account",
    EOS_HTTP_ENDPOINT: "https://api-kylin.eosasia.one",
    KEY: "5KXjokua65nwPAPqEga93w7SGZsbdX75JziUcpuQMhGhWy4t8GH"
}

const connectToController = {
    EOS_CONTRACT_NAME: "user2account",
    EOS_HTTP_ENDPOINT: "https://api-kylin.eosasia.one",
    KEY: "5KKuYt4FfejEn7r71aiQD32SnevyAPf3GTsUStHpVcV9qGDGWmJ"
}

const actor = connectToController.EOS_CONTRACT_NAME;
const key = connectToController.KEY;

// Main action call to blockchain
//takes action name, values, and key & actor i.e Action taker.
async function takeAction(actor, key, action, dataValue, EndPoint) {
  const privateKey = key
  // console.log(key);
  const rpc = new JsonRpc(EndPoint.EOS_HTTP_ENDPOINT, { fetch });
  const signatureProvider = new JsSignatureProvider([privateKey]);
//   const signatureProvider = privateKey;
  const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
  // console.log(await rpc.get_account('user1account'));
  // Main call to blockchain after setting action, account_name and data
  try {
    console.log(dataValue);
    const resultWithConfig = await api.transact({
      actions: [{
        account: EndPoint.EOS_CONTRACT_NAME,
        name: action,
        authorization: [{
          actor,
          permission: 'active',
        }],
        data: dataValue,
      }]
    }, {
      blocksBehind: 3,
      expireSeconds: 30,
    });
    return resultWithConfig;
  } catch (err) {
    throw(err)
  }
}


async function getTable(EndPoint, Table, options) {
  try {
    const rpc = new JsonRpc(EndPoint.EOS_HTTP_ENDPOINT, {fetch});
    const result = await rpc.get_table_rows({
      "reverse": options.reverse && options.reverse,
      "json": true,
      "code": EndPoint.EOS_CONTRACT_NAME,    // contract who owns the table
      "scope": EndPoint.EOS_CONTRACT_NAME,   // scope of the table
      "table": Table,    // name of the table as specified by the contract abi
      "limit": options.limit && options.limit,
      "index_position": "primary",
      "lower_bound": options.lower_bound && options.lower_bound,
    });
    // console.log(EndPoint);
    return result.rows;
  } catch (err) {
    console.error("err",err);
    return err;
  }
}

class ApiService {

  // static getCurrentUser(user) {
  //   return new Promise((resolve, reject) => {
  //     if (!user) {
  //       return reject();
  //     }
  //     takeAction("login", { username: user })
  //       .then(() => {
  //         resolve(user);
  //       })
  //       .catch(err => {
  //           console.log("Error while login");
  //       //   localStorage.removeItem("cardgame_account");
  //       //   localStorage.removeItem("cardgame_key");
  //         reject(err);
  //       });
  //   });
  // }

  // static addpack(actor, key, s, packName) {
  //     return takeAction( actor, key, "addpack", { s, packName }, connectToController);
  // }

  // static open(actor, key, packName, option, accountName) {
  //     return takeAction( actor, key, "open", { packName, option, accountName }, connectToController);
  // }

  static addcard(s,cardId, cardName, type, faction, manaCost, attack, health, expset, craftCost, cardText, cardKeywords) {
    return takeAction( "user2account", "5KKuYt4FfejEn7r71aiQD32SnevyAPf3GTsUStHpVcV9qGDGWmJ", "addcard", { s, cardId, cardName, type, faction, manaCost, attack, health, expset, craftCost, cardText, cardKeywords }, connectToController);
  }

  static rmcard( s , cardName) {
    return takeAction( actor, key, "rmcard", { s, cardName }, connectToController);
  }

  static updcard( cardName, type, faction, cardText, cardKeywords) {
    return takeAction( actor, key, "updcard", { cardName, type, faction, cardText, cardKeywords }, connectToController);
  }

  static trnsfrcard( issueNumber, ownerFrom, ownerTo) {
    return takeAction( actor, key, "trnsfrcard", { issueNumber, ownerFrom, ownerTo }, connectToController);
  }

  static issuepack( packType, owner) {
    return takeAction( actor, key, "issuepack", { packType, owner }, connectToController);
  }

  static issuecard( cardName, owner) {
    return takeAction( actor, key, "issuecard", { cardName, owner }, connectToController);
  }

  static openpack( packId, owner) {
    return takeAction( actor, key, "openpack", { packId, owner }, connectToController);
  }

  static adduser( actor, key, s, userName) {
    return takeAction( actor, key, "adduser", { s, userName }, connectToController);
  }

  static rmuser( s, userName) {
    return takeAction( actor, key, "rmuser", { s, userName }, connectToController);
  }

  static updcardcnt( userName, newCardsCount) {
    return takeAction( actor, key, "updcardcnt", { userName, newCardsCount }, connectToController);
  }

  static updcards( userName, _newCards) {
    return takeAction( actor, key, "updcards", { userName, _newCards }, connectToController);
  }

  static updpackcnt( userName, newPacksCount) {
    return takeAction( actor, key, "updpackcnt", { userName, newPacksCount }, connectToController);
  }

  static updpacks( userName, _ownedPacks) {
    return takeAction( actor, key, "updpacks", { userName, _ownedPacks }, connectToController);
  }

  static addbuyord( userName, cardId) {
    return takeAction( actor, key, "addbuyord", { userName, cardId }, connectToController);
  }

  static addsellord( userName, cardId) {
    return takeAction( actor, key, "addsellord", { userName, cardId }, connectToController);
  }

  static rmbuyord( owner, buyOrderId) {
    return takeAction( actor, key, "rmbuyord", { owner, buyOrderId }, connectToController);
  }

  static rmsellord( owner, sellOrderId) {
    return takeAction( actor, key, "rmsellord", { owner, sellOrderId }, connectToController);
  }

//   static login({ username, key }) {
//     return new Promise((resolve, reject) => {
//       localStorage.setItem("cardgame_account", username);
//       localStorage.setItem("cardgame_key", key);
//       takeAction("login", { username: username })
//         .then(() => {
//           resolve();
//         })
//         .catch(err => {
//           console.log(err);
//           localStorage.removeItem("cardgame_account");
//           localStorage.removeItem("cardgame_key");
//           reject(err);
//         });
//     });
//   }

  // static async getTableAccounts(options) {
  //   return getTable(connectToCard, "accounts", options);
  // }
  // static async getTableStat(options) {
  //   return getTable(connectToCard, "stat", options);
  // }
  // static async getTableToken(options) {
  //   return getTable(connectToCard, "token", options);
  // }
  // static async getTablePackslogs(options) {
  //   return getTable(connectToController, "packslogs", options);
  // }

  // static async getTableopenedpacks(options) {
  //   console.log(options);
  //   return getTable(connectToController, "openedpacks", options);
  // }
  
  // static async getTablepacks(options) {
  //   return getTable(connectToController, "pack", options);
  // }

  static async getTablecard(options) {
    console.log(options);
    return getTable(connectToController, "card", options);
  }
  
  static async getTablecarddir(options) {
    return getTable(connectToController, "carddir", options);
  }

  static async getTablepack(options) {
    console.log(options);
    return getTable(connectToController, "pack", options);
  }
  
  static async getTableuser(options) {
    return getTable(connectToController, "user", options);
  }

}

export default ApiService;
