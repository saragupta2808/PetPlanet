const mongoose = require('mongoose')

const QuerySchema = new mongoose.Schema({
    name:{
        type: String,
        max: 30,
        required: [true, 'Please provide name']
    },
    contactNumber:{
        type: String,
        minLength: 10,
        maxLength: 10,
        match: /(0|91)?[6-9][0-9]{9}/,
        required: [true, 'Please provide contact number']
    },
    petTypePreferance:{
        type: String,
        required: [true, 'Please provide pet type']
    },
    petSizePreferance:{
        type: String,
        required: true,
        enum: ['Small', 'Medium', 'Large', 'No Preferance'],
        default: 'No Preferance',
    },
    genderPreferance:{
        type: String,
        required: true,
        enum: ['Male', 'Female', 'No Preferance'],
        default: 'No Preferance',
    },
    breedPreferance:{
        type: String,
    },
    comments:{
        type: String,
    }
})


module.exports = mongoose.model('Query', QuerySchema);