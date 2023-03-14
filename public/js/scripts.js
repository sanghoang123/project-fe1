// arrow top
const btnScrollToTop = document.querySelector('.footer-arrow');
// onscroll header nav
window.onscroll = () => {
  stickyNav();
  arrowFooter();
};

const navbar = document.querySelector('.header-navbar');
var sticky = navbar.offsetTop;

stickyNav = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};

arrowFooter = () => {
  if (document.documentElement.scrollTop >= 1200) {
    btnScrollToTop.classList.add('footer-arrow-active');
  } else btnScrollToTop.classList.remove('footer-arrow-active');
};

// modal call back
const callBack = document.querySelectorAll('.call-back-line');
var myModal = new bootstrap.Modal(document.getElementById('modalCallBack'));

callBack.forEach((item) => {
  item.addEventListener('click', () => {
    myModal.show();
  });
});

// hide/show click search
const btnSearch = document.querySelector('.header_nav-search');
const headerLogo = document.querySelector('.header_logo');
const headerNavbar = document.querySelector('.navbar-nav');
const btnTimes = document.querySelector('.header_nav-times');
const inputSearch = document.querySelector('.header_nav-input');
const navbarTogg = document.querySelector('.navbar-toggler');

btnSearch.addEventListener('click', () => {
  handelClickNavEle();
});

btnTimes.addEventListener('click', () => {
  handelClickNavEle();
});

handelClickNavEle = (str = 'hide-on-mobile') => {
  const arrEle = [
    navbarTogg,
    headerLogo,
    headerNavbar,
    btnSearch,
    inputSearch,
    btnTimes,
  ];
  arrEle.forEach((e) => {
    e.classList.toggle(str);
  });
};

// click btn more info navbar
const btnMore = document.querySelector('.header_nav-ellipsis');
const moreInfo = document.querySelector('.header_nav-info');
const btnCloseModal = document.querySelector('.btn-close');

btnMore.addEventListener('click', () => {
  moreInfo.classList.toggle('header_nav-info--active');
});

btnCloseModal.addEventListener('click', () => {
  moreInfo.classList.toggle('header_nav-info--active');
});

// arrow
const arrowNav = document.querySelectorAll('i.nav-item-icon');
const itemNav = document.querySelectorAll('.nav-item');

itemNav.forEach((item) => {
  arrowNav.forEach((arrow) => {
    arrow.addEventListener('click', () => {
      if (item.classList.contains('nav-item-hv')) {
        item.classList.remove('nav-item-hv');
      } else {
        item.classList.add('nav-item-hv');
      }
    });
  });
});
