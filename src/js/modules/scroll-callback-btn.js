module.exports = function () {


  $(window).on('scroll', function () {
    callbackBtnAnim();
  });
  $(window).on('load', function () {
    callbackBtnAnim();
  });

  let element = $('#callback-btn');

  function callbackBtnAnim() {
    if ($(element).length > 0) {
      const scroll = $(window).scrollTop();

      if (scroll < 200) {
        element.removeClass('scroll');
      } else {
        element.addClass('scroll');
      }
    }
  }

};