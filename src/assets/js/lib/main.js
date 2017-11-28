import $ from 'jquery';

// Navigation dropdown closes when scrolling
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $('.global-nav').addClass('shrink');
  } else {
    	$('.global-nav').removeClass('shrink');
    }
});