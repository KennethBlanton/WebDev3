console.log("Hello World from main.js!");

console.log($('.block').position().left);

$('.angel--button').click(function(e){
	e.preventDefault();
	$('.diablo').addClass('tyrael').removeClass('diablo');
	$('.words').html('<h1> The Aspect of Wisdon</h1> <br> <p>Tyrael, formerly the Archangel of Justice, now the Aspect of Wisdom, is a mortal angel. He is a stalwart defender of Sanctuary and mankind, but is considered a renegade by the Angiris Council.</p>')
});
$('.demon--button').click(function(e){
	e.preventDefault();
	$('.tyrael').addClass('diablo').removeClass('tyrael');
	$('.words').html('<h1> Minions of Darkness</h1> <br> <p>Demons, otherwise known as Hellspawn[1] and the Minions of Darkness[2] are evil entities native to the Burning Hells, and are the primary enemies of the Diablo series. They come in a variety of shapes and sizes and can wield a wide range of magical powers depending on their type. They propagate and serve to spread pure chaos, making them diametrically opposed to the angels of the High Heavens (who stand for Order and fight for the Light). The never-ending war between angels and demons is known as the Eternal Conflict. The armies of Hell are commonly referred to as the Demonic Legion.</p>')
});


