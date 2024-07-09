const swiper = new Swiper('.slider-wrapper', {
     loop: true,
     grabCursor: true,
     spaceBetween: 30,

     // Pagination bullets
     pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
     },

     // Responsive breakpoints
     breakpoints: {
          0: {
               slidesPerView: 1
          },
          740: {
               slidesPerView: 3
          },
          1024: {
               slidesPerView: 4
          },
          1200: {
               slidesPerView: 5
          }
     }
});