const mongoose = require('mongoose')

const AppointmentSchema = new mongoose.Schema({
    ownerName:{
        type: String,
        maxLength: 50,
        minLength: 3,
        required: [true, 'Please provide name']
    },
    petName:{
        type: String,
        maxLength: 30,
    },
    contactNumber:{
        type: String,
        minLength: 10,
        maxLength: 10,
        match: /(0|91)?[6-9][0-9]{9}/,
        required: [true, 'Please provide contact number']
    },
    address:{
        type:String,
        maxLength: 100,
        required: [true, 'Please provide address'],
    },
    needHomeVisit:{
        type: Boolean,
        default: false,
    },
    service:{
        type: String,
        enum: ['Vaccination', 'Treatment', 'Grooming', 'Other'],
        default: 'Treatment',
    },
    petCategory:{
        type: String,
        required: [true, 'Please mention pet category'],
    },
    petAge:{
        type:Number,
        min:0,
    },
    petAgeQuant:{
        type: String,
        enum: ['Years', 'Months', 'Days'],
        
    },
    petFile:{
        type: [String],
    },
    isCompleted: {
       type: Boolean,
       default: false
    }

},{
    timestamps: true
})


module.exports = mongoose.model('Appointment', AppointmentSchema)