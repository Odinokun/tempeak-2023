module.exports = function () {

  const rating = document.querySelectorAll('.rating');

  if (rating) {
    for (let i = 0; i < rating.length; i++) {
      RatingScale(rating[i]);
    }
  }

  function RatingScale(el) {
    const rating = +el.getAttribute('data-rating')
    const scale = el.querySelector('.rating__scale-bg')
    const scaleWidth = rating / 0.05;

    scale.style.width = scaleWidth + '%'
  }

};