

$(document).ready(function(){

$("#featured-projects-link").click(function() {
$('html, body').animate({
   scrollTop: $("#featured-projects").offset().top -5
  }, 1200);
});

});