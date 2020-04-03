// $(document).ready(function() {
  
  /* Toggle between adding and removing the "responsive" class to topnav
  when the user clicks on the icon
   * no longer needed w/bootstrap navbar */
  function navFunction() {
    var x = document.getElementById("homeTopNav");
    if (x.className.includes("responsive")) {
      x.className = x.className.replace(" responsive", "");
    } else {
      x.className += " responsive";
    }
  }

  // When the user scrolls down 20px from the top of the document, show the nav bg
  // When the user scrolls to the top of the page, hide the nav bg (to show the banner)
  function scrollFunction() {
    var x = document.getElementById("topNav");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      if (!x.className.includes("bg-dark")) {
        x.className += " bg-dark";
        x.className = x.className.replace("navbar-light", "navbar-dark");
        document.getElementById("brand").src="images/JP-328×89-REVERSE-Web-Banner.png";
      }
    } else {
      x.className = x.className.replace(" bg-dark", "");
      x.className = x.className.replace("navbar-dark", "navbar-light");
      document.getElementById("brand").src="images/JP-328×89-REVERSE-Web-Banner-Black.png";
    }
  }

  function onLoadFunction() {
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

  // attach the function to onscroll
  window.onscroll = function() {this.scrollFunction()};
  window.onload = function() {this.onLoadFunction()};
// });

