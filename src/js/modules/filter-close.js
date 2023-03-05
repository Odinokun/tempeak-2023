module.exports = function () {

  $('.filter-mob-btn').on('click', function (e) {
    e.preventDefault();
    $('#filter').fadeIn();
    $('body').addClass('hide-scroll');
  });

  $('.filter-close-btn').on('click', function () {
    closePopups();
  });

  function closePopups() {
    $('#filter').fadeOut();
    $('body').removeClass('hide-scroll');
  }

};