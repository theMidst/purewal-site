$(document).ready(function() {
  if (sessionStorage.getItem("doneContactInfo") === "true") {
    document.getElementById("clickedID1").className = "arrow-change";
    changeArrowColor(1);
  }
  if (sessionStorage.getItem("doneMortgageInfo") === "true") {
    changeArrowColor(2);
  }
  if (sessionStorage.getItem("doneReviewTerms") === "true") {
    changeArrowColor(3);
  }
});

function buttonToContactInfo () {
  window.location.assign("../apply/contactinfo.html");
}

function buttonToMortgageInfo () {
  window.location.assign("../apply/mortgageinfo.html");
}

function buttonToTermsConditions () {
  window.location.assign("../apply/termsconditions.html");
}

function submitApplication() {
  // gather vars, submit to PHP!
}

function changeArrowColor(step) {
  if (step === 1) {
    document.getElementById("clickedID1").className = "arrow-change";
  }
  else if (step === 2) {
    document.getElementById("clickedID2").className = "arrow-change";
  }
  else if (step === 3) {
    document.getElementById("clickedID3").className = "arrow-change";
  }
}