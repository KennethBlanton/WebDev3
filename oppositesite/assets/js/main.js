console.log("Hello World from main.js!");
function fadeAnimation(elem) {
	elem.css('opacity', 0);
	function fadeIn() {
		elem.css('opacity', 1);
	}
	setTimeout(fadeIn, 1000);
}

function makeAngels(){
	$('.hero').hasClass('active') ? $('.hero').removeClass('active'): $('.hero').addClass('active');
	$('.hero').css('background-image', 'url(assets/img/angel-1.jpg)');



	$('.words').css({top:'300px'});
	$('.diablo').addClass('tyrael').removeClass('diablo');
	$('.words').html("<h1> Angiris Council</h1> <br> <p>The Angiris Council is the ruling body of the High Heavens. It initially consisted of five archangels, each of a particular aspect said to represent the chief virtues of Anu.[1] Over time however, the Council's unity and members has diminished, including the absence of Archangel Malthael.</p>")
};
 function makeDemons (){
	$('.hero').hasClass('active') ? $('.hero').removeClass('active'): $('.hero').addClass('active');
	$('.hero').css('background-image', 'url(assets/img/diablo-portrait.jpg)');




	$('.words').css({top:'300px'});
	$('.tyrael').addClass('diablo').removeClass('tyrael');
	$('.words').html("<h1>Prime Evils</h1> <br> <p>At the beginning of time, there existed a single, near-perfect entity called Anu. Anu desired to purify itself of all darkness within itself and cast out its darker half. This dark essence congealed and formed the seven-headed creature called Tathamet. For aeons, Tathamet and Anu battled against one another endlessly until they unleashed the totality of their power. In the end, both were vanquished, leaving only their fractured essence behind. As Tathamet's body formed the foundation of the Burning Hells, each of its heads became a greater demon. The three dominant heads became the Prime Evils, while the remaining heads became the Lesser Evils. The three Prime Evils collectively established themselves as the leading power among the Burning Hells. These were Diablo, Lord of Terror, Mephisto, Lord of Hatred ,and Baal, Lord of Destruction[1]—the first of all the Evils of Hell, and the most powerful.[2] They endeavoured to maintain a strict rule over the demons of Hell, each powering one another—as terror leads to hatred, hatred leads to destruction.[1] However, their unity was fragmentary at best[3] and while Mephisto functioned as their leader (by virtue of him being the eldest), he would pit his brothers against one another if it suited his purposes</p>")
};


// $('.jslax').on( 'DOMMouseScroll mousewheel', function ( e ) {
//   if( e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0 ) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
//     //scroll down
//     $(".inside-lax").css({ top: $('.inside-lax').position().top + -5 + "px" });
//      // $(".jslax").css({ top: $('.inside-lax').position().top + 1 + "px" });
//     console.log($('.inside-lax').position().top )
//     console.log('down');
//   } else {
//     //scroll up
//     $(".inside-lax").css({ top: $('.inside-lax').position().top +5 + "px" });
//          // $(".jslax").css({ top: $('.inside-lax').position().top - 1 + "px" });
//     console.log('Up');
//   }
//   //prevent page fom scrolling
//   return false;
// });
$('.words').on('DOMMouseScroll mousewheel', function (e) {
	if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
		if($('.words').position().top <= -650) {
			return false
		}

		$('.words').css( {top: $('.words').position().top - 10 + 'px'});
		$('.background').css( {top: $('.background').position().top - 3 + 'px'});

	} else {
		if($('.words').position().top >= 350) {
			return false
		}
		$('.words').css( {top: $('.words').position().top + 10 + 'px'});
		$('.background').css( {top: $('.background').position().top + 3 + 'px'});
	}
	return false;
})
var heroX;
$('.hero').mousedown(function(e) {
	e.preventDefault();
	heroX = e.pageX;
	console.log(e.pageX + "," + this.attributes.x) })
	.mouseup(function(e) {
		e.preventDefault();
		console.log(this);
		console.log(e.pageX + "," + this);
		fadeAnimation($('.hero'));
		setTimeout(function() {
			heroX > e.pageX ? makeDemons() : makeAngels();
		}, 300)
	})
var diceX = 0;
var diceY = 0;
var startDragX;
var startDragY;
var draggable;
$('.dice').mousedown(function(e) {
	e.preventDefault();
	draggable = e.currentTarget;
	startDragY = e.pageY;
	startDragX = e.pageX;


	})
	.mousemove(function(e) {
		if(draggable) {
			console.log('firing');
			console.log(e.pageY);
			console.log(startDragY);
			console.log(diceY+ e.pageY - startDragY)
			$('.box').css('transform', "rotateX(" +(diceY+(e.pageY*.5 - startDragY)) +"deg) rotateY("+(diceX+(e.pageX*.5-startDragX))+"deg)");
		}
	})
	.mouseup(function(e) {
		e.preventDefault();
		draggable=null;
	})
