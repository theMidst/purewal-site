$(document).ready(function() {
  // if user previously chose a number of applicants, ensure it is selected when page loads
  var numberOfApplicants = sessionStorage.getItem("numberOfApplicants");
  if (numberOfApplicants != null) {
    $("#" + numberOfApplicants).addClass("active");
  }
});

function saveAndValidate() {
  
  var valid = true;

  if ($("#singleApplicant").hasClass("active")) {
    sessionStorage.setItem("numberOfApplicants", "singleApplicant");
  }
  else if ($("#coApplicant").hasClass("active")) {
    sessionStorage.setItem("numberOfApplicants", "coApplicant");
  }
  else if ($("#otherApplicant").hasClass("active")) {
    sessionStorage.setItem("numberOfApplicants", "otherApplicant");
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

function buttonToApply () {
  // only move to next page if valid selection
  if (saveAndValidate()) {
    // set session bool indicating finished this part of application
    sessionStorage.setItem("doneMortgageInfo", "true");
    window.location.assign("../apply/apply.html")
  }
  else {
    alert("You must select a number of applicants.");
  }
}

$(".card").click(function(){
    $(".card").removeClass("active");
    $(this).addClass("active");
});