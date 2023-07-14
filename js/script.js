//navbar
var btnshow = document.querySelectorAll(".toggle_click");

btnshow.forEach((el) => {
  el.onclick = function () {
    var element = document.querySelector(".mobile-menu");
    element.classList.toggle("show");
  };
});

//checked sell & ren

const inputs = document.querySelectorAll(".input_checked");
const divs = document.querySelectorAll(".custom-radio-box");

inputs.forEach((input, index) => {
  input.addEventListener("click", () => {
    divs.forEach((div) => div.classList.remove("active"));
    divs[index].classList.add("active");
  });
});

//quick-search mobile

var btnshow = document.querySelectorAll(".quick-search");

btnshow.forEach((el) => {
  el.onclick = function () {
    var element = document.querySelector(".intro-filter");
    element.classList.toggle("active");
  };
});

//swiper

var swiper = new Swiper(".slide-container", {
  slidesPerView: 3,
  spaceBetween: 20,
  sliderPerGroup: 3,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});
