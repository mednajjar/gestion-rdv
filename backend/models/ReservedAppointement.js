const mongoose = require('mongoose');
const reservedSchema = mongoose.Schema({
    idPerson:{
        type: Schema.Types.ObjectId, ref: 'User'
    },
    idAppointment: {
        type: Schema.Types.ObjectId, ref: 'Appointement'
    },
    valid:{
        type: Boolean,
        default: false
    },
    respected: {
        type: Boolean,
        default: false
    }

});

module.exports = mongoose.model('Reserved', reservedSchema);