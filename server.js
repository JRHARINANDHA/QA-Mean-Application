var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var authenticationController = require('./server/controllers/authentication-controller');
var questionController = require('./server/controllers/question-controller');
var answerController = require('./server/controllers/answer-controller');

mongoose.connect('mongodb://localhost:27017/social');

app.use(bodyParser.json());
app.use('/app',express.static(__dirname + "/app"));
app.use('',express.static(__dirname + ""));
app.use('/css',express.static(__dirname + "/css"));
app.use('/server',express.static(__dirname + "/server"));
app.use('/node_modules',express.static(__dirname + "/node_modules"));
app.use('/web',express.static(__dirname + "/web"));
app.use('/js',express.static(__dirname + "/js"));
app.use('/pages',express.static(__dirname + "/pages"));
app.use('/teacherpages',express.static(__dirname + "/teacherpages"));
app.use('/fonts',express.static(__dirname + "/fonts"));
app.use('/sign-up-login-form',express.static(__dirname + "/sign-up-login-form"));


app.get('/',function(req , res ){
	res.sendfile('index.html');
});
//Auth
app.post('/api/user/signup',authenticationController.signup);
app.post('/api/user/login',authenticationController.login);
app.post('/api/questions/post',questionController.postquestions);
app.get('/api/questions/get',questionController.getQuestions);
app.post('/api/answers/post',answerController.postanswers);
app.get('/api/answers/get',answerController.getAnswers);


app.listen(3000,function(){
	console.log("It is working");
});