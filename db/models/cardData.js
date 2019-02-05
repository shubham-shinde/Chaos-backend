import Sequelize from 'sequelize';
import Conn from '../index';

const CardData = Conn.define('cardData',{
        cardName: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        cardDescription: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        rarity: {
            type: Sequelize.STRING,
            allowNull: false,
            values: ['Free', 'Common', 'Rare', 'Epic', 'Legendry'],
            defaultValue: 'Common'
        },
        basePower: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        baseHealth: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        imageURL: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isUrl: true
            }
        },
        type: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        bombardValue: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        baseCost: {
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    }
)

export default CardData
