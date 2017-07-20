$(function(){
	//Initialize Materialize CSS Plugins
	$(".button-collapse").sideNav();
	$('.modal').modal();
	$('.tooltipped').tooltip({delay: 50});


})

document.addEventListener("DOMContentLoaded", function(){
	var delay = 500 //delay in seconds for fadeout
	$('.preloader-background').delay(delay).fadeOut('slow');
	
	$('.preloader-wrapper')
		.delay(delay)
		.fadeOut();
});