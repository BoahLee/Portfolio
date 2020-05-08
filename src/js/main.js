
/* Main js file */

(function ($) {
    "use strict";
    $(document).ready(function(){    	

		
/*=====================================================
        Navbar Scroll
=====================================================*/
 
	$(window).on('scroll', function() {
        if ($(".navbar").offset().top > 100) {
            $(".navbar").addClass("nav-scroll");
        } else {
            $(".navbar").removeClass("nav-scroll");
        }
    });
		
		
		
	$('.navbar-collapse a').on('click',function(){
        $(".navbar-collapse").collapse('hide');
	});	


	  
	// $('a.nav-link').on('click', function(event) {
	// 	var target = $(this).attr('href');
	// 	$('html, body').animate({
	// 	scrollTop: ($(target).offset().top)}, 1000);
	// 	event.preventDefault();
        // });
        $(function() {
			$('a.nav-link').on('click', function(event) {
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top - 0
				}, 1000);
				event.preventDefault();
			});
		});
		
/*===================================================
        scrollspy
====================================================*/	
		
	$('body').scrollspy({target: ".navbar", offset: 79});	
	


/*=================================================
        button Back to top
=================================================*/	
  		
        var offset = 250;
        var duration = 300;
        $(window).on("scroll",function () {

        if ($(window).scrollTop() > offset) { 
	    $(".back-to-top").fadeIn(duration);
        } else {
	    $(".back-to-top").fadeOut(duration);;
        }
        });

	$('.back-to-top').on('click',function(event){
            event.preventDefault();
            jQuery('html, body').animate({scrollTop: 0}, duration);
            return false;
        })	
		 

/*======================================================
        Prealoder
======================================================*/
		
	// $(window).on("load",function (){
  	//    $('.loading').delay(1750).fadeOut(500);
      
	// });
            
/*===================================================
   resize background image for mobile
===================================================*/ 	
	
	$("#home").height($(window).height());
   

/*===============================================
        End
================================================*/
	
});
}(jQuery));

