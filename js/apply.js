function buttonToContactInfo () {
    window.location.assign("../apply/contactinfo.html")
}

function submitApplication() {
  if (doneContactInfo) {
    changeArrowColor(1);
  }
  else if (doneMortgageInfo) {
    changeArrowColor(2);
  }
  else if (doneReviewTerms) {
    changeArrowColor(3);
  }
}

function changeArrowColor(step) {
  if (step == 1) {
    document.getElementById("clickedID1").className = "arrow-change";
  }
  else if (step == 2) {
    document.getElementById("clickedID2").className = "arrow-change";
  }
  else if (step == 3) {
    document.getElementById("clickedID3").className = "arrow-change";
  }
}