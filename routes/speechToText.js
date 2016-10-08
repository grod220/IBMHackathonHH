var router = require('express').Router();
var watson = require('watson-developer-cloud');

var alchemy_language = watson.alchemy_language({
  api_key: 'a2e18405e58f0e1149ccadf85794e3485724ab6d'
});

var parameters = {
  extract: 'entities,keywords, concepts, dates',
  sentiment: 1,
  maxRetrieve: 1,
  text: 'Tell me a story about a memory from 1985.'
};

router.get('/', function(req, res, next) {
  alchemy_language.combined(parameters, function (err, response) {
    if (err)
      console.log('error:', err);
    else
      res.send(JSON.stringify(response, null, 2));
  });
});

module.exports = router;
