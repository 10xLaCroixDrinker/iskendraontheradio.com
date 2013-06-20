$(function() {
  $('h2').fitText(0.2);

  getTweet.please('347152310096519168', isKendraOnTheRadio);
  
  var tweet = {};

  function isKendraOnTheRadio() {
    tweet = getTweet.tweet;

    if (findHashtag(tweet.text, 'KJZZ')) {
      if (checkTime()) {
        $('.no').hide();
        $('.yes').show();
        $('h2').fitText(0.2);
        $('audio').attr('autoplay','autoplay');
      }
    }
  }

  function checkTime() {
    var now = $.now(),
        fifteenMin = 900000; // 15min in milliseconds
      
    if (now <= (tweet.time + fifteenMin)) {
      return true;
    } else {
      return false;
    }
  }

  function findHashtag(tweet, hashtag) {
    if (tweet.indexOf('#' + hashtag) != -1) {
      return true;
    } else {
      return false;
    }
  }

  // gaug.es analytics
  var _gauges = _gauges || [];
  (function() {
    var t   = document.createElement('script');
    t.type  = 'text/javascript';
    t.async = true;
    t.id    = 'gauges-tracker';
    t.setAttribute('data-site-id', '5123dbdcf5a1f56ce9000025');
    t.src = 'http://secure.gaug.es/track.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(t, s);
  })();

});
