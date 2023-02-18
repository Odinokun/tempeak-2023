module.exports = function () {

  const scrollUp = document.getElementById('scrollUp');

  if (scrollUp) {
    scrollUp.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    })
  }


};