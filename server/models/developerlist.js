var mongoose = require ('mongoose');

var developerSchema = {
    name: String,
    status: String,
    working: Boolean,
    id: String
};

var developerlist = 
    mongoose.model('developerlist',developerSchema,"developerlists");

module.exports = developerlist;