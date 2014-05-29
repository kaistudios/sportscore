// JavaScript Document
    var _gaq = _gaq || [];
     _gaq.push(['_setAccount', 'UA-1077041-22']);
     _gaq.push(['_trackPageview']);
    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = 'https://ssl.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
	ga('send', {
  'hitType': 'event',          // Required.
  'eventCategory': 'score, basketball, football, baseball, tennis, cricket, hockey, racing, stream',   // Required.
  'eventAction': 'click',      // Required.
});
// Using jQuery Event API v1.3
$('#score, #basketball, #football, #baseball, #tennis, #cricket, #hockey, #racing, #stream').on('click', function() {
  ga('send', 'event', 'score, basketball, football, baseball, tennis, cricket, hockey, racing, stream', 'click', 'nav-buttons');
});