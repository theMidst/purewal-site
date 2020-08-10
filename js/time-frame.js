$(document).ready(function() {
  // if user previously chose a time frame, ensure it is selected when page loads
  var timeFrame = sessionStorage.getItem("timeFrame");
  if (timeFrame != null) {
    $("#" + timeFrame).addClass("active");
  }
});

function saveAndValidate() {
  
  var valid = true;

  if ($("#45Days").hasClass("active")) {
    sessionStorage.setItem("timeFrame", "45Days");
  }
  else if ($("#120Days").hasClass("active")) {
    sessionStorage.setItem("timeFrame", "120Days");
  }
  else if ($("#unsure").hasClass("active")) {
    sessionStorage.setItem("timeFrame", "unsure");
  }
  else {
    valid = false;
  }

  if (valid) {
    return true;
  }
}

function btnBack() {
  saveAndValidate();
  history.back();
}

function btnToLivingStatus () {
  // only move to next page if valid selection
  if (saveAndValidate()) {
    window.location.assign("../apply/livingstatus.html")
  }
  else {
    alert("You must select a time frame.");
  }
}

$(".card").click(function(){
    $(".card").removeClass("active");
    $(this).addClass("active");
});