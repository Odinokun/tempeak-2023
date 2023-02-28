module.exports = function () {

  $('.ad-banner__close').on('click', function (e) {
    e.preventDefault();
    $('.ad-banner').fadeOut();
  });

  $('.profile-ad__close').on('click', function (e) {
    e.preventDefault();
    $(this).parent('.profile-ad').fadeOut();
  });

  $('.banner__close').on('click', function (e) {
    e.preventDefault();
    $('.banner').fadeOut();
  });

};