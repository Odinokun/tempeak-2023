module.exports = function () {

  $('#burger input').on('click', function () {
    $('#main-menu').toggleClass('active')
  });

  $('.user-ava__img').on('click', function () {
    $('#second-menu').toggleClass('active')
  });

};