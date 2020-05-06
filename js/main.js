
$(document).ready(function(){
  $('.block-carousel').slick({
    dots: true,
    arrows: false
  });

  $('#nextContent').click(function(){
    $('.block-about-table__list_next').fadeIn();
    $('#nextContent').fadeOut();
  });
});