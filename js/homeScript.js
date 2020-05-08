// $(document).ready(function() {

  // When the user scrolls down 20px from the top of the document, show the nav bg
  // When the user scrolls to the top of the page, hide the nav bg (to show the banner)
  var bannerLogoNameLight = "images/JP-328×89-REVERSE-Web-Banner-crop.png";
  var bannerLogoNameDark = "images/JP-328×89-REVERSE-Web-Banner-Black-crop.png";
  function scrollFunction() {
    var x = document.getElementById("topNav");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      if (!x.className.includes("navbar-dark")) {
        /* invert navbar and its contents from dark to light & fade in */
        x.className = x.className.replace("navbar-light", "navbar-dark");
        document.getElementById("brand").src = bannerLogoNameLight;
        x.className += " nav-scrolled";
      }
    }
    else {
      x.className = x.className.replace("navbar-dark", "navbar-light");
      document.getElementById("brand").src = bannerLogoNameDark;
      x.className = x.className.replace(" nav-scrolled", "");
    }
  }

  function onLoadFunction() {
    // Animate the S E T text
    var textS = document.getElementsByClassName("setTextS")[0];
    textS.className += " setTextFade";
    var textS = document.getElementsByClassName("setTextS")[1];
    textS.className += " setTextFade";

    var textE = document.getElementsByClassName("setTextE")[0];
    textE.className += " setTextFade";
    var textE = document.getElementsByClassName("setTextE")[1];
    textE.className += " setTextFade";
    
    var textT = document.getElementsByClassName("setTextT")[0];
    textT.className += " setTextFade";
    var textT = document.getElementsByClassName("setTextT")[1];
    textT.className += " setTextFade";
  }

  // set up SET text animation & navbar scroll functions
  window.onscroll = function() { this.scrollFunction()} ;
  window.onload = function() { this.onLoadFunction() };
// });

