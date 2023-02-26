module.exports = function () {

  $('input[type="file"]').on('change', function () {
    const wrap = $(this).parents(' .download');
    const placeholder = $(wrap).find('.download__input-placeholder');
    const fileName = $(wrap).find('.download__input-filename');
    const iconStart = $(wrap).find('.download__icon-start');
    const iconSuccess = $(wrap).find('.download__icon-success');
    const deleteBtn = $(wrap).find('.download__clear-btn');

    if (this.value) {
      let fileNameVal = $(this).val().split('/').pop().split('\\').pop();

      $(placeholder).fadeOut(0);
      $(iconStart).fadeOut(0);

      $(iconSuccess).fadeIn();
      $(deleteBtn).fadeIn();
      $(fileName).text(fileNameVal).fadeIn();
    }
  })

  //clear
  $('.download__clear-btn').on('click', function () {
    const wrap = $(this).parents('.download');
    const fileName = $(wrap).find('.download__input-filename');
    const inputFile = $(wrap).find('input');
    const placeholder = $(wrap).find('.download__input-placeholder');
    const iconStart = $(wrap).find('.download__icon-start');
    const iconSuccess = $(wrap).find('.download__icon-success');

    $(this).fadeOut();
    $(iconSuccess).fadeOut(0);
    $(fileName).fadeOut(0);
    $(inputFile).val('');

    $(placeholder).fadeIn();
    $(iconStart).fadeIn();
  })


};