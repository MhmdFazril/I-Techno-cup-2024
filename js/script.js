const hamburger = document.querySelector("#hamburger-menu");
const close = document.querySelector("#close-menu");
const nav = document.querySelector("#nav-menu");
const menuItemsDesktop = document.querySelectorAll('.menu-item[id^="desktop"]');
const menuItemsMobile = document.querySelectorAll('.menu-item[id^="mobile"]');

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
      delay: 3000,
      disableOnInteraction: false,
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

// Fungsi untuk mengatur kelas aktif pada kedua tampilan
const setActiveMenu = (id) => {
  // Hapus kelas aktif dari semua item
  menuItemsDesktop.forEach((i) => i.classList.remove("active-menu"));
  menuItemsMobile.forEach((i) => i.classList.remove("active-menu"));

  // Tambahkan kelas aktif ke elemen yang sesuai
  document.getElementById(`desktop-${id}`).classList.add("active-menu");
  document.getElementById(`mobile-${id}`).classList.add("active-menu");
};

// Tambahkan event listener ke semua item menu
menuItemsDesktop.forEach((item) => {
  item.addEventListener("click", () => {
    const id = item.id.replace("desktop-", "");
    setActiveMenu(id);
  });
});

menuItemsMobile.forEach((item) => {
  item.addEventListener("click", () => {
    const id = item.id.replace("mobile-", "");
    setActiveMenu(id);
  });
});
setActiveMenu("home");
