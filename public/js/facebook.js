$(document).ready(function() {
  $.ajaxSetup({ cache: true });
  function updateStatusCallback(){
   console.log("Status Updated")
   // Your logic here
  }
  $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId: '1533766843577913',
      version: 'v2.3' // or v2.0, v2.1, v2.0
    });     
  });
});