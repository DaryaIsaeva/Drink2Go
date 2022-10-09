const select = document.querySelector('.castom-select');
const selectInput = select.querySelector('.castom-select__value');
const selectList = select.querySelector('.castom-select__list');
const selectItems = select.querySelectorAll('.castom-select__item');

selectInput.addEventListener('click', () => {
  select.classList.toggle('castom-select--active');
});

selectItems.forEach((item) => {
  item.addEventListener('click', (evt) => {
    for (let item of selectItems) {
      item.classList.remove('castom-select__item--current');
    };

    evt.target.classList.add('castom-select__item--current');

    selectInput.value = evt.target.textContent;
  })
});

document.addEventListener('click', (evt) => {
  if (!(evt.target == selectList) && !(evt.target == selectInput) && select.classList.contains('castom-select--active')) {
    select.classList.toggle('castom-select--active');
  }
})
