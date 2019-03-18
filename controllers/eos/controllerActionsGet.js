import api from '../../eosjs';
// import check from 'express-validator/check';


var getTablecard = (req, res, next) => {
    api.getTablecard({reverse: true, limit: 500}).then((data) => {
        res.send(data);
    }).catch((er) => {
        console.log(er);
        next(er);
    });
}
var getTablecarddir = (req, res, next) => {
    api.getTablecarddir({reverse: true, limit: 500}).then((data) => {
        res.send(data);
    }).catch((er) => {
        console.log(er);
        next(er);
    });
}
var getTablepack = (req, res, next) => {
    api.getTablepack({reverse: true, limit: 500}).then((data) => {
        res.send(data);
    }).catch((er) => {
        console.log(er);
        next(er);
    });
}
var getTableuser = (req, res, next) => {
    api.getTableuser({reverse: true, limit: 500}).then((data) => {
        res.send(data);
    }).catch((er) => {
        console.log(er);
        next(er);
    });
}

export default { getTablecard,
                getTablecarddir,
                getTablepack,
                getTableuser };