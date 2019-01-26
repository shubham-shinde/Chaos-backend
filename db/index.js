import Sequelize from 'sequelize'

const Conn = new Sequelize('chaos', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

export default Conn;