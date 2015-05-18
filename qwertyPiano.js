$(document).ready(function() {

	var piano = Synth.createInstrument('piano');

	//map keyboard to notes on piano
	var keyMappings = {
		"a": 'C',
		"s": 'D',
		"d": 'E',
		"f": "F",
		"g": "G",
		"h": "A",
		"j": "B",
		"_": "_"
	};

	//sampling song --> beginning of twinkle little star
	var twinkle = 'CCGGAAG_FFEEDDC_GGFFEED_GGFFEED_CCGGAAG_FFEEDDC_';

	$(document).keypress(function(e){
		var key = keyMappings[String.fromCharCode(e.charCode)];
		piano.play(key , 4, 3);
	});

	Object.prototype.getKeyByValue = function( value ) {
    for( var prop in this ) {
        if( this.hasOwnProperty( prop ) ) {
            if( this[ prop ] === value )
              return prop;
        }
    }
	}

	var convertToQWERTY = function(string) {
		string = string.split("");
		var result = [];
		for(var i = 0; i<string.length; i++) {

			result[i] = keyMappings.getKeyByValue(string[i].toUpperCase());
		}
		console.log(result);
		return result.join("");
	}

	//wrap each note in a span tag
	var wrapInPTag = function(score) {
		var scoreTextArray = score.split("");

		$.each(scoreTextArray, function (index, value) {
		$('.score').append($('<span>').text(value));

 		});
	}

	wrapInPTag(convertToQWERTY(twinkle));

	$('.ui.dropdown').dropdown();

	$( ".ui.teal.submit.button" ).click(function() {
  	startPlaying();
	});

});

var speed = 800;

var startPlaying = function() {
	var letter = $(".score").children()[0];
		console.log(letter);
		$(letter).toggleClass("current");

	setInterval(function(){
		$(letter).toggleClass("current");
		letter = $(letter).next();
		$(letter).toggleClass("current");

	}, speed)
};








