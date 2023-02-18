module.exports = function () {

  $('.faq-questions__header').on('click', function () {
    const activeBody = $(this).next('.faq-questions__body');

    if ($(this).hasClass('active')) {
      $('.faq-questions__header').removeClass('active');
      $('.faq-questions__body').slideUp();
    } else {
      $('.faq-questions__header').removeClass('active');
      $('.faq-questions__body').slideUp();

      $(this).addClass('active');
      $(activeBody).slideDown();
    }
  })

};