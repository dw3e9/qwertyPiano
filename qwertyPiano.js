var synth = new AudioSynth;

var piano = Synth.createInstrument('piano');

var keyMappings = {
	a: 'C',
	s: 'D',
	d: 'E',
	f: "F", 
	g: "G", 
	h: "A", 
	j: "B"
};

$(document).keypress(function(e){
	var key = keyMappings[String.fromCharCode(e.charCode)];
	piano.play(key , 4, 3);
})

var twinkleBeginning = [a, a, g, g, h, h, g];

var startPlaying = function() {
	var $letters = $(".score").children();
	console.log($letters);

	for(var i = 0; i< $letters.length; i++) {

	};

}





