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







 
  jQuery(document).ready(function ($) {
    let autoPlayDelay = 8000;
  
    let options = {
      init: true,
      // Optional parameters
      loop: false,
  
      autoplay: {
        delay: 8000,
      },
  
    };
  

    
    let mySwiper = new Swiper(".agenda_container", options);
    let slidersCount = mySwiper.params.loop
      ? mySwiper.slides.length - 10
      : mySwiper.slides.length;
    let widthParts = 100 / slidersCount;
  
    // $(".swiper-counter .total").html(slidersCount);
    // for (let i = 0; i < slidersCount; i++) {
    // 	$(".swiper-progress-bar .progress-sections").append("<span></span>");
    // }
  
    function initProgressBar() {
      let calcProgress =
        (slidersCount - 1) * (autoPlayDelay + mySwiper.params.speed);
      calcProgress += autoPlayDelay;
      $(".swiper-progress-bar .progress").animate(
        {
          width: "100%"
        },
        calcProgress,
        "linear"
      );
    }
  
    initProgressBar();
  
    mySwiper.on("slideChange", function () {
      let progress = $(".swiper-progress-bar .progress");
  
      $(".swiper-counter .current").html(this.activeIndex + 1);
  
      if (
        (this.progress == -0 || (this.progress == 1 && this.params.loop)) &&
        !progress.parent().is(".stopped")
      ) {
        progress.css("width", "0");
        if (this.activeIndex == 0) {
          initProgressBar();
        }
      }
  
      if (progress.parent().is(".stopped")) {
        progress.animate(
          {
            width: Math.round(widthParts * (this.activeIndex + 1)) + "%"
          },
          this.params.speed,
          "linear"
        );
      }
    });
  
    mySwiper.on("touchMove", function () {
      $(".swiper-progress-bar .progress").stop().parent().addClass("stopped");
    });
  });
  

  /*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  distance: '60px',
  duration: 3800,
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
