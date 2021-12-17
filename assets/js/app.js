$('.slider__block').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    dots:true,
    nextArrow: '<button type="button" class="slick-next"><img src="assets/IMG/arrow.svg"></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="assets/IMG/arrow-prew.svg"></button>'
});
$('.content__slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    dots:false,
    nextArrow: '<button type="button" class="slick-next"><img src="assets/IMG/arrow.svg"></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="assets/IMG/arrow-prew.svg"></button>'
});
$('.atraction__slider').slick({
    infinite:true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:true,
    dots:false,
    nextArrow: '<button type="button" class="slick-next"><img src="assets/IMG/arrow.svg"></button>',
    prevArrow: '<button type="button" class="slick-prev"><img src="assets/IMG/arrow-prew.svg"></button>',
    responsive: [
        {
            breakpoint: 1440,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
                    }
        },
        {
          breakpoint: 850,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
                  }
      },
                ]
});
$('.price__slider').slick({
    infinite:true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    dots:true,
});

let burger = $("#burger");
let menu = $("#menu");

burger.on("click", function(event){
    event.preventDefault();
    menu.toggleClass("visible");
    burger.toggleClass("burger__crest");
});
//Скроллл.....................
// variables
var $header_top = $('.header-top');
var $nav = $('nav');
// toggle menu 
$header_top.find('a').on('click', function() {
  $(this).parent().toggleClass('open-menu');
});
// fullpage customization
$('#fullpage').fullpage({
  sectionSelector: '.vertical-scrolling',
  slideSelector: '.horizontal-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection','sixedSection'],
  menu: '#menu',

  afterLoad: function(anchorLink, index) {
    $header_top.css('background', 'rgba(0, 47, 77, .3)');
    $nav.css('background', 'rgba(0, 47, 77, .25)');
    if (index == 5) {
        $('#fp-nav').hide();
      }
  },

  onLeave: function(index, nextIndex, direction) {
    if(index == 5) {
      $('#fp-nav').show();
    }
  },

  afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(false, 'up');
      $header_top.css('background', 'transparent');
      $nav.css('background', 'transparent');
      $(this).css('background', '#374140');
      $(this).find('h2').css('color', 'white');
      $(this).find('h3').css('color', 'white');
      $(this).find('p').css(
        {
          'color': '#DC3522',
          'opacity': 1,
          'transform': 'translateY(0)'
        }
      );
    }
  },

  onSlideLeave: function( anchorLink, index, slideIndex, direction) {
    if(anchorLink == 'fifthSection' && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(true, 'up');
      $header_top.css('background', 'rgba(0, 47, 77, .3)');
      $nav.css('background', 'rgba(0, 47, 77, .25)');
    }
  } 
});