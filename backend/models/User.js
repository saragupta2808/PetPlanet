const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: [true, 'Please provide name'],
        minLength: 3,
        maxLength: 50,
    },
    email:{
        type: String,
        required: [true, 'Please provide email'],
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please provide email'],
        unique: true,
    },
    profilePhoto:{
        type: String,
    },
    contactNumber:{
        type: String,
        minLength: 10,
        maxLength: 10,
    },
    address:{
        type:String,
    },
    petName:{
        type: String
    },
    petCategory:{
        type:String
    },
    petAgeNumber:{
        type:Number
    },
    petAgeQuant:{
        type: String,
        enum: ['Years', 'Months', 'Days'],
    },
    petGender:{
        type: String,
        enum: ['Male', 'Female'],
    },
    
})


module.exports = mongoose.model('User', UserSchema)