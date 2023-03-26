const sequelize = require('../../db/database')
const Book = require('../../models/bookModel/book.model')


exports.createBook = async(req,res) => {
try {
    await sequelize.sync()
    const book = await Book.create({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        body: req.body.body,
        user_id: req.params.userId
    })

    res.status(201).json(book)
} catch (error) {
    res.status(400).json(error)
}
}


exports.getAllBooks = async(req,res) => {
try {
    const books = await Book.findAll();
    res.status(200).json(books)
} catch (error) {
    res.status(400).json(error)
}    
}

exports.getBookById = async(req,res) => {
    try {
        const {id} = req.params;

        const book = await Book.findOne({
            where: {
                id: id
            }
        })

        res.status(200).json(book)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.deleteBookById = async(req,res) => {
    try {
        const {id} = req.params;
        await Book.destroy({
            where: {
                id: id
            }
        })

        res.status(200).json({
            message: "deleted book successfully"
        })
    } catch (error) {
        res.status(400).json(error)

    }
}