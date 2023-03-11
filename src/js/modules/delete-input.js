module.exports = function () {

  $('#delete-input input').on('keyup', function () {
    const btn = $('#delete-btn');

    if (this.value === "DELETE") {
      $(btn).attr("data-dis", '');
    } else {
      $(btn).attr("data-dis", 'true');
    }
  })

};