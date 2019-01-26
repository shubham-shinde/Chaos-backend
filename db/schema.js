import Sequelize from 'sequelize';
import Conn from './index';
import CardData from './models/cardData';
import Keyword from './models/keyword';
import Action from './models/action';
import Player from './models/player'

CardData.hasMany(Keyword);
Keyword.belongsTo(CardData);

var data = {
    cardName: 'card_1',
    cardDescription: 'first card in db',
    basePower: 0,
    baseHealth: 30,
    imageURL: 'https://www.youtube.com',
    type: 3,
    bombardValue: 23,
    baseCost: 300
}

var key = ['keam', 'meale', 'till']

Conn.sync({force: true}).then(() => {
    CardData.create(data).then((card) => {
        card.createKeyword({
            keyword: 'keam'
        })
    })
})