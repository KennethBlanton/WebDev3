console.log("Hello World from main.js!");
$(document).ready(function(){
	$('.menu-button').on('click', function(){
		$('nav').toggleClass("open");
	})

	setTimeout(function(){
		$('header').addClass('loaded');

	}, 1000);

	$(".profile-image").on('click', function(){
		$.scrollTo($('header'), 400);
	});

	$('.ad-container').parallax({imageSrc: 'assets/img/parallax.jpg'});

});

