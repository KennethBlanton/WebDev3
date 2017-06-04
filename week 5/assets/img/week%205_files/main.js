console.log("Hello World from main.js!");
$(document).ready(function(){
	$('.menu-button').on('click', function(){
		$('nav').toggleClass("open");
	})
})