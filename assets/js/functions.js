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
			foodclicks();
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

		//Make a copy of the info area and place within the overlay
		$(this).children('.info').clone().appendTo('#overlay');

		//Add the spinner while the image loads
		$('<div></div>').attr('id', 'spinner').appendTo('#overlay');

		//Calculate the name of the high res image
		largeimage=$(this).children('img').attr('src');
		largeimage=largeimage.substr(0, largeimage.length-7)+'.jpg';

		//Load the Image
		$('<img>').attr('src',largeimage).attr('id', 'overlayimg').appendTo('#overlay').load(function(){
			fadespinner();
			
			//Click to return
			$('<div></div>').attr('id', 'clicktoreturn')
			.appendTo('#overlay').hide().delay(500).fadeIn(400).delay(1500).fadeOut(400); //continue all at once.
		});
	}); //foodlist click
}



function fadespinner() {
	$('#spinner').fadeOut('slow', function() { //stop spinner
		$(this).remove();
	}); //remove spinner
}