const JWT = require('jsonwebtoken')

const verifyToken = (req,res,next) => {
        const authHeader = req.headers.authorizaton;
        if(authHeader) {
            const token = authHeader.split(' ')[1];
              JWT.verify(token,"dom",(err,data) => {
                if(err) res.status(401).json({status: "failed",message: "user not authorised"});
                req.user = data;
                next()
              })
        }else {
            res.status(403).json({
                status: 'failed',
                message: "not an authorised user"
              })
        }
}

const verifyUser = (req,res,next) => {
    verifyToken(req,res,() => {
        if(req.user.id == req.params.id) {
            next()
        }else {
            res.status(401).json({status: "failed",message: "user not authorised"});
        }
    })
}

module.exports = {verifyUser}