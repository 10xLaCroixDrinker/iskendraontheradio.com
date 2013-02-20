$(function() {
  $.getJSON("https://api.twitter.com/1/statuses/user_timeline.json?screen_name=KendraWorsnup&count=1&include_rts=1&callback=?", function(data) {

  var d = new Date();
  var tweetId = data[0].id;
  var tweetCreated = data[0].created_at.split(' ');
  var tweetTime = tweetCreated[3];
  var currentTime = d.getUTCHours() + ":" + d.getUTCMinutes() + ":" + d.getUTCSeconds();
    
  var jimmyMinutes = function(time) {
    time = time.split(':');
    var minutes = 0;
    minutes += parseInt(time[0],10) * 60;
    minutes += parseInt(time[1],10);
    return minutes;
  }

  var tweet = data[0].text.split(' ');

  if (tweet.indexOf('#KJZZ') != -1 &&
      tweetCreated[2] == d.getUTCDate() &&
      (jimmyMinutes(currentTime) - jimmyMinutes(tweetTime)) <= 15) {
    $('.no').hide();
    $('.yes').show();
  }
  });
});