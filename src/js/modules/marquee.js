module.exports = function () {

  const marqueeLeft = $('.about-run-text__left .marquee');
  const marqueeRight = $('.about-run-text__right .marquee');

  $(marqueeLeft).marquee({
    duration: 150000,
    gap: 0,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    startVisible: true
  });

  $(marqueeRight).marquee({
    duration: 150000,
    gap: 0,
    delayBeforeStart: 0,
    direction: 'right',
    duplicated: true,
    startVisible: true
  });

};