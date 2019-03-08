import api from '../../eosjs';
// import check from 'express-validator/check';

// var body = {
//     "user" : "user1account",
//     "_packs_available" : 1,
//     "rand" : [2,3,5,6,9],
//     "_packs_opened_count" : 2,
//     "_cards_owned_count" : 2
// }
const upsert = (req, res) => {
    var { user, _packs_available, rand, _packs_opened_count, _cards_owned_count } = req.body;
    var send = {
        user,
        _packs_available,
        rand,
        _packs_opened_count,
        _cards_owned_count
    }
    api.upsert(actor, key, send).then((rply) => {
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
const erase = (req, res) => {
    var { user, actor, key } = req.body;
    api.erase(actor, key, user).then((rply) => {
        console.log(rply);
        res.send(rply.toString());
    }).catch((err) => {
        console.log('err', err);
        res.send(err.toString());
    })
}

export default { upsert, erase };