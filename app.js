var express = require('express'),
    morgan = require('morgan'),
    chalk = require('chalk'),
    watson = require('watson-developer-cloud'),
    fs = require('fs');


var app = express();

app.use(morgan('dev'));


app.get('/', function (req, res) {
  res.send('Hello World!');
});

var textToSpeech = watson.text_to_speech({
  version: 'v1',
  username: 'cdfa429f-a301-454f-aabb-afcbe2b8d24b',
  password: 'VoGhN3kmwxeN',
  url: 'https://stream.watsonplatform.net/text-to-speech/api',
});

var params = {
   "text": "<voice-transformation type=\"Young\" strength=\"80%\">Could you provide us with new information?</voice-transformation><speak>I have been assigned to handle your order status request.<express-as type=\"Apology\">I am sorry to inform you that the items you requested are backordered.We apologize for the inconvenience.</express-as><express-as type=\"Uncertainty\">We don't know when the items will become available. Maybe next week, but we are not sure at this time.</express-as><express-as type=\"GoodNews\">But because we want you to be a satisfied customer, we are giving you a 50% discount on your order!</express-as></speak>",
   'voice': 'en-US_AllisonVoice',
   'accept': 'audio/wav'
};


app.get('/api/synthesize', function(req, res, next) {
  var transcript = textToSpeech.synthesize(params);
  transcript.on('response', function(response) {
      response.headers['content-disposition'] = 'attachment; filename=transcript.wav';
  });
  transcript.pipe(res);
});

var portNum = process.env.PORT || 3000;

app.listen(portNum, function () {
  console.log(chalk.blue('IBMHackathonServer listening on port ' + portNum + '! ♪♩♫♯♭'));
});
