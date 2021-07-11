const mongoose = require('mongoose');
const ActivitySchema = mongoose.Schema({
    activityName:{
        type: String,
        required: true,
    }

});

module.exports = mongoose.model('Activity', activitySchema);