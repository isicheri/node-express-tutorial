const express = require('express')
const { createBook, getAllBooks, getBookById, deleteBookById } = require('../../controller/bookController/bookController')
const router = express.Router()

router.route('/book/:userId').post(createBook).get(getAllBooks)
router.route('/book/:id').get(getBookById).delete(deleteBookById)

module.exports = router