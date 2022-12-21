const headEl = document.querySelector('header');
const mainMenuEl = document.querySelector('.main-menu');
const subMenuEl = document.querySelectorAll('.sub-menu')

mainMenuEl.addEventListener('mouseover', function () {
  headEl.style.height = '400px';

subMenuEl.forEach(function (subMenuEl) {
    subMenuEl.style.opacity = '1'   
    subMenuEl.style.visibility = 'visible'   
  })    
});

headEl.addEventListener('mouseleave', function () {
  headEl.style.height = '100px';

  subMenuEl.forEach(function (subMenuEl) {
    subMenuEl.style.opacity = '0';
    subMenuEl.style.visibility = 'hidden';
  });
})

new Swiper('.slider .swiper', {
  direction: 'horizontal', 
  loop: true, 
  autoplay: true,
  pagination: {
    el: '.slider .swiper-pagination',
    clickable: true,
  },    
});

new Swiper('.swiper_3', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  }
});