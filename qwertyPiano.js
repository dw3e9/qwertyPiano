$(document).ready(function() {

	var piano = Synth.createInstrument('piano');

	//map keyboard to notes on piano
	var keyMappings = {
		"a": ['C',"4"],
		"s": ['D',"4"],
		"d": ['E',"4"],
		"f": ["F","4"],
		"g": ["G","4"],
		"h": ["A","4"],
		"j": ["B","4"],
		"k": ["c","5"],
		"l": ["d","5"],
		"_": ["_",""]
	};

	//sampling song --> beginning of twinkle little star
	// var twinkle = 'CCGGAAG_FFEEDDC_GGFFEED_GGFFEED_CCGGAAG_FFEEDDC_';
	var twinkle = 'CEEEDCGGFEEEDCGCEEEDCGGFEEEDCGGFEFGFEDbGCEEEDCGGFEEEDCGGFEFGFEDCGFEFGAGCGFEFGAGCaGFEDCDCGFEFGFEDDGCEEEDCGGFEEEDCGGF';
	$(document).keypress(function(e){
		var key = keyMappings[String.fromCharCode(e.charCode)];
		piano.play(key[0] , key[1], 3);
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

	// $('.ui.dropdown').dropdown();

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





var buildOutputUsingTempo = function( tempoArray, keysArray) {
	var result = "";
	var currentTime = 0;


	for(var i = 0; i< tempoArray.length; i++){
		result += keysArray[i][0]["keyQWERTY"];
		currentTime += 250;
		
		var numberOfBlanks = (tempoArray[i]-250)/250;

		for(var j = 0; j < numberOfBlanks; j++) {
			result += " ";
		};
	}
	return result; 
}

/**testing for buildOutputUSingTempo**/
var tempoArray = [1000, 250, 1000, 2000];
var keysArray = [[{keyQWERTY: "a"}],[{keyQWERTY: "s"}], [{keyQWERTY: "d"}], [{keyQWERTY: "f"}]];

console.log( buildOutputUsingTempo(tempoArray, keysArray));
/***********/








