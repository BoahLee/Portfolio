/* Main js file */

(function ($) {
  "use strict";
  $(document).ready(function () {
    /*=====================================================
        Navbar Scroll
=====================================================*/

    $(window).on("scroll", function () {
      if ($(".navbar").offset().top > 100) {
        $(".navbar").addClass("nav-scroll");
      } else {
        $(".navbar").removeClass("nav-scroll");
      }
    });

    $(".navbar-collapse a").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });

    $(function () {
      $("a.nav-link").on("click", function (event) {
        let target = $(this).attr("href");
        $("html, body").animate(
          {
            scrollTop: $(target).offset().top,
          },
          1000
        );
        event.preventDefault();
      });
    });

    /*===================================================
        scrollspy
====================================================*/

    $("body").scrollspy({ target: ".navbar", offset: 79 });

    /*=================================================
        button Back to top
=================================================*/

    var offset = 250;
    var duration = 300;
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > offset) {
        $(".back-to-top").fadeIn(duration);
      } else {
        $(".back-to-top").fadeOut(duration);
      }
    });

    $(".back-to-top").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });

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

    /*===================================================
        aos settings
===================================================*/

    AOS.init({
      // offset: 200,
      duration: 1500,
      easing: "ease-in-out-back",
    });

    /*===============================================
        End
================================================*/
  });
})(jQuery);
