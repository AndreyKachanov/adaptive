(function($){})(window.JQuery);


/* trigger when page is ready */
$(document).ready(function (){
	initialize();
});


-----------------------//AJAX load links from the top nav

function initialize() {
	//Click on nav to load external content through AJAX
	$('#topnav a').click(function(e){
		e.preventDefault();
		$('#pages').load( e.target.href + ' #loadcontent'); //pages finished loading
	}); //clicked on nav
}
