// import db from '../../db/schema';
import api from '../../eosjs';
// import check from 'express-validator/check';
// import request from 'request';

// const { CardData } = db;
// const getTable = (req, res) => {
//     var { table, account } = req.params;
//     var options = { method: 'POST',
//     url: 'http://https://api-kylin.eosasia.one/v1/chain/get_table_rows',
//     headers: { 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' } };

//     request(options, function (error, response, body) {
//         if (error) throw new Error(error);

//         res.send(body);
//     });
// }



// var body = {
//     "actor" : "user2account",
//     "key" : "5KKuYt4FfejEn7r71aiQD32SnevyAPf3GTsUStHpVcV9qGDGWmJ",
//     "issuer" : "user2account",
//     "sym" : "kuchbhi"
// }

const create = (req, res) => {
    var { actor, key, issuer, sym } = req.body;
    api.create(actor, key, issuer, sym).then((rply) => {
        console.log(rply);
        res.send(rply);
    }).catch((err) => {
        console.log('err', err);
        res.send(err.toString());
    })
}

// var body = {
//     "actor": "user2account",
//     "key": "5KKuYt4FfejEn7r71aiQD32SnevyAPf3GTsUStHpVcV9qGDGWmJ",
//     "from": "user2account",
//     "to": "user2account",
//     "quantity": "asset"
// }

const transfer = (req, res) => {
    var { actor, key, from, to, quantity } = req.body;
    api.transfer(actor, key, from, to, quantity).then((rply) => {
        console.log(rply.toString());
    }).catch((err) => {
        console.log('err', err);
        res.send(err.toString());
    })
}

// var body = {
//     "actor" : "user2account",
//     "key" : "5KKuYt4FfejEn7r71aiQD32SnevyAPf3GTsUStHpVcV9qGDGWmJ",
//     "owner" : "user2account",
//     "token_id" : 1
// }

const burn = (req, res) => {
    var { actor, key, owner, token_id } = req.body;
    api.burn(actor, key, owner, token_id).then((rply) => {
        console.log(rply.toString());
    }).catch((err) => {
        console.log('err', err);
        res.send(err.toString());
    })
}

export default { create, transfer, burn };