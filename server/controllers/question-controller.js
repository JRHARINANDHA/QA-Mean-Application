/**
 * Created by JR HARI NANDHA on 10-10-2016.
 */

var Question  =require('../datasets/questions');
module.exports.postquestions =function(req,res){
    var question = new Question(req.body);
    question.save();
    Question.find({}).sort({date: -1}).exec(function(err,allQuestions){
        if(err){
            res.error(err);
        }else{
            res.json(allQuestions);
        }
    })
};



module.exports.getQuestions = function(req,res){
    Question.find({}).sort({date:-1}).exec(function(err,allQuestions){

        if(err){
            res.error(err)
        } else{
            res.json(allQuestions);
        }
    })
};
