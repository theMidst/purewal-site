$(document).ready(function () {
  // if user previously chose a number of applicants, ensure it is selected when page loads
  var numberOfApplicants = sessionStorage.getItem("numberOfApplicants");
  if (numberOfApplicants != null) {
    $("#" + numberOfApplicants).addClass("active");
  }
});

function saveAndValidate() {

  var valid = true;

  if ($("#singleApplicant").hasClass("active")) {
    sessionStorage.setItem("numberOfApplicants", "Single applicant");
  }
  else if ($("#coApplicant").hasClass("active")) {
    sessionStorage.setItem("numberOfApplicants", "Co-applicant");
  }
  else if ($("#otherApplicant").hasClass("active")) {
    sessionStorage.setItem("numberOfApplicants", "Other applicant");
  }
  else {
    valid = false;
    return false;
  }

  if (valid) {
    return true;
  }
}

function btnBack() {
  saveAndValidate();
  history.back();
}

function buttonToApply() {
  // only move to next page if valid selection
  if (saveAndValidate()) {
    // TODO: only submit this section if all pages finished
    // if () {
    // set session bool indicating finished this part of application
    sessionStorage.setItem("doneMortgageInfo", "true");
    window.location.assign("../apply/apply.html")
    // }
  }
  else {
    alert("You must select a number of applicants.");
  }
}

$(".card").click(function () {
  $(".card").removeClass("active");
  $(this).addClass("active");
});