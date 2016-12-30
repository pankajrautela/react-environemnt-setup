var mongoose = require ('mongoose');

var surveySchema = {
    name: String,
    ID:Number,
    skill: String,
    terms: Boolean,
    comments: String
};

var surveylist = 
    mongoose.model('surveylist',surveySchema,"surveylists");

module.exports = surveylist;