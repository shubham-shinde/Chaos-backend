import db from '../../db/schema';

const { CardData } = db;

export default (req, res) => {
    CardData.findById(req.params.id).then(res.send.bind(res))
}