$(document).ready(function() {
  var $texts = $('.text');
  var currentIndex = 0;

  $('.spotlight:not(.textlink)').hover(
    function() {
      currentIndex = $('.spotlight:not(.textlink)').index(this);
      $texts.removeClass('active');
      $texts.eq(currentIndex).addClass('active');
    },
    function() {
      $texts.removeClass('active');
      $texts.eq(currentIndex).addClass('active');
    }
  );
});