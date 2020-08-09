
var finishedLoading = false;



// jQuery code
$(document).ready(function() {
  // prevent text from being selectable. Don't want to see cursor either
  // $("text").attr("onselectstart","return false");

  // fill form with data
  $("#amortizationPeriod").append(
    "<option>Select</option>",
    "<option>5</option>",
    "<option>10</option>",
    "<option>15</option>",
    "<option>20</option>",
    "<option>25</option>",
    "<option>30</option>",
    "<option>Other</option>"
  );

  // "Go" button unfocus event
  $(" #btnGoCalculate ").focusout(function() {
    // add a currency prefix to the asking price if not already there
    var askingPrice = $( "#askingPrice" ).val();
    if (!askingPrice.startsWith("$")) {
      $(" #askingPrice ").val('$' + askingPrice);
    }
  });

  // "Go" button click event
  $("#btnGoCalculate").click(function() {
    var askingPrice = $("#askingPrice").val();

    if (askingPrice.startsWith("$")) {
      askingPrice = askingPrice.substring(1);
    }

    if (askingPrice >= 1) {
      var downPaymentPct = 0.05;
      var downPaymentAmt = askingPrice * downPaymentPct;
      $(".downPaymentPct").val("5%");
      $(".downPaymentAmt").val("$" + downPaymentAmt.toFixed(2));
    }
    else {
      $("#btnGoCalculate").tooltip();
    }
  });
});

/* === CALCULATOR FUNCTIONS === */

function getRate() {
  window.open('../apply/apply.html', '_blank');
}

// NOTE: this is a direct copy/paste of the home.js navbar code. Update as needed.

/* === WINDOW ONSCROLL === */

// When the user scrolls down 20px from the top of the document, show the nav bg
// When the user scrolls to the top of the page, hide the nav bg (to show the banner)
const bannerLogoNameLight = "../images/JP-328×89-REVERSE-Web-Banner-crop.png";
const bannerLogoNameDark = "../images/JP-328×89-REVERSE-Web-Banner-Black-crop.png";
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
      navbar.classList.add("shadow-lg");  // add a shadow (ADDS LAG)
    }
  }
  // else (scrolled to the top)
  else {
    navbar.classList.remove("navbar-dark");
    navbar.classList.add("navbar-light");
    document.getElementById("brand").src = bannerLogoNameDark;
    navbar.classList.remove("nav-scrolled");
    navbar.classList.remove("shadow-lg"); // remove the shadow (NOTE: SHADOW ADDS LAG)
  }
}

// navbar scroll function for internet explorer browsers
function ieScrollFunction() {
  // get the navbar reference by ID
  let navbar = $("#topNav"); //= document.getElementById("topNav");
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
      navbar.classList.add("nav-scrolled");     // trigger the fade in
      navbar.classList.add("shadow-lg");        // add a shadow
      // navbar.classList.add("sticky");        // sticky-top alternative (doesn't work in IE)
      //navbar.parentElement.classList.add("sticky");
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
    // navbar.classList.remove("sticky");    // sticky-top alternative (doesn't work in IE)
    //navbar.parentElement.classList.remove("sticky");
  }
}

var browserIsIE = false;  // set this true if IE detected
// if user is on IE11 or earlier, use non-bootstrap sticky navbar code
if (!finishedLoading) {
  let navbar = document.getElementById("topNav").parentElement;

  if (window.document.documentMode) {
    // align nav with rest of body by adding padding equal to size of navbar (Bootstrap takes care of this on other browsers)
    //document.getElementsByClassName("content")[0].style.paddingTop = document.getElementById("topNav").style.height;
  
    // set the internet explorer-friendly window scroll function
    window.onscroll = function() { this.ieScrollFunction() };
    navbar.classList.remove("sticky-top");
    navbar.classList.add("sticky");
    browserIsIE = true;
  }
  // set the regular scroll function for the Bootstrap navbar
  else {
    window.onscroll = function() { this.scrollFunction() };
    // assign sticky-top Bootstrap class to the navbar
    // navbar.classList.add("sticky-top");
  }

  finishedLoading = true;

  // finally, position user at top of window (hack to fix scroll-down on refresh)
  // $(window).scrollTop(0); // doesn't actually seem to work. leaving so I remember
}
