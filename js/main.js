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

gsap.to('.quick-img', 1.5, {
  delay: 0.5,
  y: 15, 
  repeat: -1, 
  yoyo: true,
  ease: Power1.easeInout 
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

const totopEl = document.querySelector('#to-top');
totopEl.addEventListener('click',function () {
  gsap.to(window,0.6,{
    scrollTo: 0 
  });
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 500) {
    gsap.to(totopEl, 0.6, {
      opacity:1,
      x: 0
    });
  } else {
    gsap.to(totopEl, 0.6, {
      opacity: 0,
      x: 100 
    });
  }
});  