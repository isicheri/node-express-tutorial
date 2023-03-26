const User = require('../models/userModel/user.model');
const AppError = require('../utils/Error/AppError')
const { comparePassword } = require('../utils/bcrypt/_bcrypt');
const JWT = require('jsonwebtoken')


exports.loginUser = async(req,res,next) => {
    try { 
        const {email,password} = req.body;
        const user = await User.findOne({
            where: {
                email:email
            }
        })
        const decryptedPassword = await comparePassword(user.password,password);
        if(decryptedPassword) {
            const accessToken = JWT.sign({
                id: user.id,
                email: user.email
            },"dom",{expiresIn: "1hr"})
            res.status(200).json({
                data: user,
                token: accessToken
            })
        }else {
           next(new AppError({
            status: "failed",
            message: "Incorrect password"
           },400))
        }
    } catch (error) {
        next(new AppError({
           error
           },400))
    }
}
