module.exports = function () {

  // $('.popup-open').on('click', function(e) {
  //   e.preventDefault();
  //
  //   let targetPopup = '#' + $(this).data('popup');
  //   $(targetPopup + ', #popup__layer').fadeIn();
  // });
  //
  // $('#popup__layer, .popup__close').on('click', function() {
  //   $('.popup, #popup__layer').fadeOut();
  // });

  $('#callback-btn').on('click', function (e) {
    e.preventDefault();

    $('#direct-popup').fadeIn();
    $('body').addClass('hide-scroll');
  });

  $('.direct__close').on('click', function () {
    $('#direct-popup').fadeOut();
    $('body').removeClass('hide-scroll');
  });

};