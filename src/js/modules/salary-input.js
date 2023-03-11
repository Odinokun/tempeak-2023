module.exports = function () {

  $('.ui-single-slider-input input').on('keyup', function () {
    let targetVal = $(this).val();
    let value = targetVal.replace('$', '').trim();
    $(this).val('$ ' + value)
  })

};