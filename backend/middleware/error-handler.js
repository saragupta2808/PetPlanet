const { CustomAPIError } = require('../errors')
const {StatusCodes} = require('http-status-codes')

const errorHandlerMiddleware = (err,req,res,next)=>{
    // console.log(err)
    // if (err instanceof CustomAPIError) {
    // return res.status(err.statusCode).json({ msg: err.message })
    // }
    customErr = {
        //set default
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        message: err.message || 'Something went wrong, please try again later'
    }
    if(err.name == 'ValidationError'){
        customErr.msg = Object.values(err.errors).map(item => item.message).join(',');
        customErr.statusCode= StatusCodes.BAD_REQUEST;
    }
    if(err.code && err.code == 11000){
        customErr.statusCode = StatusCodes.BAD_REQUEST;
        customErr.msg = `This ${Object.keys(err.keyValue)} already exists.`
    }
    if(err.name == 'CastError'){
        customErr.msg = `No job with id: ${err.value} found`
        customErr.statusCode = StatusCodes.NOT_FOUND;
    }

    return res.status(customErr.statusCode).json({msg: customErr.message})
}

module.exports = errorHandlerMiddleware;