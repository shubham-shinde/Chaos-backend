import db from '../../db/schema';

const { CardData, Keyword } = db

const _get = (req, res, next) => {
    CardData.findAll({include: [{all: true}]})
    // .then(data => {
    //     var obj = data.dataValues;
    //     console.log(data);
    //     obj.forEach(d => {
    //         var keywordArray = [];
    //         d.keyword.forEach(k => {
    //             keywordArray.push(k.keyword)
    //         })
    //         d.keyword = keywordArray;
    //     })
    //     return obj;
    // })
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
        return cardcardDataId
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

const _byRarity = (req, res, next) => {
    var rarity = req.params.rarity
    CardData.findAll({where: {
        rarity
    }})
    .then(res.send.bind(res))
    .catch(next);
}

const _byType = (req, res, next) => {
    var type = req.params.type
    CardData.findAll({where: {
        type
    }})
    .then(res.send.bind(res))
    .catch(next);
}

const query = (req, res, next) => {
    CardData.findAll({where: req.query})
    .then(res.send.bind(res))
    .catch(next);
}

export default {
    get: _get,
    put: _put,
    byRarity: _byRarity,
    byType: _byType,
    query
}