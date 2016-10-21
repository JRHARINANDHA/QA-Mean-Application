/**
 * Created by JR HARI NANDHA on 10-10-2016.
 */

var Answer  =require('../datasets/answers');
module.exports.postanswers =function(req,res){
    var answer = new Answer(req.body);
    answer.save();
    Answer.find({}).sort({date: -1}).exec(function(err,allAnswers){
        if(err){
            res.error(err);
        }else{
            res.json(allAnswers);
        }
    })
};

module.exports.getAnswers = function(req,res){
    Answer.find({}).sort({date:-1}).exec(function(err,allAnswers){

        if(err){
            res.error(err)
        } else{
            res.json(allAnswers);
        }
    })
};
/**
 * Created by JR HARI NANDHA on 12-10-2016.
 */
