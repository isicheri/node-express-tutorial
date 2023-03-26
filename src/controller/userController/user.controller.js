const sequelize = require('../../db/database');
const User = require('../../models/userModel/user.model')
const AppError = require('../../utils/Error/AppError')
const {encryptPassword} = require('../../utils/bcrypt/_bcrypt') 

exports.createUser = async(req,res,next) => {
    try {
        await sequelize.sync()
        const {name,email,password} = req.body;
         const hashedPassword = await encryptPassword(password,10)
        
       if(hashedPassword) {
        const user = await User.create({
            name,
             email,
             password:hashedPassword
         })
         res.status(200).json({
             status: 'success',
             data: user
         })
       }
    } catch (error) {
        // res.status(400).json({
        //     status: 'failed',
        //     data: error
        // })
        next(new AppError(error,400))
    }
}

exports.updateUserById = async(req,res,next) => {
try {
    const Body = req.body;
    const {id} = req.params;
    const user = await User.update({
   ...Body
    },{
        where: {
            id: id
        }
    })
    res.status(200).json(user)
} catch (error) {
    // res.status(400).json(error)
    next(new AppError(error,400))

}
}

exports.deleteUserById = async(req,res,next) => {
try {
    const {id} = req.params;
   const user = await User.findOne({
    where: {
        id: id
    }
   })
   if(!user) next(new AppError('user not found',400));
   await User.destroy({
    where: {
        id: id
    }
   })
    res.status(200).send(`user with id of ${req.params.id} has been deleted successfully`)
} catch (error) {
    // res.status(400).json(error)
    next(new AppError(error,400))
}
}