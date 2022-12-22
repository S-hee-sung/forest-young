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
  delay: 0.5, // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간
  y: 15, // 수직으로 얼마나 움직일지 설정
  repeat: -1, // 몇 번 반복할지 설정, -1은 무한 반복
  yoyo: true, // 한 번 재생된 것을 다시 뒤로 재생
  ease: Power1.easeInout // Easing 함수 적용
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