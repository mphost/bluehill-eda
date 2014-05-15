jQuery(function( $ ){

	$(".header-container").after('<div class="bumper"></div>');

	$(window).scroll(function () {
	  if ($(document).scrollTop() > 1 ) {
	    $('.header-container').addClass('shrink');
	  } else {
	    $('.header-container').removeClass('shrink');
	  }
	});
    
     
	
});