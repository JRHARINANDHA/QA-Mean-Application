var mongoose = require('mongoose');
module.exports = mongoose.model('Answers',{
    user: String,
    userId: String,
    content: String,
    date: {type:Date , default:Date.now},
    question:String
});/**
 * Created by JR HARI NANDHA on 11-10-2016.
 */
