module.exports = function () {

  const subscription = document.querySelectorAll('.profile-body__subscription-row');

  if (subscription) {
    for (let i = 0; i < subscription.length; i++) {
      SubscriptionScale(subscription[i]);
    }
  }

  function SubscriptionScale(el) {
    const finishVal = +el.getAttribute('data-finish');
    const currentVal = +el.getAttribute('data-current');
    const scale = el.querySelector('.profile-body__subscription-row-scale')
    const scaleWidth = currentVal * (100 / finishVal);
    const scaleLabel = el.querySelector('.profile-body__subscription-row-label');

    scale.style.width = scaleWidth + '%';

    scaleLabel.innerHTML += currentVal + 'days';
    scaleLabel.style.left = scaleWidth + '%';
  }

};