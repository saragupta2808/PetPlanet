const mongoose = require('mongoose')

const PetSchema = new mongoose.Schema({
    title:{
        type: String,
        minLength: 3,
        required:[true, 'Please provide title for pet']
    },
    description:{
        type: String,
    },
    picture:{
        type: String,
    }
})

module.exports = mongoose.model('Pet', PetSchema)