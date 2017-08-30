// Popup
$(document).ready(function(){
    $('.popup-open').click(function() {
   		$('.popup-box').css({'top': $(window).scrollTop() +20 }).addClass('active');
    	$('.popup-bg').fadeIn();
    	$('.popup-bg').click(function() {
    		$('.popup-box').removeClass('active');
    		$('.popup-bg').fadeOut();
    	})
      $('.popup-close').click(function() {
        $('.popup-box').removeClass('active');
        $('.popup-bg').fadeOut();
      })
  	});
  	$(window).scroll(function() {
  		$('.popup-box').css({'top': $(window).scrollTop() +20})
  	}).scroll();
});

// Scroll
$(document).ready(function(){
  $("a[href*=#]").bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 500);
    e.preventDefault();
    return false;
  });
});

// Slick
$(document).ready(function(){
  $('.portfolio-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // centerMode: true,
    centerPadding: '60px',
    focusOnSelect: true,
    dots: true,
    prevArrow: '<i class="portfolio-btn portfolio-btn-left" aria-hidden="true"></i>',
    nextArrow: '<i class="portfolio-btn portfolio-btn-right" aria-hidden="true"></i>',
  });
});

//Toggler
$(document).ready(function(){
  $("#toggler-init").click(function(){
      $("#toggler-item").slideToggle(600);
  });
  $('#toggler-up1').click(function(){
      $("#toggler-item").slideToggle(300);
  });
  $('#toggler-up2').click(function(){
      $("#toggler-item").slideToggle(300);
  });
  $('#toggler-up3').click(function(){
      $("#toggler-item").slideToggle(300);
  });
  $('#toggler-up4').click(function(){
      $("#toggler-item").slideToggle(300);
  });
  $('#toggler-up5').click(function(){
      $("#toggler-item").slideToggle(300);
  });
}); 

