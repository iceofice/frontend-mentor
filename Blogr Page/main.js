var hamburger = document.getElementById("hamburger");
var close = document.getElementById("close");
var menu = document.getElementById("menu");

function checkMenu() {
  var width =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  menu.style.display = width < 992 ? "none" : "flex";
}

checkMenu();
window.addEventListener("resize", () => {
  checkMenu();
});

hamburger.addEventListener("click", function () {
  hamburger.style.display = "none";
  close.style.display = "block";
  menu.style.display = "block";
});

close.addEventListener("click", function () {
  hamburger.style.display = "block";
  close.style.display = "none";
  menu.style.display = "none";
});

window.onscroll = function () {
  stickyHeader();
};

var header = document.getElementsByTagName("header")[0];

var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset >= sticky) {
    header.style.position = "fixed";
    header.style.margin = "0 auto";
    header.style.background = "hsla(9, 100%, 71%, 90%)";
  } else {
    header.style.position = "absolute";
    header.style.margin = "3.5em auto";
    header.style.background = "none";
  }
}

var menuTitleElements = document.querySelectorAll("nav .menu-title");
var submenuElements = document.querySelectorAll(".header-submenu");

Array.from(menuTitleElements).map((menu, index) => {
  menu.addEventListener("click", () => {
    if (submenuElements[index].classList.contains("active")) {
      submenuElements[index].classList.remove("active");
      menu.classList.remove("active");
      return;
    }

    Array.from(submenuElements).map((submenu) => {
      submenu.classList.remove("active");
    });

    Array.from(menuTitleElements).map((menu) => {
      menu.classList.remove("active");
    });

    submenuElements[index].classList.add("active");
    menu.classList.add("active");
  });
});
