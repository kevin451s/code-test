
$( "#tab" ).click(function() {
  $(".fit").show();
  $(".care").hide();
  $(".materials").hide();
});
$( "#target" ).click(function() {
  $(".care").show();
  $(".fit").hide();
  $(".materials").hide();
});
$( "#final" ).click(function() {
  $(".materials").show();
  $(".care").hide();
  $(".fit").hide();
});
