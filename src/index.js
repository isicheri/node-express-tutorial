const express = require('express')
const dotenv = require('dotenv')
const app = express()
const path = require("path")
const fs = require("fs")
const cors = require("cors")
const bookRouter = require('./router/bookRoute/book.route')
const userRouter = require('./router/userRoutes/user.route')
const AppError = require('./utils/Error/AppError')
const ErrorController = require('./controller/Error/error.contoller')
const authRouter = require('./auth/auth.routes')
dotenv.config({ path: './config.env' })
app.use(express.json())
app.use(cors())
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({ extended: false }))
app.use('/api/v1',bookRouter)
app.use('/api/v1',userRouter)
app.use('/api/v1',authRouter)
app.get("/login",(req,res) => {
    res.render("_login")
})
app.all('*',(req,res,next) => {
    // res.status(400).json({
    //     status: 'failed',
    //     message: 'no routes like that'
    // }
    // const error = new Error(`no route found like ${req.originalUrl} on this server`);
    // error.status = "failed";
    // error.statusCode = 404
    next(new AppError(`no route found like ${req.originalUrl} on this server`,404))
})
app.use(ErrorController)

module.exports = app

/**
 * passprot
 * passport-local
 * express-session
 * express-flash
 */