import api from '../../eosjs';
// import check from 'express-validator/check';

var actor = "user2account";
var key = "5KKuYt4FfejEn7r71aiQD32SnevyAPf3GTsUStHpVcV9qGDGWmJ";

// var body = {
//     "packName" : "pack1",
// }
const addpack = (req, res) => {
    var { packName } = req.body;
    var s = "user2account";
    
    api.addpack(actor, key, s, packName).then((rply) => {
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
const open = (req, res, next) => {
    var { packName } = req.body;
    var dt = new Date();
    var ml = dt.getMilliseconds()*20887;
    var option = ml.toString();
    api.open(actor, key, packName, option, actor).then((rply) => {
        console.log(rply);
        setTimeout(() => {
            api.getTableopenedpacks({reverse: true, limit: 500}).then((data) => {
            res.send(data[data.length - 1]);
        }).catch((er) => {
            console.log(er);
            next(er);
        })  
        }, 500);
    }).catch((err) => {
        console.log('err', err);
        next(err);
    })
}

var getRand = (req, res, next) => {
    api.getTableopenedpacks({reverse: true, limit: 500}).then((data) => {
        res.send(data[data.length-1]);
    }).catch((er) => {
        console.log(er);
        next(er);
    });
}

export default { addpack, open, getRand };