var router = require('express').Router();
var watson = require('watson-developer-cloud');

var textToSpeech = watson.text_to_speech({
  version: 'v1',
  username: 'cdfa429f-a301-454f-aabb-afcbe2b8d24b',
  password: 'VoGhN3kmwxeN',
  url: 'https://stream.watsonplatform.net/text-to-speech/api',
});

// http://pojo.sodhanalibrary.com/string.html

var voiceTrans = '<voice-transformation type="Custom" pitch_range="30%" pitch="20%" glottal_tension="-50%">';
var closeTag = '</voice-transformation>';

var myvar1 = voiceTrans + 'Hi Naomi, I am your former self from 5 years ago and I keep all our shared memories safe. Shall I help us remember together?' + closeTag;
var myvar2 = voiceTrans + 'I am in Hamburg right now, it’s Sunday the 9th of October and I have been here over the weekend with a couple of friends and family to attend a hackathon <express-as type="GoodNews">and have fun.</express-as>' + closeTag;
var myvar3 = voiceTrans + 'I am with my brother Tungi, my friend Gabe and my dog Ha.' + closeTag;
var myvar4 = voiceTrans + '<express-as type="GoodNews">I met Gabe two years ago at a Daft Punk concert.</express-as> There should be a new email in the inbox with 2 funny pictures of that event. <express-as type="GoodNews">Remember? I danced to the song Get</express-as> Lucky <express-as type="GoodNews">together with Gabe like </express-as>this.' + closeTag;
var myvar5 = voiceTrans + '<express-as type="Apology">Well, I forgot because I have suffered from Dementia for 5 years now. </express-as><express-as type="Uncertainty">But I still have amazing people around me that help me get through the challenges of life.</express-as>' + closeTag;
var myvar6 = voiceTrans + 'Oh, speaking about Gabe, shall I notify him so we can have breakfast together?' + closeTag;
var myvar7 = voiceTrans + '<express-as type="GoodNews">Alright! He received the message and he’s on his way here! </express-as>For the time being, how about we exercise our joints with some Yoga?' + closeTag;

var params = {
   "text": myvar7,
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



