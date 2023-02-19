module.exports = function () {

  $('.input input').on('keyup', function () {
    const targetParent = $(this).parent('.input');

    if (this.value.length > 0) {
      $(targetParent).addClass('active');
    } else {
      $(targetParent).removeClass('active');
    }
  })

  $('.textarea textarea').on('keyup', function () {
    const targetParent = $(this).parent('.textarea');

    if (this.value.length > 0) {
      $(targetParent).addClass('active');
    } else {
      $(targetParent).removeClass('active');
    }
  })

};