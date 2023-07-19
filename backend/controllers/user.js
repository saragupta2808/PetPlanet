const { BadRequestError, NotFoundError } = require('../errors');
const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const registerUser = async(req,res)=>{
    const {name, email, userId, profilePhoto } = req.body;
    if(!name || !email){
        throw new BadRequestError('Please provide name and email')
    }
    const newUser = await User.create({name, email, userId, profilePhoto})
    res.status(StatusCodes.CREATED).json({user: newUser, msg: 'Account created'})
    
}

const completeProfile = async(req,res)=>{
    const {params: {userId: userId}} = req;    
    const user = await User.findOne({userId});
    if(user){
        const upadtedProfile = await User.findByIdAndUpdate({_id: user._id}, req.body, {new: true, runValidators: true})
        // console.log('patch', upadtedProfile)
        res.status(StatusCodes.OK).json({profile: upadtedProfile, msg: 'Profile updated successfuly'})
    }
    else{
        throw new NotFoundError(`Profile with id: ${userId} does not exist!`)
    }
 
    
}

const getProfile = async(req,res)=>{
    const {params : {userId: userId}} = req;
    const user = await User.findOne({userId: userId});
    // console.log('get request', user)
    if(user){
        res.status(StatusCodes.OK).json({profile: user})
    }
    else{
        throw new NotFoundError(`Profile with id: ${userId} does not exist!`)
    }
    
}
module.exports = {registerUser, completeProfile, getProfile}