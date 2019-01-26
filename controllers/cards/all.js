import CardData from '../../db/models/cardData';

export default (req, res) => {
    CardData.findAll().then(res.send.bind(res))
}