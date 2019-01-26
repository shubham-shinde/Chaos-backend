import Sequelize from 'sequelize';
import Conn from '../index';

const Action = Conn.define('action', {
    actionID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    consuming_nanobot: {
        type: Sequelize.STRING,
    },
    manufactured_illness: {
        type: Sequelize.STRING
    },
    sacrificial_salvo: {
        type: Sequelize.STRING
    },
    echoing_smash: {
        type: Sequelize.STRING
    },
    crusade: {
        type: Sequelize.STRING
    },
    convert: {
        type: Sequelize.STRING
    },
    absorb_life: {
        type: Sequelize.STRING
    },
    normalize: {
        type: Sequelize.STRING
    },
    dissolve: {
        type: Sequelize.STRING
    }
})

export default Action;
