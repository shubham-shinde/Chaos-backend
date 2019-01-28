import db from '../../db/schema';

const { Keyword } = db

export default (req, res, next) => {
    Keyword.findAll({
        // include: [{all: true}]
    })
    .then(res.send.bind(res))
    .catch(next);
}