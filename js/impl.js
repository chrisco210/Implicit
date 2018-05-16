var wordDisp;
var hasBegun = false;
var sectionNum = 0;
var startend = [4];
var state = 0;

$(document).ready(function() {
	wordDisp = $(".display#word");
	
	wordDisp.text = "You are about to being the test.  Press space to continue.";
	
});

$(document).keypress(function(e) {

	startend[state] = e.timeStamp;
});