var express = require('express'),
    morgan = require('morgan'),
    chalk = require('chalk');

var app = express();

app.use(morgan('dev'));


app.get('/', function (req, res) {
  res.send('Hello World!');
});

var portNum = process.env.PORT || 3000;

app.listen(portNum, function () {
  console.log(chalk.blue('FBChatBotServer listening on port ' + portNum + '! ♪♩♫♯♭'));
});
