(function($){})(window.JQuery);


/* trigger when page is ready */
$(document).ready(function (){
	initialize();
});

function initialize() {
	//Click on nav to load external content through AJAX
	$('#topnav a, #bottomnav a').not('#bottomnav #fbcallus a').click(function(e){
		e.preventDefault();
		$('<div></div>').attr('id', 'spinner').appendTo('#pages'); //spinner
		$('#pages').load( e.target.href + ' #loadcontent', function() { //stop spinner
			fadespinner();
		}); //pages finished loading
	}); //clicked on nav

	foodclicks();

}

function foodclicks() {
	//click on foodlist items to see them larger image onscreen
	$('.foodlist li').click(function(e){

		//Add the Overlay
		$('<div></div>').attr('id', 'overlay').appendTo('body').hide().fadeIn("slow");

		//Handle clicks on the overlay
		$('#overlay').click(function(e){
			$('#overlay').fadeOut('slow', function() {
				$(this).remove();
			}); //fadeout
		}); //overlayclick

	}); //foodlist click
}


function fadespinner() {
	$('#spinner').fadeOut('slow', function() { //stop spinner
		$(this).remove();
	}); //remove spinner
}