const button = document.querySelector('.hamburger')
const navigation = document.querySelector('.header__navigation')

button.addEventListener('click', ()=> {
    button.classList.toggle("is-active");
    navigation.classList.toggle("header__navigation--active");
})