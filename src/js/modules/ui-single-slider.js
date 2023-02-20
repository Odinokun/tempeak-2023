module.exports = function () {

  const sliders = $(".ui-single-slider");

  if (sliders) {
    for (let i = 0; i < sliders.length; i++) {
      $(sliders[i]).slider({
        range: "min",
        value: $(sliders[i]).data('value'),
        max: $(sliders[i]).data('max'),
        create: function () {
          const handle = $(this).find(".ui-single-slider__handle");
          const maxVal = $(this).find(".ui-single-slider__max");
          handle.text("$" + $(this).slider("value"));
          maxVal.text("$" + $(this).data("max"));
        },
        slide: function (event, ui) {
          const handle = $(this).find(".ui-single-slider__handle");
          handle.text("$" + ui.value);
        }
      });
    }
  }

};