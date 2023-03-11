module.exports = function () {

  // ***************** DOUBLE CALENDAR *****************
  const calendarInput =  $('.calendar-input input');

  $(calendarInput).daterangepicker({
    timePicker: true,
    autoUpdateInput: false,
    locale: {
      format: 'DD MMM',
      "separator": " - ",
      "daysOfWeek": [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
      ],
      "monthNames": [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
    }
  });

  $(calendarInput).on('apply.daterangepicker', function (ev, picker) {
    const targetParent = $(this).parent('.input');
    $(targetParent).addClass('active');

    // $(this).val(picker.startDate.format('hh:mm A') + ' - ' + picker.endDate.format('DD MMM'));
    $(this).val(picker.startDate.format('DD MMM hh:mm A') + ' - ' + picker.endDate.format('DD MMM hh:mm A'));
  });



  // ***************** TIME CALENDAR *****************
  const calendarTimeInput =  $('.calendar-time-input input');

  $(calendarTimeInput).daterangepicker({
    timePicker: true,
    showDropdowns: false,
    applyButtonClasses: 'applyBtn btn btn-sm btn-primary calendar-time-input-btn',
    autoUpdateInput: false,
    locale: {
      format: 'DD MMM',
      "separator": " - ",
      "daysOfWeek": [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
      ],
      "monthNames": [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
    }
  });

  $(calendarTimeInput).on('show.daterangepicker', function (ev, picker) {
    $('.calendar-time-input-btn').parents('.daterangepicker').addClass('calendar-time-input-date');
  });

  $(calendarTimeInput).on('apply.daterangepicker', function (ev, picker) {
    const targetParent = $(this).parent('.input');
    $(targetParent).addClass('active');

    $(this).val(picker.startDate.format('hh:mm A') + ' - ' + picker.endDate.format('hh:mm A'));
  });



  // ***************** SINGLE CALENDAR *****************
  const calendarGraduation =  $('.calendar-input-single input');

  $(calendarGraduation).daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    minYear: 1901,
    maxYear: parseInt(moment().format('YYYY'),10),
    autoUpdateInput: false,
    locale: {
      format: 'DD MMM',
      "separator": " - ",
      "daysOfWeek": [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
      ],
      "monthNames": [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
    }
  });

  $(calendarGraduation).on('apply.daterangepicker', function (ev, picker) {
    const targetParent = $(this).parent('.input');
    $(targetParent).addClass('active');

    $(this).val(picker.startDate.format('DD MMMM YYYY'));
  });

};