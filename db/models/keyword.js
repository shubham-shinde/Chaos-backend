import Sequelize from 'sequelize';
import Conn from '../index';

const Keyword = Conn.define(
    'keyword',{
        keyword: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        }
    }, 
    {
        timestamps: false
    }
)

export default Keyword
