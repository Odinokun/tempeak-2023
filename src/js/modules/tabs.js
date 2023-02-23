module.exports = function () {

  //begin HOW IT WORKS
  $('.faq-header__item').on('click', function (e) {
    e.preventDefault();
    const activeVal = $(this).data('tab');

    $('.faq-header__item').removeClass('active');
    $('.faq-questions').fadeOut(0);

    $(this).addClass('active');
    $('#faq-questions--' + activeVal).fadeIn();

  })
  //end HOW IT WORKS

  //begin DIRECTIONS
  $('.direct-tabs__item').on('click', function (e) {
    e.preventDefault();
    const activeVal = $(this).data('tab');

    $('.direct-tabs__item').removeClass('active');
    $('.direct-form').fadeOut(0);

    $(this).addClass('active');
    $('#direct-form--' + activeVal).fadeIn();
  })
  //end DIRECTIONS

  //begin SIGN UP
  $('.sign-up-tabs__item').on('click', function (e) {
    e.preventDefault();
    const activeVal = $(this).data('tab');

    $('.main-wrap').removeClass('main-wrap--contractor, main-wrap--business');
    $('.sign-up-tabs__item').removeClass('active');
    $('.sign-up-form').fadeOut(0);

    $(this).addClass('active');
    $('.main-wrap').addClass('main-wrap--' + activeVal);
    $('#sign-up-form--' + activeVal).fadeIn();
  })
  //end SIGN UP

};