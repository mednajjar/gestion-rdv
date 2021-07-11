const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    fname:{
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role:{
        type: String,
        ennum:['admin', 'employe', 'client'],
        default: 'client'
    },
    password: {
        type: String,
        required: true
    },
    idOrganism: {
        type: Schema.Types.ObjectId, ref: 'Organism' 
    }

});

module.exports = mongoose.model('User', userSchema);