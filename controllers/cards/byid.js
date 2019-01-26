import CardData from '../../db/models/cardData';

export default (req, res) => {
    CardData.findById(req.params.id).then(res.send.bind(res))
}