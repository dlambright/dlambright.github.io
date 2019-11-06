$(document).ready(function() {
	$('#fullPage').fullpage({
		parallax: true
		// autoScrolling:false,
    // lockAnchors: false,
    // anchors:['firstPage', 'secondPage'],
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);

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

	$("#picture-carousel").owlCarousel({
		center: true,
		loop: true,
		items: 1,
		nav: true,
		margin: 10,
		responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
 	});

	/*$("#description-carousel").owlCarousel({
		center: true,
		loop: true,
		items: 1,
		nav: true,
		margin: 10,

 	});*/
});
