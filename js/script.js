// -- START FIXED NAVBAR -- // 
jQuery(document).ready(function($) {

  var header = document.getElementsByClassName('header')[0];

  window.addEventListener('scroll', function() {
    if (window.scrollY >= 165) {
      header.classList.add('sticky', 'slide-down');
    } else {
      header.classList.remove('sticky', 'slide-down');
    }
  });

  const $img = $('.logo a img');
  const $picture = $('.logo picture source');
  $img.data('src-orig', $img.attr('src'));

  $(window).scroll(function() {
    if ($(window).scrollTop() > 165) {
      $img.attr('src', $img.data('pavel-mavel'));
      $picture.attr('srcset', $img.data('pavel-mavel'));
    } else {
      $img.attr('src', $img.data('src-orig'));
      $picture.attr('srcset', $img.data('src-orig'));
    }
  });
});
// -- END FIXED NAVBAR -- //



// -- START MENU LANG DROPDOWN -- //
const langBtn = document.querySelector('.dropbtn');
const langBody = document.querySelector('.dropdown-content');

$(window).scroll(function() {
  if ($(window).scrollTop() > 1) {
    $(".dropdown-content").removeClass("show"); 
  } 
});

if (langBtn) { 
  langBtn.addEventListener("click", function(e) {
    langBody.classList.toggle('show');
  }); 
}
$(document).mouseup(function(e) {
  var $target = $(e.target);
  if ($target.closest(".dropbtn").length == 0) {
    $(".dropdown-content").removeClass("show");
  }
});
const secondLangBtn = document.querySelector('#bottomLangDropdown');
const secondLangBody = document.querySelector('#myDropdownBottomLang');
if (secondLangBtn) { 
  secondLangBtn.addEventListener("click", function(e) {
    secondLangBody.classList.toggle('show');
  }); 
}
$(document).mouseup(function(e) {
  var $target = $(e.target);
  if ($target.closest("#bottomLangDropdown").length == 0) {
    $("#myDropdownBottomLang").removeClass("show");
  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 1) {
    $("#myDropdownBottomLang").removeClass("show");
  } 
});
// -- END MENU LANG DROPDOWN -- //



// -- START MENU BURGER -- //
const shadowContent = document.querySelector('.shadow__content');
const iconMenu = document.querySelector('.menu-icon');
const menuBody = document.querySelector('.nav--right');
if (iconMenu) { 
  iconMenu.addEventListener("click", function(e) {
    shadowContent.classList.toggle('shadow__active');
    document.body.classList.toggle('_scroll-lock');
    iconMenu.classList.toggle('menu-icon__active');
    menuBody.classList.toggle('nav--right__active');
  }); 
}
$(document).mouseup(function(e) {
  var $target = $(e.target);
  if ($target.closest(".menu__close").length == 0) {
    $(".shadow__content").removeClass("shadow__active");
    $(".nav--right").removeClass("nav--right__active");
    $(".menu-icon").removeClass("menu-icon__active");
    $("body").removeClass("_scroll-lock");
  }
  });
// -- END MENU BURGER -- //



// -- HEADER DROPDOWN CONTACTS -- //
const dropbtn = document.querySelector('.dropbtn-contacts');
const dropbtnContent = document.querySelector('.dropdown-contacts__content');
const closeDropbtn = document.querySelector('.close-dropdown__content');

$(window).scroll(function() {
  if ($(window).scrollTop() > 1) {
    dropbtnContent.classList.remove('show-contacts'); 
  } 
});

if (dropbtn) { 
  dropbtn.addEventListener("click", function(e) {
    dropbtnContent.classList.toggle('show-contacts'); 
  }); 
}
if (closeDropbtn) { 
  closeDropbtn.addEventListener("click", function(e) {
    dropbtnContent.classList.remove('show-contacts');  
  }); 
}
$(document).mouseup(function(e) {
  var $target = $(e.target);
  if ($target.closest(".dropdown-contacts__content").length == 0) {
    $(".dropdown-contacts__content").removeClass("show-contacts");
  }
});

const secondBtn = document.querySelector('#second-dropdown__btn');
const secondContent = document.querySelector('#second-dropdown__content');
const secondDropClose = document.querySelector('#second-dropdown__close');
const contactsIcon = document.querySelector('.contacts-icon');

$(window).scroll(function() {
  if ($(window).scrollTop() > 1) {
    secondContent.classList.remove('show-contacts');   
  } 
});

if (secondBtn) { 
  secondBtn.addEventListener("click", function(e) {
    secondContent.classList.toggle('show-contacts');   
    document.body.classList.toggle('_scroll-lock');
  }); 
}
if (contactsIcon) { 
  contactsIcon.addEventListener("click", function(e) {
    secondContent.classList.toggle('show-contacts');
    document.body.classList.toggle('_scroll-lock');
  }); 
}
if (secondDropClose) { 
  secondDropClose.addEventListener("click", function(e) {
    secondContent.classList.remove('show-contacts');   
    document.body.classList.remove('_scroll-lock');
  }); 
}
$(document).mouseup(function(e) {
  var $target = $(e.target);
  if ($target.closest("#second-dropdown__content").length == 0) {
    $("#second-dropdown__content").removeClass("show-contacts");
  }
});
// -- END HEADER DROPDOWN CONTACTS -- //


// -- START POP-UP FORM -- //
const callbackServicesLeft = document.querySelector('#callbackServicesLeft');
const callbackServicesCenter = document.querySelector('#callbackServicesCenter');
const callbackServicesRight = document.querySelector('#callbackServicesRight');
const callbackFirstScreen = document.querySelector('#callbackFirstScreen');
const callbackBtn = document.querySelector('#btnCallback');
const callbackBtnMenu = document.querySelector('#popup-callback__menu');
const callbackBtnBurgerMenu = document.querySelector('#menu-btn');
const callbackContent = document.querySelector('#contentCallback');
const callbackShadow = document.querySelector('#shadowCallback');
const closeCallback = document.querySelector('#closeCallback');
const sentFormCallback = document.querySelector('#sentFormCallback');

if (callbackServicesLeft) { 
  callbackServicesLeft.addEventListener("click", function(e) {
    callbackContent.classList.toggle('shadow-popup');
    callbackShadow.classList.toggle('shadow-popup');

  }); 
}
if (callbackServicesCenter) { 
  callbackServicesCenter.addEventListener("click", function(e) {
    callbackContent.classList.toggle('shadow-popup');
    callbackShadow.classList.toggle('shadow-popup');

  }); 
}
if (callbackServicesRight) { 
  callbackServicesRight.addEventListener("click", function(e) {
    callbackContent.classList.toggle('shadow-popup');
    callbackShadow.classList.toggle('shadow-popup');

  }); 
}

if (callbackBtnBurgerMenu) { 
  callbackBtnBurgerMenu.addEventListener("click", function(e) {
    callbackContent.classList.toggle('shadow-popup');
    callbackShadow.classList.toggle('shadow-popup');

  }); 
}
if (callbackBtn) { 
  callbackBtn.addEventListener("click", function(e) {
    callbackContent.classList.toggle('shadow-popup');
    callbackShadow.classList.toggle('shadow-popup');

  }); 
}
if (callbackFirstScreen) { 
  callbackFirstScreen.addEventListener("click", function(e) {
    callbackContent.classList.toggle('shadow-popup');
    callbackShadow.classList.toggle('shadow-popup');

  }); 
}
if (callbackBtnMenu) { 
  callbackBtnMenu.addEventListener("click", function(e) {
    callbackContent.classList.toggle('shadow-popup');
    callbackShadow.classList.toggle('shadow-popup');

  }); 
}
if (closeCallback) { 
  closeCallback.addEventListener("click", function(e) {
    callbackContent.classList.remove('shadow-popup');
    callbackShadow.classList.remove('shadow-popup');
  }); 
}
if (sentFormCallback) { 
  sentFormCallback.addEventListener("click", function(e) {
    callbackContent.classList.remove('shadow-popup');
    callbackShadow.classList.remove('shadow-popup');
  }); 
}
$(document).mouseup(function(e) {
  var $target = $(e.target);
  if ($target.closest("#contentCallback").length == 0) {
    $("#contentCallback").removeClass("shadow-popup");
    $("#shadowCallback").removeClass("shadow-popup");
  }
});
// -- END POP-UP FORM -- //


// -- START POPULAR VACANCIES SLIDER -- //
const sliderVacancies = new Swiper('.popular-vacancies__slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el:'.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
    }
  }
  // And if we need scrollbar
});
sliderVacancies.width = 307;
// -- END POPULAR VACANCIES SLIDER -- //



// -- START PARTNERS SLIDER -- //
const sliderPartners = new Swiper('.partners-slider', {
  // Optional parameters
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el:'.swiper-pagination',
    clickable: true,
  },
  
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 7,
    },
    1440: {
      slidesPerView: 5,
    }
  }
  // And if we need scrollbar
});
sliderPartners.width = 120;
// -- END PARTNERS SLIDER -- //



// -- START FAQ -- //
$('.block__title').click(function(event){
  if($('.faq__block').hasClass('one-text')) {
    $('.block__title').not($(this)).removeClass('faq__active');
    $('.block__text').not($(this).next()).slideUp(300);
  }
  $(this).toggleClass('faq__active').next().slideToggle(300);
});
// -- END FAQ -- //


// START SCROLL TOP //
$(document).ready(function(){
  // прячем кнопку #back-top
  $("#back-top").hide();

  // появление/затухание кнопки #back-top
  $(function (){
      $(window).scroll(function (){
          if ($(this).scrollTop() > 600){
              $('#back-top').fadeIn();
          } else{
              $('#back-top').fadeOut();
          }
      });

      // при клике на ссылку плавно поднимаемся вверх
      $('#back-top a').click(function (){
          $('body,html').animate({
              scrollTop:0
          }, 800);
          return false;
      });
  });
});
// END SCROLL TOP //



// START SLIDES BUTTON //
const sliderArticle = new Swiper('.articles-tags__button__first', {
  // Optional parameters
  spaceBetween: 10,
  freeMode: true,

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 4,
    },

  }
});
// END SLIDES BUTTON //



// START PAGES-BUTTONS //
const imagesBtn = document.querySelector(".imagesBtn");
const videoBtn = document.querySelector(".videoBtn");

const imagesPage = document.querySelector(".reviews-content-images");
const videoPage = document.querySelector(".reviews-content-video");

if (imagesBtn) { 
  imagesBtn.addEventListener("click", function(e) {
    imagesPage.classList.add('images__active');
    imagesPage.classList.remove('video__not__active');
    videoPage.classList.add('video__not__active');
    videoPage.classList.remove('video__active');
    imagesBtn.classList.add('reviews-button__active');
    videoBtn.classList.remove('reviews-button__active');
    }); 
  }
  if (videoBtn) { 
    videoBtn.addEventListener("click", function(e) {
      imagesPage.classList.remove('images__active');
      imagesPage.classList.add('video__not__active');
      videoPage.classList.remove('video__not__active');
      videoPage.classList.add('video__active');
      videoBtn.classList.add('reviews-button__active');
      imagesBtn.classList.remove('reviews-button__active');
    }); 
  }
// END PAGES-BUTTONS //



// START VACANCIES FILTER //
$('.filter-title').click(function(event){
  if($('.filter-block').hasClass('one-text')) {
    $('.filter-title').not($(this)).removeClass('filter__active');
    $('.filter-content').not($(this).next()).slideUp(300);
  }
  $(this).toggleClass('filter__active').next().slideToggle(300);
});
// START VACANCIES FILTER //



// START VACANCIES DROPDOWN FILTER //
$('.button-filter-medium-screen').click(function(event){
  $(this).toggleClass('filter__dropdown__active').next().slideToggle(200);
});
//  END VACANCIES DROPDOWN FILTER //



// START VACANCIES MAIN SLIDER //

const swiper = new Swiper(".vacancies-content-page-main-thumbs-slider", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 7,
  freeMode: true,
  watchSlidesProgress: true,
});
const swiper2 = new Swiper(".vacancies-content-page-main-slider", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
//END VACANCIES MAIN SLIDER //



const swiper3 = new Swiper(".photo-housing-slider", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



const swiper4 = new Swiper(".video-reviews-slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
