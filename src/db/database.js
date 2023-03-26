const Sequilize = require('sequelize')

const sequelize = new Sequilize('tutor-db','root','dominion123#',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;