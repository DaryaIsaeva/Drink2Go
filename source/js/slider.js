const slider = document.querySelector('.slider');

const sliderList = slider.querySelector('.slider__list')

const buttonSliderPrev = slider.querySelector('.slider__button--prev');
const buttonSliderNext = slider.querySelector('.slider__button--next');

const slides = slider.querySelectorAll('.slider__item');

const paginationButtons = slider.querySelectorAll('.slider__pagination-button');

let i = 0;

const switchNextSlide = () => {
  buttonSliderPrev.removeAttribute('disabled');

  ++i;
  slides[i-1].classList.remove('slider__item--current');
  paginationButtons[i-1].classList.remove('slider__pagination-button--current');
  slides[i].classList.add('slider__item--current');
  paginationButtons[i].classList.add('slider__pagination-button--current');

  if (i === slides.length-1) {
    buttonSliderNext.setAttribute('disabled', '');
  }
};

const switchPrevSlide = () => {
  buttonSliderNext.removeAttribute('disabled');

  buttonSliderPrev.removeAttribute('disabled');
  slides[i].classList.remove('slider__item--current');
  paginationButtons[i].classList.remove('slider__pagination-button--current');
  slides[i-1].classList.add('slider__item--current');
  paginationButtons[i-1].classList.add('slider__pagination-button--current');
  i--;

  if (i === 0) {
    buttonSliderPrev.setAttribute('disabled', '');
  }
};

buttonSliderNext.addEventListener('click', switchNextSlide);

buttonSliderPrev.addEventListener('click', switchPrevSlide);

paginationButtons.forEach((button, index) => {
  button.addEventListener('click', (evt) => {
    for (let slide of slides) {
      slide.classList.remove('slider__item--current');
    };
    slides[index].classList.add('slider__item--current');

    for (let button of paginationButtons) {
      button.classList.remove('slider__pagination-button--current');
    };

    evt.target.classList.add('slider__pagination-button--current');

    if (index === paginationButtons.length - 1) {
      buttonSliderNext.setAttribute('disabled', '');
    } else {
      buttonSliderNext.removeAttribute('disabled');
    };

    if (index === 0) {
      buttonSliderPrev.setAttribute('disabled', '');
    } else {
      buttonSliderPrev.removeAttribute('disabled');
    }

    i = index;
  });
});
