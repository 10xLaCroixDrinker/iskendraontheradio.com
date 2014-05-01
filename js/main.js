/* jshint jquery: true */
$(function () {
  $('h2').fitText(0.2);

  var myTweets = new GetTweet({
    widget: '349394013427744768',
    howMany: 1,
    callbackFn: isKendraOnTheRadio
  });

  var tweet;

  function isKendraOnTheRadio() {
    tweet = myTweets.tweet;
    if (findHashtag(tweet.text, 'KJZZ')) {
      if (checkTime()) {
        $('.no').hide();
        $('.yes').show();
        $('h2').fitText(0.2);
        $('audio').attr('autoplay', 'autoplay');
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

  function findHashtag(string, hashtag) {
    if (string.toUpperCase().indexOf('#' + hashtag.toUpperCase()) !== -1) {
      return true;
    } else {
      return false;
    }
  }
});
