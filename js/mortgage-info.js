$(document).ready(function () {
  // if user previously chose a type, ensure it is selected when page loads
  var mortgageType = sessionStorage.getItem("mortgageType");
  if (mortgageType != null) {
    $("#" + mortgageType).addClass("active");
  }
});

function validateAndSave() {
  var valid = true;

  if ($("#renew-switch").hasClass("active")) {
    sessionStorage.setItem("mortgageType", "Renew or switch");
  }
  else if ($("#refinance").hasClass("active")) {
    sessionStorage.setItem("mortgageType", "Refinance");
  }
  else if ($("#purchase").hasClass("active")) {
    sessionStorage.setItem("mortgageType", "Purchase");
  }
  else if ($("#pre-qualify").hasClass("active")) {
    sessionStorage.setItem("mortgageType", "Pre-qualify");
  }
  else {
    valid = false;
  }

  return valid;
}

function btnBack() {
  validateAndSave();
  history.back();
}

function btnToMortgageAmount() {
  // only move to next page if valid selection
  if (validateAndSave()) {
    window.location.assign("../apply/mortgageamount.html")
  }
  else {
    alert("You must select a mortgage type.");
  }
}

$(".card").click(function () {
  $(".card").removeClass("active");
  $(this).addClass("active");
});