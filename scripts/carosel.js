$(function(){
    $('.carousel').slick({
        slidesToShow: 3,
        dots:true,
        centerMode: true,
        autoplay:true,
        autoplaySpeed: 1000,
    });
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
      });
  });
