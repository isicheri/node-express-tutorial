const express = require('express')
const { createUser, updateUserById, deleteUserById} = require('../../controller/userController/user.controller')
const {verifyUser} = require("../../auth/middleware/middlewareauth")
const router = express.Router()

router.route('/users').post(createUser)
router.route('/user/:id').put(verifyUser,updateUserById).delete(verifyUser,deleteUserById)
module.exports = router
