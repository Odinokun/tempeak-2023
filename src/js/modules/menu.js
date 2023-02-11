module.exports = function () {
  $('#burger input').on('click', function () {
    $('#header').toggleClass('active')
  });
};