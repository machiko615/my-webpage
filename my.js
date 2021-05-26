const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    speed: 2000,
    slidesPerView:'1',
    breakpoints: {
        768: {
          slidesPerView: 1
        },
        769: {
          slidesPerView: 1.5
        },
        1000: {
          slidesPerView: 2.5
        },
    },
    spaceBetween: 10,

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
		el: '.swiper-scrollbar',
		hide: false,
		draggable: true
    },
    autoplay: {
		delay: 1000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
    
  });
