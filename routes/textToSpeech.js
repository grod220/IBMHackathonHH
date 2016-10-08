var router = require('express').Router();
var watson = require('watson-developer-cloud');

var textToSpeech = watson.text_to_speech({
  version: 'v1',
  username: 'cdfa429f-a301-454f-aabb-afcbe2b8d24b',
  password: 'VoGhN3kmwxeN',
  url: 'https://stream.watsonplatform.net/text-to-speech/api',
});

var params = {
   "text": '<voice-transformation type="Young" strength="80%">Could you provide us with new information?</voice-transformation>',
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
