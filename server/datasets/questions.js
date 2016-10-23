var mongoose = require('mongoose');
module.exports = mongoose.model('Questions',{
    user: String,
    userId: String,
    content: String,
    date: {type:Date , default:Date.now},
    category: String
});