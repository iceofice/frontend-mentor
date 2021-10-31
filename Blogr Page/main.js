// Mobile Hamburger

var hamburger = document.getElementById("hamburger");
var close = document.getElementById("close");
var menu = document.getElementById("menu");

// Hamburger OnClick
hamburger.addEventListener("click", function () {
  hamburger.style.display = "none";
  close.style.display = "block";
  menu.style.display = "block";
});

// Hamburger(Close) OnClick
close.addEventListener("click", function () {
  hamburger.style.display = "block";
  close.style.display = "none";
  menu.style.display = "none";
});

var menuTitleElements = document.querySelectorAll("nav .menu-title");
var submenuElements = document.querySelectorAll(".header-submenu");

function manageMobileMenu(menu, index) {
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
}

function checkWindowSize() {
  var width = window.innerWidth;
  // Set display property based on the window size
  menu.style.display = width < 992 ? "none" : "flex";

  //Add and remove onClick event listener
  if (width < 992) {
    console.log("yes");
    Array.from(menuTitleElements).map((menu, index) => {
      menu.addEventListener("click", () => manageMobileMenu(menu, index));
    });
  } else {
    console.log("no");
    Array.from(menuTitleElements).map((menu, index) => {
      menu.removeEventListener("click", () => manageMobileMenu(menu, index));
    });
  }
}

// Make the header sticky
function stickyHeader() {
  var header = document.getElementsByTagName("header")[0];
  var sticky = header.offsetTop;
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

window.onresize = checkWindowSize;
window.onscroll = stickyHeader;
checkWindowSize();
