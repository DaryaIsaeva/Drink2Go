const navigation = document.querySelector('.navigation');
const navigationToggle = navigation.querySelector('.navigation__toggle');

navigation.classList.remove('navigation--no-js');

navigationToggle.addEventListener('click', () => {
  navigation.classList.toggle('navigation--closed');
})
