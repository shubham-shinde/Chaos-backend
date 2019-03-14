import { Api, JsonRpc } from 'eosjs';
import JsSignatureProvider from 'eosjs/dist/eosjs-jssig'
import fetch from 'node-fetch';
import { TextEncoder, TextDecoder } from 'util';

const connectToController = {
    EOS_CONTRACT_NAME: "user3account",
    EOS_HTTP_ENDPOINT: "https://api-kylin.eosasia.one",
    KEY: "5KXjokua65nwPAPqEga93w7SGZsbdX75JziUcpuQMhGhWy4t8GH"
}

const connectToCard = {
    EOS_CONTRACT_NAME: "user2account",
    EOS_HTTP_ENDPOINT: "https://api-kylin.eosasia.one",
    KEY: "5KKuYt4FfejEn7r71aiQD32SnevyAPf3GTsUStHpVcV9qGDGWmJ"
}

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
    const rpc = new JsonRpc(EndPoint.EOS_HTTP_ENDPOINT);
    const result = await rpc.get_table_rows({
      "json": true,
      "code": EndPoint.EOS_CONTRACT_NAME,    // contract who owns the table
      "scope": EndPoint.EOS_CONTRACT_NAME,   // scope of the table
      "table": Table,    // name of the table as specified by the contract abi
      "limit": options.limit && options.limit,
      "lower_bound": options.lower_bound && options.lower_bound,
    });
    return result.rows;
  } catch (err) {
    console.error(err);
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

  static create(actor, key, issuer, symbol) {
      return takeAction( actor, key, "create", { issuer, symbol }, connectToCard);
  }

  static createPack(actor, key, packname, colname, cards) {
      return takeAction( actor, key, "creatpack", { packname, colname, cards }, connectToController);
  }

  static createCollection(actor, key, packname, colname, cards) {
    return takeAction( actor, key, "creatpack", { packname, colname, cards }, connectToController);
}

  static issue(actor, key, send) {
      return takeAction(actor, key, "issue", send, connectToCard);
  }

  static transfer(actor, key, from, to, quantity) {
      return takeAction(actor, key, "transfer", {from, to, quantity}, connectToCard);
  }

  static burn(actor, key, owner, token_id) {
      return takeAction(actor, key, "burn", {token_id, owner}, connectToCard);
  }

  static transferid(actor, key, send) {
      return takeAction(actor, key, "transferid", send, connectToCard);
  }
  static setrampayer(actor, key, payer, id) {
      return takeAction(actor, key, "setrampayer", { payer, id });
  }

  static upsert(actor, key, send) {
      return takeAction(actor, key, "upsert", send, connectToController);
  }

  static erase(actor, key, user) {
      return takeAction(actor, key, "erase", { user }, connectToController);
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

  static async getTableAccounts(options) {
    return getTable(connectToCard, "accounts", options);
  }
  static async getTableStat(options) {
    return getTable(connectToCard, "stat", options);
  }
  static async getTableToken(options) {
    return getTable(connectToCard, "token", options);
  }
  static async getTablePackslogs(options) {
    return getTable(connectToController, "packslogs", options);
  }

}

export default ApiService;
