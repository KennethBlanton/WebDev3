console.log("Hello World from main.js!");

$(document).ready(function() {
	console.log("Jquery is goooood");
	$('.temperature').click(function(){

		$(this).toggleClass('very-hot');
	});
	$('.day-option').click(function(){
		$('.day-option').removeClass('active');
		$(this).addClass('active');
		$('.active-weather-group').removeClass('active');
		$('.active-weather-group').eq($(this).index('.day-option')).addClass('active');

	if($(this).hasClass('sunny')) {
		$('body').removeClass();
		$('body').addClass('body-weather-sunny');
	} else if($(this).hasClass('rainy')) {
		$('body').removeClass();
		$('body').addClass('body-weather-rainy');
	}
	});

});