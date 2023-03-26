const sequelize = require('../../db/database')
const { DataTypes } = require('sequelize')


const Book = sequelize.define('books',{
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING
    },
    author: {
        allowNull: false,
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    body: {
        allowNull: false,
        type: DataTypes.STRING
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false
    }
})


module.exports = Book;