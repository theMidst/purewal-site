
var finishedLoading = false;

/* === WINDOW LOAD === */

// animates the S E T text on window load
function animateSetText() {
  // animate the S E T text by applying fade transitions to each letter & subtitle
  let textS = document.getElementsByClassName("setTextS")[0];
  textS.className += " setTextFade";
  textS = document.getElementsByClassName("setTextS")[1];
  textS.className += " setTextFade";

  let textE = document.getElementsByClassName("setTextE")[0];
  textE.className += " setTextFade";
  textE = document.getElementsByClassName("setTextE")[1];
  textE.className += " setTextFade";
  
  let textT = document.getElementsByClassName("setTextT")[0];
  textT.className += " setTextFade";
  textT = document.getElementsByClassName("setTextT")[1];
  textT.className += " setTextFade";
}

// do all necessary actions at window load
window.onload = function() {
  animateSetText(); // animate the S E T text
};


/* === WINDOW ONSCROLL === */

// When the user scrolls down 20px from the top of the document, show the nav bg
// When the user scrolls to the top of the page, hide the nav bg (to show the banner)
const bannerLogoNameLight = "images/JP-328×89-REVERSE-Web-Banner-crop.png";
const bannerLogoNameDark = "images/JP-328×89-REVERSE-Web-Banner-Black-crop.png";
function scrollFunction() {
  // get the navbar reference by ID
  let navbar = document.getElementById("topNav");
  // get the user's currently-scrolled distance from the top
  let scrollDistance = window.pageYOffset;

  // if scrolled away from the top
  if (scrollDistance > 0) {
    // if dark class is not yet applied
    if (navbar.classList.contains("navbar-light")) {
      navbar.classList.remove("navbar-light");  // invert colour scheme
      navbar.classList.add("navbar-dark");      // invert colour scheme
      document.getElementById("brand").src = bannerLogoNameLight; // invert logo
      navbar.classList.add("nav-scrolled"); // trigger the fade in
      // navbar.classList.add("shadow-lg");  // add a shadow (ADDS LAG)
    }
  }
  // else (scrolled to the top)
  else {
    navbar.classList.remove("navbar-dark");
    navbar.classList.add("navbar-light");
    document.getElementById("brand").src = bannerLogoNameDark;
    navbar.classList.remove("nav-scrolled");
    // navbar.classList.remove("shadow-lg"); // remove the shadow (NOTE: SHADOW ADDS LAG)
  }
}

// navbar scroll function for internet explorer browsers
function ieScrollFunction() {
  // get the navbar reference by ID
  let navbar = document.getElementById("topNav");
  let navOffset = navbar.offsetTop; // ruins nav scroll when used in if below ("scrollDistance > navOffset")

  // get IE to scroll better: https://stackoverflow.com/questions/2717252/document-body-scrolltop-is-always-0-in-ie-even-when-scrolling
  let scrollDistance = typeof window.pageYOffset != 'undefined'? window.pageYOffset: document.documentElement.scrollTop? document.documentElement.scrollTop: document.body.scrollTop? document.body.scrollTop:0;

  // if scrolled away from the top
  if (scrollDistance > navOffset) {
    // if dark class is not yet applied
    if (navbar.classList.contains("navbar-light")) {
      navbar.classList.remove("navbar-light");  // invert colour scheme
      navbar.classList.add("navbar-dark");      // invert colour scheme
      document.getElementById("brand").src = bannerLogoNameLight; // invert logo
      navbar.classList.add("nav-scrolled"); // trigger the fade in
      navbar.classList.add("shadow-lg");  // add a shadow
      //navbar.parentElement.classList.add("sticky");     // sticky-top alternative (doesn't work in IE)
      navbar.classList.add("sticky");     // sticky-top alternative (doesn't work in IE)
    }
  }
  // else (scrolled to the top)
  else {
    navbar.classList.remove("navbar-dark");
    navbar.classList.add("navbar-light");
    document.getElementById("brand").src = bannerLogoNameDark;
    navbar.classList.remove("nav-scrolled");
    // remove the shadow
    navbar.classList.remove("shadow-lg");
    //navbar.parentElement.classList.remove("sticky");    // sticky-top alternative (doesn't work in IE)
    navbar.classList.remove("sticky");    // sticky-top alternative (doesn't work in IE)
  }
}

// if user is on IE11 or earlier, use non-bootstrap sticky navbar code
var browserIsIE = false;  // set this true if using IE (remove if never used)
if (!finishedLoading && window.document.documentMode) {
  // align nav with rest of body by adding padding equal to size of navbar (Bootstrap takes care of this on other browsers)
  //document.getElementsByClassName("content")[0].style.paddingTop = document.getElementById("topNav").style.height;

  // set the internet explorer-friendly window scroll function
  window.onscroll = function() { this.ieScrollFunction() };
  browserIsIE = true;
  finishedLoading = true;
}
// set the regular scroll function for the Bootstrap navbar
else if (!finishedLoading) {
  window.onscroll = function() { this.scrollFunction() };
  // assign sticky-top Bootstrap class to the navbar
  let navbar = document.getElementById("topNav");//.parentElement;
  navbar.classList.add("sticky-top");
  finishedLoading = true;
}

// $(document).ready(function() {
//   // prevent text from being selectable. Don't want to see cursor either
//   // $("text").attr("onselectstart","return false");
// });
