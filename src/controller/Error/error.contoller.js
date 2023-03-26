module.exports = (error,req,res,next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || "failed"
    res.status(error.statusCode).json({
        status: error.status,
        data: error.message
    })
}