

//http://www.electronics.dit.ie/staff/tscarff/Music_technology/midi/midi_note_numbers_for_octaves.htm
var noteNumbers = ['C','c','D','d','E','F','f','G','g','A','a','B'];
var octave = [0, 1, 2 ,3, 4, 5, 6, 7, 8, 9 , 10];
var MIDItoNote = {};
var midiNumber = 0;
for( var row = 0; row < octave.length; row++) {
	for( var column = 0; column < noteNumbers.length; column++) {
		MIDItoNote[midiNumber] = [noteNumbers[column], octave[row]];
		midiNumber++;
	}
}

var getNoteFromMIDI = function(midiNumber){
	return MIDItoNote[midiNumber];
}


