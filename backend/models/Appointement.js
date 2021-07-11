const mongoose = require('mongoose');
const appointementSchema = mongoose.Schema({
    appointementDate:{
        type: String,
        required: true,
    },
    startHour: {
        type: String,
        required: true,
    },
    endHour:{
        type: String,
        required: true,
    },
    taked: {
        type: Boolean,
        default: false,
    },
    idOrganism: {
        type: Schema.Types.ObjectId, ref: 'Organism' 
    }

});

module.exports = mongoose.model('Appointement', appointementSchema);