import api from '../../eosjs';
// import check from 'express-validator/check';

const getTablePackslogs = (req, res) => {
    api.getTablePackslogs({}).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    })
}

export default { getTablePackslogs };