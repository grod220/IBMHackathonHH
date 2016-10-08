var router = require('express').Router();
var watson = require('watson-developer-cloud');

var textToSpeech = watson.text_to_speech({
  version: 'v1',
  username: 'cdfa429f-a301-454f-aabb-afcbe2b8d24b',
  password: 'VoGhN3kmwxeN',
  url: 'https://stream.watsonplatform.net/text-to-speech/api',
});




var myvar = '<speak>'+
'      I have been assigned to handle your order status request.'+
'      <express-as type=\"Apology\">'+
'         I am sorry to inform you that the items you requested are backordered.'+
'         We apologize for the inconvenience.'+
'      </express-as>'+
'      <express-as type=\"Uncertainty\">'+
'         We don\'t know when the items will become available. Maybe next week,'+
'         but we are not sure at this time.'+
'      </express-as>'+
'      <express-as type=\"GoodNews\">'+
'         But because we want you to be a satisified customer, we are giving you'+
'         a 50% discount on your order!'+
'      </express-as>'+
'   </speak>';

// http://pojo.sodhanalibrary.com/string.html



var params = {
   "text": myvar,
   'voice': 'en-US_AllisonVoice',
   'accept': 'audio/wav'
};

router.get('/', function(req, res, next) {
  var transcript = textToSpeech.synthesize(params);
  transcript.on('response', function(response) {
      response.headers['content-disposition'] = 'attachment; filename=transcript.wav';
  });
  transcript.pipe(res);
});

module.exports = router;
