const nav_menu = document.querySelector('.nav_menu');
const nav_btn = document.querySelector('.nav_toggle');

nav_btn.onclick= () =>{
    nav_menu.classList.toggle('active');
}

var swiper = new Swiper(".testimonial_list", {
    centeredSlides: true,
    breakpoints: {
        576: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
      },
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
  });

  /*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
  const header = document.getElementById('header')
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)







 $(document).ready(function () {
  var swiper = new Swiper(".agenda_container ", {
    autoplay: {
      delay: 7700,
      disableOnInteraction: false
    },
    speed: 1000,
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev"
    },
    on: {
      init: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("animate");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionStart: function () {
        $(".swiper-progress-bar").removeClass("animate");
        $(".swiper-progress-bar").removeClass("active");
        $(".swiper-progress-bar").eq(0).addClass("active");
      },
      slideChangeTransitionEnd: function () {
        $(".swiper-progress-bar").eq(0).addClass("animate");
      }
    }
  });
});







  /*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  distance: '60px',
  duration: 2800,
  // reset: true,
})


sr.reveal(`.home_header, .home_content, .home__info,
         .about,
         .testimonial_titles, .navigation, .testimonial_list,
         .agenda`,{
  origin: 'top',
  interval: 100,
})

sr.reveal(`.prize_content, 
         .round_item,
         .awards_left,
         .footer_card`,{
  origin: 'left',
})


sr.reveal(`.prize_list, 
         .attendance_wrapper,
         .round_item.bottom,
         .awards_right,
         .footer_card.bottom`,{
  origin: 'right',
  interval: 100,
})
