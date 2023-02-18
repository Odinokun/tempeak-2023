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

};