$(document).ready(function () {
  const isMobile = window.innerWidth < 768;

  $("#owl-carousel").owlCarousel({
    // loop: isMobile,                          
    margin: 20,
    dots: false,
    nav: true,
    autoplay: isMobile,             
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
     navText: [
'<i class="fa fa-arrow-left"></i>',
'<i class="fa fa-arrow-right"></i>'
  ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
});
