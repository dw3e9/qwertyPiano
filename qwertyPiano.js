$(document).ready(function() {
	var synth = new AudioSynth;

	var piano = Synth.createInstrument('piano');

	//map keyboard to notes on piano
	var keyMappings = {
		a: 'C',
		s: 'D',
		d: 'E',
		f: "F",
		g: "G",
		h: "A",
		j: "B"
	};

	//sampling song --> beginning of twinkle little star
	var twinkle = 'CCGGAAG_FFDDSSA_GGFFDDS_GGFFDDS_AAGGHHG_FFDDSSA_';

	$(document).keypress(function(e){
		var key = keyMappings[String.fromCharCode(e.charCode)];
		piano.play(key , 4, 3);
	});

	//wrap each note in a span tag
	var wrapInPTag = function(score) {

		var scoreTextArray = score.split("");

		$.each(scoreTextArray, function (index, value) {
		$('.score').append($('<span>').text(value));

 		});
	}
	wrapInPTag(twinkleBeginning);
});







