module.exports = function () {

  $('.banner__close').on('click', function (e) {
    e.preventDefault();
    $('.banner').fadeOut();
  });

};