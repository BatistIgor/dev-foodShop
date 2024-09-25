const button = document.querySelector('.hamburger')
const navigation = document.querySelector('.header__navigation')

button.addEventListener('click', ()=> {
    button.classList.toggle("is-active");
    navigation.classList.toggle("header__navigation--active");
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".menu__button-next",
        prevEl: ".menu__button-prev",
    },
    breakpoints: {
        1275: {
          slidesPerView: 3, 
        },
        992: {
          slidesPerView: 2, 
        },
        860: {
          slidesPerView: 1, 
        },
        0: {
          slidesPerView: 1,
        }
  }
  });

  var swiper = new Swiper(".coments-swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

new WOW().init();