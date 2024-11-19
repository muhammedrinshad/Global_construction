(function($) {



    "use strict";



    //Hide Loading Box (Preloader)

    function handlePreloader() {

        if ($('.preloader').length) {

            $('.preloader').delay(200).fadeOut(500);

        }

    }





    //Update Header Style and Scroll to Top

    function headerStyle() {

        if ($('.main-header').length) {

            var windowpos = $(window).scrollTop();

            var siteHeader = $('.main-header');

            var sticky_header = $('.main-header .sticky-header, .header-style-two .outer-container, .header-style-four .header-lower, .header-style-six .outer-container');

            var scrollLink = $('.scroll-to-top');

            if (windowpos > 55) {

                siteHeader.addClass('fixed-header');

                sticky_header.addClass("animated slideInDown");

                scrollLink.fadeIn(300);

            } else {

                siteHeader.removeClass('fixed-header');

                sticky_header.removeClass("animated slideInDown");

                scrollLink.fadeOut(300);

            }

        }

    }



    headerStyle();



    //Submenu Dropdown Toggle

    if ($('.main-header li.dropdown ul').length) {

        $('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');



        //Dropdown Button

        $('.main-header li.dropdown .dropdown-btn').on('click', function() {

            $(this).prev('ul').slideToggle(500);

        });



        //Megamenu Toggle

        $('.main-header .main-menu li.dropdown .dropdown-btn').on('click', function() {

            $(this).prev('.mega-menu').slideToggle(500);

        });



        //Disable dropdown parent link

        $('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {

            e.preventDefault();

        });

    }






    //Banner Carousel

    if ($('.banner-carousel').length) {

        $('.banner-carousel').owlCarousel({

            animateOut: 'fadeOut',

            animateIn: 'fadeIn',

            loop: true,

            margin: 0,

            nav: true,

            smartSpeed: 700,

            autoHeight: true,

            autoplay: true,

            autoplayTimeout: 10000,

            navText: ['<span class="fa fa-long-arrow-left"></span> prev', 'next<span class="fa fa-long-arrow-right"></span>'],

            responsive: {

                0: {

                    items: 1

                },

                600: {

                    items: 1

                },

                1024: {

                    items: 1

                },

            }

        });

    }

    //Services Carousel

    if ($('.services-carousel').length) {

        $('.services-carousel').owlCarousel({

            loop: true,

            margin: 0,

            nav: true,

            smartSpeed: 700,

            autoplay: true,

            autoplayTimeout: 5000,

            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],

            responsive: {

                0: {

                    items: 1

                },

                767: {

                    items: 1

                },

                1024: {

                    items: 2

                }

            }

        });

    }

    //Projects Carousel

    if ($('.projects-carousel-two').length) {

        $('.projects-carousel-two').owlCarousel({

            animateOut: 'slideOutDown',

            animateIn: 'zoomIn',

            loop: true,

            margin: 30,

            nav: true,

            smartSpeed: 15000,

            mouseDrag: false,

            touchDrag: false,

            autoHeight: true,

            autoplay: true,

            autoplayTimeout: 10000,

            navText: ['<span class="fa fa-chevron-left"></span>', '<span class="fa fa-chevron-right"></span>'],

            responsive: {

                0: {

                    items: 1

                },

                600: {

                    items: 1

                },

                1024: {

                    items: 1

                }

            }

        });

    }

    //Sponsors Carousel

    if ($('.sponsors-carousel').length) {

        $('.sponsors-carousel').owlCarousel({

            loop: true,

            margin: 30,

            nav: true,

            smartSpeed: 100,

            autoplay: true,

            responsive: {

                0: {

                    items: 1

                },

                600: {

                    items: 2

                },

                768: {

                    items: 3

                },

                1024: {

                    items: 4

                },

                1200: {

                    items: 6

                },

            }

        });

    }


	//Single Item Carousel

	if ($('.single-item-carousel').length) {

		$('.single-item-carousel').owlCarousel({

			loop:true,

			margin:0,

			nav:true,

			smartSpeed: 700,

			autoplay: true,

			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],

			responsive:{

				0:{

					items:1

				},

				600:{

					items:1

				},

				1024:{

					items:1

				}

			}

		});    		

	}

    // gallery

    if($('.filter-list').length){

        $('.filter-list').mixItUp({});

   }

    //Contact Form Validation

    if ($('#contact-form').length) {

        $('#contact-form').validate({

            rules: {

                username: {

                    required: true

                },

                email: {

                    required: true,

                    email: true

                },

                phone: {

                    required: true,

                },

                message: {

                    required: true

                }

            }

        });

    }



    function full_Screen() {

        $('.full-screen').css("height", $(window).height());

    }

    full_Screen()



    // Scroll to a Specific Div

    if ($('.scroll-to-target').length) {

        $(".scroll-to-target").on('click', function() {

            var target = $(this).attr('data-target');

            // animate

            $('html, body').animate({

                scrollTop: $(target).offset().top

            }, 1500);



        });

    }



    // Elements Animation

    if ($('.wow').length) {

        var wow = new WOW(

            {

                boxClass: 'wow', // animated element css class (default is wow)

                animateClass: 'animated', // animation css class (default is animated)

                offset: 0, // distance to the element when triggering the animation (default is 0)

                mobile: false, // trigger animations on mobile devices (default is true)

                live: true // act on asynchronously loaded content (default is true)

            }

        );

        wow.init();

    }







    /* ==========================================================================

    	When document is resize, do

       ========================================================================== */

    $(window).on('resize', function() {

        full_Screen();

    });





    /* ==========================================================================

       When document is Scrollig, do

       ========================================================================== */



    $(window).on('scroll', function() {

        headerStyle();

        full_Screen()

    });



    /* ==========================================================================

       When document is loading, do

       ========================================================================== */



    $(window).on('load', function() {

        handlePreloader();

    });



})(window.jQuery);