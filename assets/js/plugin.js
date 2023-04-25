/* ==============
 ========= Js Documentation =========

 Template Name: Revest
 Version: 1.0
 Description: Real Estate Investment For Everyone
 Author: Pixelaxis
 Author URI: https://themeforest.net/user/pixelaxis

    =========================

     01. select location
     ---------------------------
     02. select property
     ---------------------------
     03. select language
     ---------------------------
     04. select number code
     ---------------------------
     05. select number code two
     ---------------------------
     06. select number code three
     ---------------------------
     07. select number code four
     ---------------------------
     08. hero section video popup
     ---------------------------
     09. invest time left countdown
     ---------------------------
     10. testimonial slider
     ---------------------------
     11. cities slider
     ---------------------------
     12. select language type
     ---------------------------
     13. project gallery
     ---------------------------
     14. project gallery slider
     ---------------------------
     15. shuffle open job position
     ---------------------------
     16. blog post shuffle grid
     ---------------------------
     17. blog post shuffle list
     ---------------------------
     18. project gallery two
     ---------------------------
     19. blog post shuffle list
     ---------------------------
     20. counter one
     ---------------------------
     21. counter two
     ---------------------------
     22. counter three
     ---------------------------
     23. counter four
     ---------------------------
     23. counter five
     ---------------------------
     23. wow init
     
    =========================
============== */

(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    // select location
    $(".location__select").niceSelect();

    // select property
    $(".property__select").niceSelect();

    // select language
    $(".language-select").niceSelect();

    // select number code
    $(".number__code__select").niceSelect();

    // select number code two
    $("#coutrySelect").niceSelect();

    // select number code three
    $("#coutryAltSelect").niceSelect();

    // select number code four
    $(".grid__select").niceSelect();

    // hero section video popup
    if (document.querySelector(".video__popup") !== null) {
      $(".video__popup").magnificPopup({
        disableOn: 768,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
      });
    }

    // invest time left countdown
    if (document.querySelector(".countdown") !== null) {
      $(".countdown").downCount({
        date: "03/13/2023 11:59:59",
        offset: +10,
      });
    }

    // testimonial slider
    $(".testimonial__item__wrapper").not(".slick-initialized").slick({
      infinite: true,
      autoplay: true,
      focusOnSelect: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow:
        "<button type='button button--effect' class='slick-prev pull-left button arrow--button'><i class=\"fa-solid fa-arrow-right-long\"></i></button>",
      nextArrow:
        "<button type='button button--effect' class='slick-next pull-right button arrow--button'><i class=\"fa-solid fa-arrow-left-long\"></i></button>",
      dots: false,
    });

    // cities slider
    $(".cities__item__wrapper")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: $(".prev"),
        nextArrow: $(".next"),
        responsive: [
          {
            breakpoint: 993,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    // select language type
    $("#typeSelect").niceSelect();

    // project gallery
    $(".image__gallery__area").magnificPopup({
      delegate: "a",
      type: "image",
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: false,
        preload: [0, 1],
      },
    });

    // project gallery slider
    $(".image__gallery__area")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    // shuffle open job position
    if ($(".open__position__tab__wrapper")[0]) {
      window.onload = function () {
        var Shuffle = window.Shuffle;
        var element = document.querySelector(".open__position__tab__wrapper");

        var shuffleInstance = new Shuffle(element, {
          itemSelector: ".open__job__single",
        });

        $(".open__tab__btn").on("click", function (e) {
          e.preventDefault();
          var keyword = $(this).attr("data-target");
          shuffleInstance.filter(keyword);
        });
      };
    }

    // shuffle open job position
    if ($(".latest__blog__shuffle")[0]) {
      window.onload = function () {
        var Shuffle = window.Shuffle;
        var element = document.querySelector(".latest__blog__shuffle");

        var shuffleInstance = new Shuffle(element, {
          itemSelector: ".open__job__single",
        });

        $(".open__tab__btn").on("click", function (e) {
          e.preventDefault();
          var keyword = $(this).attr("data-target");
          shuffleInstance.filter(keyword);
        });
      };
    }

    // blog post shuffle grid
    if ($(".latest__blog__shuffle")[0]) {
      window.onload = function () {
        var Shuffle = window.Shuffle;
        var element = document.querySelector(".latest__blog__shuffle");

        var shuffleInstance = new Shuffle(element, {
          itemSelector: ".latest__blog__item",
        });

        $(".filter__bar__tab").on("click", function (e) {
          e.preventDefault();
          $(".filter__bar__tab").addClass("button--secondary");
          $(this).removeClass("button--secondary");
          var keyword = $(this).attr("data-target");
          shuffleInstance.filter(keyword);
        });
      };
    }

    // blog post shuffle list
    if ($(".latest__blog__shuffle__list")[0]) {
      window.onload = function () {
        var Shuffle = window.Shuffle;
        var element = document.querySelector(".latest__blog__shuffle__list");

        var shuffleInstance = new Shuffle(element, {
          itemSelector: ".latest__blog__item",
        });

        $(".filter__bar__tab").on("click", function (e) {
          e.preventDefault();
          $(".filter__bar__tab").addClass("button--secondary");
          $(this).removeClass("button--secondary");
          var keyword = $(this).attr("data-target");
          shuffleInstance.filter(keyword);
        });
      };
    }

    // project gallery two
    $(".p__gallery__single").magnificPopup({
      delegate: "a",
      type: "image",
      mainClass: "mfp-img-mobile",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1],
      },
    });

    // counter one
    $(".counter").counterUp({
      delay: 10,
      time: 500,
    });

    // counter two
    $(".counterTwo").counterUp({
      delay: 10,
      time: 500,
    });

    // counter three
    $(".counterThree").counterUp({
      delay: 10,
      time: 500,
    });

    // counter four
    $(".counterFour").counterUp({
      delay: 10,
      time: 500,
    });

    // counter five
    $(".counterFive").counterUp({
      delay: 10,
      time: 500,
    });

    // wow init
    new WOW().init();

    // select dashboard language
    $(".select-dashboard-language").niceSelect();

    // select balance report
    $(".select-balance-report").niceSelect();

    // investment chart
    var investmentOptions = {
      colors: ["#1FAA5C"],
      chart: {
        type: "area",
        height: 230,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: false,
        },
      },
      series: [
        {
          name: "Invested",
          data: [400, 350, 300, 250, 300, 150, 200],
        },
      ],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      fill: {
        type: "gradient",
        colors: ["#1FAA5C"],
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 1,
          opacityTo: 0.1,
          stops: [0, 100],
        },
      },
      markers: {
        hover: {
          size: 8,
          strokeWidth: 4,
          colors: ["#ffffff"],
          strokeColors: ["#51CCA9"],
        },
      },
      xaxis: {
        axisTicks: {
          show: true,
        },
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yaxis: {
        show: true,
        opposite: false,
        labels: {
          formatter: function (value) {
            return "$" + value;
          },
        },
      },
      legend: {
        horizontalAlign: "left",
      },
    };

    var investChart = document.getElementById("investmentChart");
    if (investChart != null) {
      var chartInvest = new ApexCharts(
        document.querySelector("#investmentChart"),
        investmentOptions
      );
      chartInvest.render();
    }

    // card content slider
    $(".card-content-slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: $('.slick-slider-dots'),
        pauseOnHover: true,
        pauseOnFocus: true,
      });

          // investment chart two
    var investmentOptionsTwo = {
      colors: ["#1FAA5C"],
      chart: {
        type: "area",
        height: 530,
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: false,
        },
      },
      series: [
        {
          name: "Invested",
          data: [400, 350, 300, 250, 300, 150, 200],
        },
      ],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      fill: {
        type: "gradient",
        colors: ["#1FAA5C"],
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 1,
          opacityTo: 0.1,
          stops: [0, 100],
        },
      },
      markers: {
        hover: {
          size: 8,
          strokeWidth: 4,
          colors: ["#ffffff"],
          strokeColors: ["#51CCA9"],
        },
      },
      xaxis: {
        axisTicks: {
          show: true,
        },
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yaxis: {
        show: true,
        opposite: false,
        labels: {
          formatter: function (value) {
            return "$" + value;
          },
        },
      },
      legend: {
        horizontalAlign: "left",
      },
      responsive: [{
        breakpoint: 767,
        options: {
          chart: {
            maxWidth: '100%',
            height: 250,
            sparkline: {
              enabled: false
            }
          },
        },
    }]
    };

    var investChartTwo = document.getElementById("investmentChartTwo");
    if (investChartTwo != null) {
      var chartInvestTwo = new ApexCharts(
        document.querySelector("#investmentChartTwo"),
        investmentOptionsTwo
      );
      chartInvestTwo.render();
    }

    // select payment method
    $("#methodSelect").niceSelect();
  });
})(jQuery);
