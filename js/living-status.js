$(document).ready(function () {
  // if user previously chose a time frame, ensure it is selected when page loads
  var livingStatus = sessionStorage.getItem("livingStatus");
  if (livingStatus != null) {
    $("#" + livingStatus).addClass("active");
  }
});

function btnBack() {
  saveAndValidate();
  history.back();
}

// returns true if valid
function saveAndValidate() {
  // validation flag, remains true if all tests valid
  var valid = true;

  if ($("#statusOwn").hasClass("active")) {
    sessionStorage.setItem("livingStatus", "Owner");
  }
  else if ($("#statusRent").hasClass("active")) {
    sessionStorage.setItem("livingStatus", "Rent");
  }
  else if ($("#statusParents").hasClass("active")) {
    sessionStorage.setItem("livingStatus", "Living with parents");
  }
  else {
    valid = false;
    return false;
  }

  // only move to next page if valid selection
  if (valid) {
    return true;
  }
}

function buttonToNumberOfApplicants() {
  if (saveAndValidate()) {
    window.location.assign("../apply/numberofapplicants.html")
  }
  else {
    alert("You must select a living status.");
  }
}

$(".card").click(function () {
  $(".card").removeClass("active");
  $(this).addClass("active");
});