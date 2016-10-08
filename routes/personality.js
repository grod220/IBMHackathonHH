var router = require('express').Router();
var watson = require('watson-developer-cloud');

var personality_insights = watson.personality_insights({
  username: '4632ffe7-fcbc-47e9-917e-6a6372e5bbc6',
  password: 'gB35PgQuqfeX',
  version: 'v2'
});


var params = require('./profile.json');

router.get('/', function(req, res, next) {
  personality_insights.profile(params, function(error, response) {
    if (error)
      console.log('error:', error);
    else
      res.send(JSON.stringify(response, null, 2));
    }
  );
});



module.exports = router;
