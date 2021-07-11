const mongoose = require('mongoose');
const organismSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    director:{
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
        unique: true
    },
    startDate: {
        type: String,
        required: true
    },
    idCity: {
        type: Schema.Types.ObjectId, ref: 'City' 
    },
    idActivity: {
        type: Schema.Types.ObjectId, ref: 'Activity' 
    }

});

module.exports = mongoose.model('Organism', organismSchema);