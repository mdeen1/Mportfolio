$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Web Developer.", "Software Engineer.", "Student."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

		$('.owl-carousel').owlCarousel({
	    loop:true,
	    items: 4,
	    responsive:{ //displayed percents on screensize
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	         938:{
	            items:4
	        }
	    }
	});


	$('.chart').easyPieChart({
            easing: 'easeInOut',
            barColor: '#fff',
            trackColor: false, //color of the percent
            scaleColor: false, //color of theleftover
            lineWidth: 4,
            size: 152,
            onStep: function(from, to, percent) {
            	$(this.el).find('.percent').text(Math.round(percent));
            }
        });

});