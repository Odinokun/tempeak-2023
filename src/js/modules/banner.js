module.exports = function () {

  $('.ad-banner__close').on('click', function (e) {
    e.preventDefault();
    $('.ad-banner').fadeOut();
  });

  $('.banner__close').on('click', function (e) {
    e.preventDefault();
    $('.banner').fadeOut();
  });

};