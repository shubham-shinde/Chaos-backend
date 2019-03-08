import api from '../../eosjs';
// import check from 'express-validator/check';

const getTableAccounts = (req, res) => {
    api.getTableAccounts({}).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    })
}
const getTableStat = (req, res) => {
    api.getTableStat({}).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    })
}
const getTableToken = (req, res) => {
    api.getTableToken({}).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    })
}

export default { getTableAccounts, getTableToken, getTableStat };