$(document).ready(function() {
  $('.cta').on('click',function(e){
    e.preventDefault();
    $('.overlay').addClass('is-open');
    return false;
  });

  $('.close-btn').on('click',function(e){
    e.preventDefault();
    $('.overlay').removeClass('is-open');
  });
});
