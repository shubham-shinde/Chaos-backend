import db from '../../db/schema';

const { CardData, Keyword } = db

const _get = (req, res, next) => {
    CardData.findAll({
        include: [{all: true}]
    })
    .then(res.send.bind(res))
    .catch(next);
}

const _put = (req, res, next) => {
    CardData.create(req.body)
    .then(async card => {
        var keyW = req.body.keywords
        for(var i=0; i<keyW.length; i++) {
            var key = await Keyword.findOrCreate({where: {keyword: keyW[i]}})
            await card.addKeyword(key[0])
        }
        return card
    })
    .then(res.send.bind(res))
    .catch(next);

    // {
    //     "cardName": "card_5",
    //     "cardDescription": "third card in db",
    //     "basePower": 8,
    //     "baseHealth": 20,
    //     "keywords": ["ken", "kaaan", "warde"],
    //     "imageURL": "https://www.youtube.com/img5",
    //     "type": 3,
    //     "bombardValue": 93,
    //     "baseCost": 483
    // }
}

export default {
    get: _get,
    put: _put
}