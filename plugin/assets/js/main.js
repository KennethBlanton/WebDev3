console.log("Hello World from main.js!");
var SpanString = (function(){
	var shared = {};

	function splitReview(input) {
		var review = input.split('');
		var finalString = '';
		for (var i =0; i < review.length; i++) {
			review[i] = '<span class=string-split>' + review[i] + '</span>';
			finalString+=review[i];
		}
		return finalString
	}
	function updateReview() {
		var review = $('.review');
		for (var i = review.length - 1; i >= 0; i--) {
			var input = $(review[i]).html();
			var final = splitReview(input);
			$(review[i]).html(final);
		}
	}
	function activate() {
		var spans = $('.string-split');
		var i = 0;
		function show() {
			$(spans[i]).toggleClass('active');
		    i++;
		    if( i < spans.length ){
		        setTimeout( show, 10 );
		    }
		}
		show();
	}
	shared = {
		update: updateReview,
		activate: activate,
	};
	return shared

})();

var Waypoints = (function(){
	var waypoint = new Waypoint({
	  element: $('.logo'),
	  handler: function(direction) {
	    $('.logo').addClass('active');
	  }
	})

	$(function() {
	    console.log( "ready!" );
	});
	var nav = $('.characters').waypoint(function(direction) {
	  $('.nav2').toggleClass('shown');
	  $('.char1').toggleClass('turn');
	  $('.char2').toggleClass('turn');

	}, {
	  offset: '30%'
	})
	var characters = $('.characters').waypoint(function(direction) {
	  $('.char3').toggleClass('turn');
	  $('.char4').toggleClass('turn');

	}, {
	  offset: '20%'
	})
	var press = $('.char3').waypoint(function(direction) {
	    $('.press').toggleClass('move');
	    SpanString.activate();
	  }, {
	  offset: '30%'
	})
	SpanString.update();
})()



