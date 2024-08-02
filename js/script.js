const hamburger = document.querySelector("#hamburger-menu");
const close = document.querySelector("#close-menu");
const nav = document.querySelector("#nav-menu");

// kode untuk menurunkan menu tampilan mobile
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hidden");
  nav.classList.toggle("-translate-y-full");
  close.classList.toggle("hidden");
});

// kode untuk menaikan menu tampilan mobile
close.addEventListener("click", () => {
  hamburger.classList.toggle("hidden");
  nav.classList.toggle("-translate-y-full");
  close.classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
      delay: 3000, // Delay between transitions (in ms)
      disableOnInteraction: false, // Continue autoplay after interactions
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    allowTouchMove: false, // Disable swiping/dragging
  });
});
