var BREAKPOINTS = {
  mobile: "768px",
  tablet: "768px",
  desktop: "1150px"
};

var toggleButton = document.querySelector(".header-nav__button-js"),
  mainNav = document.querySelector(".header-nav__inner");


function loadShow() {
  toggleButton.classList.remove("visually-hidden");
}

function hideOnMedia(e) {
  if (e.matches) {
    mainNav.classList.remove("header-nav__inner-js");
  } else {
    mainNav.classList.add("header-nav__inner-js");
  }
}

var mediaEvent = window.matchMedia("(min-width: " + BREAKPOINTS.tablet.toString() + ")");
hideOnMedia(mediaEvent);
mediaEvent.addListener(hideOnMedia);

window.addEventListener("load", loadShow);

toggleButton.addEventListener("click", function () {
  this.classList.toggle("header-nav__button--close");
  mainNav.classList.toggle("header-nav__inner-js--active");
});

var modalCart = document.querySelector(".modal--cart");
var buttonsCartAdd = document.querySelectorAll(".js-add2cart");

if (buttonsCartAdd) {
  for (var i = 0; i < buttonsCartAdd.length; i++) {
    buttonsCartAdd[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      modalCart.classList.remove("modal--closed");
    });
  };
};

if (modalCart) {
  modalCart.addEventListener("click", function (evt) {
    // если клик по overlay
    if (evt.target.classList.contains("modal")) {
      evt.target.classList.add("modal--closed");
    };
  });
};

// закрытие окна по нажатию esc
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!modalCart) return;
    if (!modalCart.classList.contains("modal--closed")) {
      evt.preventDefault();
      modalCart.classList.add("modal--closed");
    };
  };
});
