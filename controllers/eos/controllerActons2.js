import api from '../../eosjs';
// import check from 'express-validator/check';

// var body = {
//     "user" : "user1account",
//     "_packs_available" : 1,
//     "rand" : [2,3,5,6,9],
//     "_packs_opened_count" : 2,
//     "_cards_owned_count" : 2
// }
const createuser = (req, res) => {
    var { actor, key, user } = req.body;
    
    api.createuser(actor, key, user).then((rply) => {
        // console.log(rply);
        res.send(rply.toString());
    }).catch((err) => {
        console.log('err', err);
        res.send(err.toString());
    })
}

var body = {
    "user" : "user1account",
    "actor" : "user1account",
}
const freezeuser = (req, res) => {
    var { user, actor, key } = req.body;
    api.freezeuser(actor, key, user).then((rply) => {
        console.log(rply);
        res.send(rply.toString());
    }).catch((err) => {
        console.log('err', err);
        res.send(err.toString());
    })
}

const unfreezeuser = (req, res) => {
    var { user, actor, key, owned_packs, owned_cards } = req.body;
    api.unfreezeuser(actor, key, user, owned_packs, owned_cards).then((rply) => {
        console.log(rply);
        res.send(rply.toString());
    }).catch((err) => {
        console.log('err', err);
        res.send(err.toString());
    })
}

const createcol = (req, res) => {
    var { actor, key, p_col_name } = req.body;
    api.createcol(actor, key, p_col_name).then((rply) => {
        console.log(rply);
        res.send(rply.toString());
    }).catch((err) => {
        console.log('err', err);
        res.send(err.toString());
    })
}

const creatpack = (req, res) => {
    var { actor, packname, colname, cards } = req.body;
    api.erase(actor, key, packname, colname, cards).then((rply) => {
        console.log(rply);
        res.send(rply.toString());
    }).catch((err) => {
        console.log('err', err);
        res.send(err.toString());
    })
}

export default { createuser, creatpack, freezeuser, unfreezeuser, createcol };