var sideNavIsVisible = false;

$(document).ready(function() {
	$('#fullPage').fullpage({
		parallax: true,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
		navigation: true,
		navigationPosition: 'right',
		slidesNavigation: 'false',
		easing: 'easeInQuart',
		menu: 'myMenu',
		anchors:['home', 'work', 'contact']

		// autoScrolling:false,
    // lockAnchors: false,
    // anchors:['firstPage', 'secondPage'],
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);

	$('#fullPage').on('click', function(){
		closeNav();
	});
	$('#mySidenav').on('click', function(){
		closeNav();
	});
	var options = {
		strings: ['<span style="color: #ff0000;">Dustin</span>novation',
							'<span style="color: #ff0000;">Dustin</span>tegrity',
							'<span style="color: #ff0000;">Dustin</span>teresting'],
		smartBackspace: true,
		typeSpeed: 80,
		loop: true,
		backDelay: 3000,
		backSpeed: 80,
		shuffle: true,
		showCursor: true,
		cursorChar:'|',
		autoInsertCss: true,
	};

	var typed = new Typed('#typed', options);

});



/*
	SIDE NAV
*/

function sideNavIsClicked(){
	(sideNavIsVisible == true) ? closeNav() : openNav();
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
	//full-page
	document.getElementById("mySidenav").style.width = "100%";
  //document.getElementById("mySidenav").style.width = "250px";
  //document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
	sideNavIsVisible = true;
	$("#fp-nav").addClass("d-none");
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
	sideNavIsVisible = false;
	$("#fp-nav").removeClass("d-none");
}
