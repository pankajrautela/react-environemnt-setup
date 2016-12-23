var mongoose = require ('mongoose');

var surveySchema = {
    name: String,
    skill: String,
    terms: Boolean,
    comments: String
};

var developerlist = 
    mongoose.model('surveylist',surveySchema,"surveylists");

module.exports = developerlist;