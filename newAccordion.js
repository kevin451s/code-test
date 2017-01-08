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
if (document.documentElement.clientWidth < 900) {
	// scripts
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function(){
          this.classList.toggle("active");
          this.nextElementSibling.classList.toggle("show");
    }
  }
}
