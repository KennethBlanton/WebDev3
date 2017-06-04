console.log("Hello World from main.js!");


$(document).on('touchstart', function(e) {
    e.preventDefault();
    console.log('fired');
});


$('.dice , .parralax-break').hide()
function fadeAnimation(elem) {
	elem.css('opacity', 0);
	function fadeIn() {
		elem.css('opacity', 1);
	}
	setTimeout(fadeIn, 1000);
}

function makeAngels(){
	if($('body').hasClass('noClass')) {
		$('.dice , .parralax-break').show()
		$('body').addClass('angel1');
		$('body').removeClass('noClass');

	} else {	
		$('.dice , .parralax-break').hide()
		$('body').addClass('noClass');
		$('body').removeClass('demon1');
	}

	$('.hero').hasClass('active') ? $('.hero').removeClass('active'): $('.hero').addClass('active');
	$('.hero').css('background-image', 'url(assets/img/angel-1.jpg)');



	$('.words').css({top:'300px'});
	$('.diablo').addClass('tyrael').removeClass('diablo');
	$('.words').html("<h1> Angiris Council</h1> <br> <p>The Angiris Council is the ruling body of the High Heavens. It initially consisted of five archangels, each of a particular aspect said to represent the chief virtues of Anu.[1] Over time however, the Council's unity and members has diminished, including the absence of Archangel Malthael.</p>")


	createAngelBlock();


};
 function makeDemons (){
	if($('body').hasClass('noClass')) {
		$('.dice , .parralax-break').show()
		$('body').addClass('demon1');
		$('body').removeClass('noClass');

	} else {
		$('.dice , .parralax-break').hide()
		$('body').addClass('noClass');
		$('body').removeClass('angel1');
	}


	$('.hero').hasClass('active') ? $('.hero').removeClass('active'): $('.hero').addClass('active');
	$('.hero').css('background-image', 'url(assets/img/diablo-portrait.jpg)');




	$('.words').css({top:'300px'});
	$('.tyrael').addClass('diablo').removeClass('tyrael');
	$('.words').html("<h1>Prime Evils</h1> <br> <p>At the beginning of time, there existed a single, near-perfect entity called Anu. Anu desired to purify itself of all darkness within itself and cast out its darker half. This dark essence congealed and formed the seven-headed creature called Tathamet. For aeons, Tathamet and Anu battled against one another endlessly until they unleashed the totality of their power. In the end, both were vanquished, leaving only their fractured essence behind. As Tathamet's body formed the foundation of the Burning Hells, each of its heads became a greater demon. The three dominant heads became the Prime Evils, while the remaining heads became the Lesser Evils. The three Prime Evils collectively established themselves as the leading power among the Burning Hells. These were Diablo, Lord of Terror, Mephisto, Lord of Hatred ,and Baal, Lord of Destruction[1]—the first of all the Evils of Hell, and the most powerful.[2] They endeavoured to maintain a strict rule over the demons of Hell, each powering one another—as terror leads to hatred, hatred leads to destruction.[1] However, their unity was fragmentary at best[3] and while Mephisto functioned as their leader (by virtue of him being the eldest), he would pit his brothers against one another if it suited his purposes</p>")

	createDemonBlock();
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
		if($('.words').position().top <= -900) {
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
var diceX;
var diceY; 
var startDragX;
var startDragY;
var draggable;
var endPointX;
var endPointY
$('.dice').mousedown(function(e) {
	e.preventDefault();
	draggable = e.currentTarget;
	!diceX ? diceX=0 :null;
	!diceY ? diceY=0 :null;
	startDragY = e.pageY;
	startDragX = e.pageX;
	$('.target-info').toggleClass('show');


	})
.mousemove(function(e) {
	if(draggable) {

		$('.box').css('transform', "rotateX(" +(diceY+(e.pageY - startDragY)) +"deg) rotateY("+(diceX+(e.pageX-startDragX))+"deg)");
	}
	endPointX=diceX+(e.pageX - startDragX)/90;
	endPointY=diceY+(e.pageY-startDragY)/90;


})
.mouseup(function(e) {
	e.preventDefault();
	draggable=null;
	startDragY = e.pageY;
	startDragX = e.pageX;
	console.log(endPointY)
	if(Number.isInteger(Math.round(endPointX)/4)  ) {
		console.log('diablo')
		if($('body').hasClass('demon1')) {
			$('.target-info').html("Diablo, the Lord of Terror, is the youngest brother. He was responsible for the enslavement of mankind with violent images of bloodlust and terror; his prime weapon being the victim's fear. He was originally defeated under the labyrinths beneath Tristram but corrupted the hero who slew him and sought out his brothers, but then was defeated in Hell, by the pursuing adventurer. The aura of the Lord of Terror is the most fearsome among angels and demons alike.");
		} else {
			$('.target-info').html("Tyrael, The Archangel of Justice, The 'maverick' of the Council. Formerly an impartial dispenser of justice, his disposition changed at the end of the Sin War, which put him at odds with Imperius. Aided humanity secretly through the Horadrim, chose to become mortal when called to answer for his actions. Has since taken on the aspect of Wisdom in addition to Justice. Wields El'druin, the Sword of Justice. Corresponding domain was the Courts of Justice.")
		}
	}else if (!Number.isInteger(Math.round(endPointX)/4) && Number.isInteger(Math.round(endPointX)/2)) {
		if($('body').hasClass('demon1')) {
	 		$('.target-info').html("Belial, the Lord of Lies, One of the leaders of the rebellion against the Three and a former protege of Mephisto. He somehow comes to take over Caldeum and controls its Emperor. Uses unholy locust swarms for both phases of his fight with heroes: on the 2nd phase, he'll dig his massive claws into the ground, breathe huge gusts of fel locust flame and make fiery eruptions. His powers are so great that he manages to fool everyone (including himself) into thinking that he is invincible. He is the third of the Lesser Evils to be defeated.");
	 	} else {
	 		$('.target-info').html("Malthael, Angel of Death, Former leader of the council. Was once a noble being said to cherish all life. Malthael's persona darkened after the disappearance of the Worldstone. After its destruction, he abandoned the High Heavens and supposedly wandered the halls of Pandemonium, seeking answers to the unknowable mysteries of life and death. Eventually returned to Sanctuary at the head of the Reapers, having since become the Angel of Death. Once carried Chalad'ar, the Chalice of Wisdom. Corresponding domain was the Pools of Wisdom.")
	 	}
	} else if(Number.isInteger(Math.round(endPointX)/3) && endPointX > 0 || !Number.isInteger(Math.round(endPointX)/3) && endPointX < 0)  {
		if($('body').hasClass('demon1')) {
			$('.target-info').html("Mephisto, the Lord of Hatred, The oldest of the Three Brothers. Father of Lilith and Lucion. Arguably the most intelligent and cunning demon in existence, though physically the weakest of the three brothers. His attacks in Diablo II are generally lightning and poison based, which are further compounded by assistance from corrupted Councilmembers.")
		}else {
			$('.target-info').html("Imperius, Archangel of Valor, Current leader of the Council and the Heavenly Host. A mighty warrior, but also prideful and rash. Formerly close with Tyrael, but their relationship became strained after Tyrael's advocation for humanity at the end of the Sin War. Wielded Solarion, the Spear of Valor. Corresponding domain is the Halls of Valor.")

		}
	} else if(!Number.isInteger(Math.round(endPointX)/3) && endPointX > 0 || Number.isInteger(Math.round(endPointX)/3) && endPointX < 0) {
		if($('body').hasClass('demon1')) {
			$('.target-info').html("Tathamet, the Prime Evile, A seven-headed dragon composed of all darkness and vileness that Anu cast off itself before the universe was created. It is known that he was the only reason that the Burning Hells came into existence. Tathamet battled Anu, and when the two beings died the seven heads of Tathamet became the seven Great Evils. The three most prominent heads became Diablo, Mephisto and Baal, and the four lesser heads Azmodan, Belial, Andariel and Duriel. Tathamet's body meanwhile became the foundation for the Burning Hells.")
		} else {
			$('.target-info').html("Anu, according to legend, was the very first being in Creation. It was Anu who fought the battle with the Prime Evil Tathamet, their struggle leading to their deaths, but also the births of Heaven and Hell, angels and demons.")
		}
	}
	if(Number.isInteger(Math.round(endPointY)/3) && endPointY > 0.64||!Number.isInteger(Math.round(endPointY)/3) && endPointY < -0.64) {
		if($('body').hasClass('demon1')) {
			$('.target-info').html("Azmodan, Lord of Sin, One of the leaders of the rebellion against the Three. Brother and rival of Belial. Throws fire boulders, summons demon gates to call upon minions and call forth dark magic in a large area of effect. He is the greatest military tactitian in the Burning Hells, although such a claim is very much in doubt considering his arrogance and repeatedly telling his enemies his next plan is what cost him his victory during the Battle of Bastion's Keep and Arreat Crater. He is the fourth of the Lesser evils to be defeated and the last Great Evil to be sucked into the Black Soulstone.")
		} else {
			$('.target-info').html("Itherael, Archangel of Fate, Described as neither male nor female. Mostly aloof, though is closest with Auriel. Reads Talus'ar, the Scroll of Fate, which allows him to see future events. Corresponding domain is the Library of Fate.")
		}
	} else if((!Number.isInteger(Math.round(endPointY)/3) && endPointY > 0.64 ||Number.isInteger(Math.round(endPointY)/3) && endPointY < -0.64)) {
		if($('body').hasClass('demon1')) {
			$('.target-info').html("Baal, The Lord of Destruction, The middle child of the Three Brothers. His attacks in Diablo II are mostly magical and of an assorted variety, likely due to having Tal Rasha as his host. Due to his corruption of it, he was also indirectly responsible for the destruction of the Worldstone.")
		} else {
			$('.target-info').html("Auriel, Archangel of Hope, The voice of reason and pillar of diplomacy in the Council and its only female member. She is also closest to Itherael. Compassionate, but nonetheless willing to fight when it's necessary. Wields Al'maiesh, the Cord of Hope. Corresponding domain is the Gardens of Hope.")
		}
	}


	$('.target-info').addClass('show');
})
function createDemonBlock() {
	$('.target-info').html("");
	$('.front').css('background-image', 'url(assets/img/Diablo2.png)');
	$('.bottom').css('background-image', 'url(assets/img/Baal2.png)');
	$('.right').css('background-image', 'url(assets/img/Mephisto2.png)');
	$('.left').css('background-image', 'url(assets/img/Tahameth_2.png)');
	$('.top').css('background-image', 'url(assets/img/Azmodan2.png)');
	$('.back').css('background-image', 'url(assets/img/Belial2.png)');

}
function createAngelBlock() {
	$('.target-info').html("");
	$('.front').css('background-image', 'url(assets/img/Tyrael.png)');
	$('.bottom').css('background-image', 'url(assets/img/Auriel.png)');
	$('.right').css('background-image', 'url(assets/img/Imperius.png)');
	$('.left').css('background-image', 'url(assets/img/Anu.jpg)');
	$('.top').css('background-image', 'url(assets/img/Itherael.png)');
	$('.back').css('background-image', 'url(assets/img/Malthael.png)');

}























