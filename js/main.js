
$(document).ready(function(){
  $('.block-carousel').slick({
    dots: true,
    arrows: false
  });

  $('#nextContent').click(function(){
    $('.block-about-table__list_next').fadeIn();
    $('#nextContent').fadeOut();
  });
  $('.menu-burger').click(function() {
    this.classList.toggle('menu-burger__active');
    let menu_block = document.querySelector('.menu-burger-list');
    if (this.classList.contains('menu-burger__active')) {
      menu_block.classList.add('popup__active');
    } else {
      menu_block.classList.remove('popup__active');
    }
  });
});