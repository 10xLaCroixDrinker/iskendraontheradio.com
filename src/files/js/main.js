$(function() {
  $('h2').fitText(0.2);
  
  // Get latest tweet
  $.getJSON("https://api.twitter.com/1/statuses/user_timeline.json?screen_name=KendraSzabo&count=1&include_rts=1&callback=?", function(data) {
    var tweet = data[0].text.split(' '),
        tweetCreated = data[0].created_at.split(' '),
        tweetTime = data[0].created_at.split(' ')[3],
        d = new Date(),
        currentTime = d.getUTCHours() + ":" + d.getUTCMinutes() + ":" + d.getUTCSeconds();
    
    // Convert time to total minutes
    var jimmyMinutes = function(time) {
      time = time.split(':');
      var minutes = 0;
      minutes += parseInt(time[0],10) * 60;
      minutes += parseInt(time[1],10);
      return minutes;
    }
    
    for (i = 0; i < tweet.length; i++) {
      tweet[i] = tweet[i].toUpperCase();
    }
    
    // Check if tweet contains hashtag and was sent within last 15min
    if (tweet.indexOf('#KJZZ') != -1 &&
        tweetCreated[2] == d.getUTCDate() &&
        (jimmyMinutes(currentTime) - jimmyMinutes(tweetTime)) <= 15) {
      $('.no').hide();
      $('.yes').show();
      $('h2').fitText(0.2);
      $('audio').attr('autoplay','autoplay');
    }
  });
  
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
