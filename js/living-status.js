$(document).ready(function() {
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

function saveAndValidate() {
  
  var valid = true;

  if ($("#statusOwn").hasClass("active")) {
    sessionStorage.setItem("livingStatus", "statusOwn");
  }
  else if ($("#statusRent").hasClass("active")) {
    sessionStorage.setItem("livingStatus", "statusRent");
  }
  else if ($("#statusParents").hasClass("active")) {
    sessionStorage.setItem("livingStatus", "statusParents");
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

function buttonToNumberOfApplicants () {
  if (saveAndValidate()) {
    window.location.assign("../apply/numberofapplicants.html")
  }
  else {
    alert("You must select a living status.");
  }
}

$(".card").click(function(){
  $(".card").removeClass("active");
  $(this).addClass("active");
});