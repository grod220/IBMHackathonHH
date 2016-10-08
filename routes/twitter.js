'use strict';
var router = require('express').Router();
module.exports = router;
var Twitter = require('twitter');
var rp = require('request-promise');

var client = new Twitter({
  consumer_key: '8BXQ2lBDoRRDLQE9aWo4wVeOo',
  consumer_secret: 'j2EaAqTNsRTNSXq3ftf1rb9F7gMdCiAoNwbfNDiePx6CfQYHv3',
  access_token_key: '26320171-lZD1vuX3jgmnLL9jUJYgvAWm0nsT3YtN3u5f6rLER',
  access_token_secret: 'Usaz8KUyPPv98BHKTZn5faqjCey5n0dzdsKD31Jl6g0Au'
});

router.get('/', function(req,res) {
  // client.get('/users/show.json', {screen_name: 'grod220'}, function(error, profile, response) {
  //   res.send(response);

    // var profilePhoto = profile.profile_image_url.replace(/_normal/, '');
    // var profileBanner = profile.profile_banner_url;
    client.get('/statuses/user_timeline.json', {screen_name: '2050City', count: 200}, function(error, tweets, response) {
      var holder = '';
      for (var i=0; i<tweets.length; i++) {
        holder += tweets[i].text;
      }
      var b = holder.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
      res.send({
        tweets: b
      });
    });
  // });
});
