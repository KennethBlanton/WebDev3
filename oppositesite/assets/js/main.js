console.log("Hello World from main.js!");

$('.angel--button').click(function(e){
	e.preventDefault();
	$('.words').css({top:'300px'});
	$('.diablo').addClass('tyrael').removeClass('diablo');
	$('.words').html('<h1> The Aspect of Wisdon</h1> <br> <p>Tyrael, formerly the Archangel of Justice, now the Aspect of Wisdom, is a mortal angel. He is a stalwart defender of Sanctuary and mankind, but is considered a renegade by the Angiris Council.</p>')
});
$('.demon--button').click(function(e){
	e.preventDefault();
	$('.words').css({top:'300px'});
	$('.tyrael').addClass('diablo').removeClass('tyrael');
	$('.words').html('<h1> Minions of Darkness</h1> <br> <p>Demons, otherwise known as Hellspawn[1] and the Minions of Darkness[2] are evil entities native to the Burning Hells, and are the primary enemies of the Diablo series. They come in a variety of shapes and sizes and can wield a wide range of magical powers depending on their type. They propagate and serve to spread pure chaos, making them diametrically opposed to the angels of the High Heavens (who stand for Order and fight for the Light). The never-ending war between angels and demons is known as the Eternal Conflict. The armies of Hell are commonly referred to as the Demonic Legion.</p>')
});


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
