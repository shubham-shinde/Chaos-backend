import Sequelize from 'sequelize';
import Conn from './index';
import CardData from './models/cardData';
import Keyword from './models/keyword';
import Action from './models/action';
import Player from './models/player'

// CardData.hasMany(Keyword);
// Keyword.belongsTo(CardData);

CardData.belongsToMany(Keyword, {as: 'keyword', through: 'CardKeyword', foreignKey: 'cardId', otherKey: 'keywordId'})
Keyword.belongsToMany(CardData, {as: 'card', through: 'CardKeyword', foreignKey: 'keywordId', otherKey: 'cardId'})

var data = {
    cardName: 'card_1',
    cardDescription: 'first card in db',
    basePower: 0,
    baseHealth: 30,
    imageURL: 'https://www.youtube.com',
    type: 3,
    keywords: ['keam', 'meale', 'till'],
    rarity: 'Free',
    bombardValue: 23,
    baseCost: 300
}

var data2 = {
    cardName: 'card_2',
    cardDescription: 'first card in db',
    basePower: 0,
    baseHealth: 20,
    imageURL: 'https://www.youtube.com/img',
    type: 3,
    keywords: ['keam', 'keale', 'brok'],
    rarity: 'Rare',
    bombardValue: 23,
    baseCost: 300
}

Conn.sync({force: true}).then(() => {
    CardData.create(data)
    .then(async card => {
        var keyW = data.keywords
        for(var i=0; i<keyW.length; i++) {
            var key = await Keyword.findOrCreate({where: {keyword: keyW[i]}})
            await card.addKeyword(key[0])
        }
    })
    CardData.create(data2)
    .then(async card => {
        var keyW = data.keywords
        for(var i=0; i<keyW.length; i++) {
            var key = await Keyword.findOrCreate({where: {keyword: keyW[i]}})
            await card.addKeyword(key[0])
        }
    })
})

export default {Conn, CardData, Keyword, Action, Player};