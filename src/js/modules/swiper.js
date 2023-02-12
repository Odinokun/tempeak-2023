module.exports = function () {
  function TypeText() {
    const text = document.querySelector('#index-personal__slider .swiper-slide-visible .index-personal__slider-title--visible')
    const textValue = text.getAttribute('data-text');

    const options = {
      strings: [textValue],
      typeSpeed: 40,
      startDelay: 500,
      onComplete: (self) => {
        const descr = document.querySelector('#index-personal__slider .swiper-slide-visible .index-personal__descr')
        descr.classList.add('active')
      },
    };
    const typed = new Typed('#index-personal__slider .swiper-slide-visible .index-personal__slider-title--visible span', options);
  }

  function TypeTextCleaner() {
    const textBlockPrev = document.querySelector('#index-personal__slider .swiper-slide-prev .index-personal__slider-title--visible span')
    const textBlockNext = document.querySelector('#index-personal__slider .swiper-slide-next .index-personal__slider-title--visible span')
    if (textBlockPrev) {
      textBlockPrev.innerHTML = '';
    }
    if (textBlockNext) {
      textBlockNext.innerHTML = '';
    }
    const textBlockPrevCursor = document.querySelector('#index-personal__slider .swiper-slide-prev .typed-cursor')
    const textBlockNextCursor = document.querySelector('#index-personal__slider .swiper-slide-next .typed-cursor')
    if (textBlockPrevCursor) {
      textBlockPrevCursor.remove();
    }
    if (textBlockNextCursor) {
      textBlockNextCursor.remove();
    }
    const descr = document.querySelector('#index-personal__slider .swiper-slide-visible .index-personal__descr')
    descr.classList.remove('active')
  }

  const indexPersonalThumb = new Swiper("#index-personal__slider-thumb", {
    slidesPerView: 3,
    spaceBetween: 20,
  });

  const indexPersonal = new Swiper("#index-personal__slider", {
    thumbs: {
      swiper: indexPersonalThumb,
    },
    effect: "fade",
    autoplay: {
      delay: 10000,
      disableOnInteraction: false
    },
    loop: true,
    watchSlidesProgress: true,
    on: {
      slideChange: function () {
        TypeTextCleaner();
        TypeText();
      }
    },
  });

  const jobsSlider = new Swiper('#jobs-slider', {
    loop: true,
    spaceBetween: 20,
    grabCursor: true,
    slidesPerView: 1.1,
    centeredSlides: false,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },
    breakpoints: {
      576: {
        slidesPerView: 1.2,
      },
      768: {
        slidesPerView: 2.2,
      },
      992: {
        slidesPerView: 4,
      }
    }
  });


  // const whyWeSlider = new Swiper('#why-we-slider', {
  //   spaceBetween: 20,
  //   grabCursor: false,
  //   slidesPerView: 'auto',
  //   freeMode: true,
  //   freeModeMomentum: false,
  //   loop: true,
  //   speed: 4000,
  //   mousewheelControl: false,
  //   keyboardControl: false,
  //   autoplay: {
  //     delay: 1,
  //     disableOnInteraction: true
  //   },
  // });
  //
  // const reviewSlider = new Swiper('#review-slider', {
  //   loop: true,
  //   spaceBetween: 20,
  //   grabCursor: true,
  //   slidesPerView: 1.1,
  //   centeredSlides: false,
  //   autoplay: {
  //     delay: 3000,
  //     pauseOnMouseEnter: true,
  //     disableOnInteraction: false,
  //   },
  //   breakpoints: {
  //     576: {
  //       spaceBetween: 40,
  //       slidesPerView: 1.2,
  //     },
  //     768: {
  //       spaceBetween: 40,
  //       slidesPerView: 2.2,
  //     },
  //     992: {
  //       centeredSlides: true,
  //       spaceBetween: 20,
  //       slidesPerView: 3,
  //     }
  //   }
  // });
  //
  // const teamSlider = new Swiper('#team-slider', {
  //   loop: true,
  //   spaceBetween: 20,
  //   grabCursor: true,
  //   slidesPerView: 1.1,
  //   autoplay: {
  //     delay: 3000,
  //     pauseOnMouseEnter: true,
  //     disableOnInteraction: false,
  //   },
  //   breakpoints: {
  //     576: {
  //       slidesPerView: 2,
  //     },
  //     768: {
  //       slidesPerView: 3,
  //     },
  //     1200: {
  //       slidesPerView: 4,
  //     }
  //   }
  // });
  //
  //
  // const thankSlider1 = new Swiper('#thank-slider-01', {
  //   spaceBetween: 10,
  //   grabCursor: false,
  //   slidesPerView: 'auto',
  //   freeMode: true,
  //   freeModeMomentum: true,
  //   loop: true,
  //   speed: 6000,
  //   mousewheelControl: false,
  //   keyboardControl: false,
  //   autoplay: {
  //     delay: 1,
  //     disableOnInteraction: true
  //   },
  //   breakpoints: {
  //     768: {
  //       direction: "vertical",
  //     }
  //   }
  // });
  //
  // const thankSlider2 = new Swiper('#thank-slider-02', {
  //   spaceBetween: 10,
  //   grabCursor: false,
  //   slidesPerView: 'auto',
  //   freeMode: true,
  //   freeModeMomentum: true,
  //   loop: true,
  //   speed: 6000,
  //   mousewheelControl: false,
  //   keyboardControl: false,
  //   autoplay: {
  //     delay: 1,
  //     disableOnInteraction: true,
  //     reverseDirection: true
  //   },
  //   breakpoints: {
  //     768: {
  //       direction: "vertical",
  //     }
  //   }
  // });
  //
  // const aboutSlider = new Swiper('#about-slider', {
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   spaceBetween: 20,
  //   slidesPerView: 1,
  // });

};