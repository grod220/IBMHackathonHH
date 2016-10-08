var express = require('express'),
    morgan = require('morgan'),
    chalk = require('chalk'),
    fs = require('fs');


var app = express();

app.use(morgan('dev'));
app.use('/textToSpeech', require('./routes/textToSpeech.js'));
app.use('/personality', require('./routes/personality.js'));
app.use('/twitter', require('./routes/twitter.js'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var portNum = process.env.PORT || 3000;

app.listen(portNum, function () {
  console.log(chalk.blue('IBMHackathonServer listening on port ' + portNum + '! ♪♩♫♯♭'));
});
