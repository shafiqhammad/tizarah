/*
  Theme Name: TIZARAH - Responsive html5 Bootstrap Template
  Author: Shafiq Hammad
  Author URL: https://themeforest.net/user/shafiqhammad
  Support: shafiqhammad5@gmail.com
  Description: Creative Responsive HTML5 template.
  Version: 1.0
*/ 
(function($) {
    "use strict";

    // Preloader 
    $('body').addClass('preloader-active');
    $(window).on('load', function() { 
        $('.preloader').fadeOut();
        $('.preloader-spinner').delay(350).fadeOut('slow');
        $('body').removeClass('preloader-active');
    });

    // Main-menu background-color change
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
            $("#home").css({"background-color": "rgba(0, 0, 0, .9)", "transition": ".5s"});
        }
        else {
            $("#home").css("background" , "transparent");
        }
    });

    // slider active
    $('.slider-active').slick({
        autoplay: true,
        autoplaySpeed: 6000,
        dots: false,
        speed: 1000,
        fade: true,
        arrows: true,
        nextArrow: '<i class="fas fa-long-arrow-alt-right"></i>',
        prevArrow: '<i class="fas fa-long-arrow-alt-left"></i>',
        responsive: [
            {
                breakpoint: 768, 
                settings: { 
                    dots: false, 
                    arrows: false 
                } 
            }
        ]
    });

    // circliful
    $('#skill-1').circliful({
    	foregroundColor: "#03deff",
    	backgroundColor: "#0350ff",
    	percentageY: 108,
    });
    $('#skill-2').circliful({
    	foregroundColor: "#03deff",
    	backgroundColor: "#0350ff",
    	percentageY: 108,
    });
    $('#skill-3').circliful({
    	foregroundColor: "#03deff",
    	backgroundColor: "#0350ff",
    	percentageY: 108,
    });
    $('#skill-4').circliful({
    	foregroundColor: "#03deff",
    	backgroundColor: "#0350ff",
    	percentageY: 108,
    });
        
	// magnificPopup
	$('.img-popup').magnificPopup({
	  	type: 'image',
	  	gallery:{
	    	enabled:true,
	    	tPrev: 'Previous Image', // title for left button
			tNext: 'Next Image', // title for right button
	  	}
	});

    // isotope
    $('#container').imagesLoaded( function() {
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item'
            }
        });
        $('.portfolio-btn-group').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
    });

	// testimonial slider active
	$('.testimonial-active').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
		arrows: true,
		nextArrow: '<i class="fas fa-long-arrow-alt-right"></i>',
		prevArrow: '<i class="fas fa-long-arrow-alt-left"></i>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ],
    });

    // team slider active
	$('.team-active').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
    });

  	// counterUp
	$('.counter').counterUp({
		time: 2000
	});

	// client slider active
	$('.client-active').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: false,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            }
        ],
    });

    // Wow js
    new WOW().init();

    //for scroll top 
    $(document).ready(function(){
        $(".scroll-top").click(function(){
            $("html,body").animate({scrollTop:0},1000);
        });
    });
    $(window).scroll(function (){
        if ($(this).scrollTop() > 180) { $(".scroll-top").fadeIn();}
        else{
            $(".scroll-top").fadeOut();
        }
    });

    // Scroll-Down
    $(document).ready(function(){
        $(".scroll-down").click(function(){
            $("html,body").animate({scrollTop:'600px'},1000);
        });
    });

// Portfolio-style-2
    $('.carousel').flipster({
        buttons: false,
        style: 'carousel',
    });

})(jQuery);
