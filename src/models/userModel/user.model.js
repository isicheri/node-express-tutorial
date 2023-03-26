const {DataTypes} = require('sequelize')
const sequelize = require('../../db/database');
const Book = require('../bookModel/book.model');

const User = sequelize.define('users',{
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

User.hasMany(Book,{
    foreignKey: "user_id"
})
Book.belongsTo(User,{
    foreignKey: "user_id"
})

module.exports = User;