const choosePrice = document.querySelector('.choose-price');
const choosePriceSlider = choosePrice.querySelector('.choose-price__slider');
const minPrice = choosePrice.querySelector('#min-price');
const maxPrice = choosePrice.querySelector('#max-price');

const resetButton = document.querySelector('.form__button--reset');

noUiSlider.create(choosePriceSlider, {
    start: [0, 900],
    connect: true,
    step: 1,
    range: {
        'min': [0],
        'max': [1000]
    }
});

const snapValues = [minPrice, maxPrice];

const updateSliderOptions = () => {
  choosePriceSlider.noUiSlider.updateOptions({
    start: [minPrice.value, maxPrice.value],
  });
}

choosePriceSlider.noUiSlider.on('update', (values, handle) => {
  snapValues[handle].value = parseInt(values[handle]);
});

minPrice.addEventListener('change', updateSliderOptions);

maxPrice.addEventListener('change', updateSliderOptions);

resetButton.addEventListener('click', () => {
  choosePriceSlider.noUiSlider.updateOptions({
    start: [0, 900],
  });
})
