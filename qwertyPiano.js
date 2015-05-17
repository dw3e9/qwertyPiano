var synth = new AudioSynth;

var piano = Synth.createInstrument('piano');

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

$(document).keypress(function(e){
	var key = keyMappings[String.fromCharCode(e.charCode)];
	piano.play(key , 4, 3);
})

Object.prototype.getKeyByValue = function( value ) {
    for( var prop in this ) {
        if( this.hasOwnProperty( prop ) ) {
             if( this[ prop ] === value )
                 return prop;
        }
    }
}
// var twinkleBeginning = [a, a, g, g, h, h, g];
var twinkle = "ccgg_aa_gffeeddcggffeedccgg_aa_gffeeddc";
var convertToQWERTY = function(string) {
	var qwertyKeys = string;

	for(var i = 0; i<string.length; i++) {
		string[i] = keyMappings.getKeyByValue(string[i].toUpperCase());
	}
	return qwertyKeys; 
}
console.log(convertToQWERTY(twinkle));


var startPlaying = function() {
	var letter = $(".notes").children()[0];
		$(letter).toggleClass("current");

	setInterval(function(){
		$(letter).toggleClass("current");
		letter = $(letter).next();
		$(letter).toggleClass("current");

	}, 500)
};





