module.exports = function () {

  $('.popup-open-btn').on('click', function (e) {
    e.preventDefault();
    let targetPopup = '#' + $(this).data('popup');

    $(targetPopup).fadeIn();
    $('body').addClass('hide-scroll');
  });

  $('.popup-close-btn').on('click', function () {
    closePopups();
  });

  document.addEventListener("keydown", (event) => {
    if (event.code === 'Escape') {
      closePopups();
    }
  });

  function closePopups() {
    $('.popup').fadeOut();
    $('body').removeClass('hide-scroll');
  }

};