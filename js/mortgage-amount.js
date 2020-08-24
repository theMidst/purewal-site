$(document).ready(function() {
  // if user previously chose a type, ensure it is selected when page loads
  var mortgageAmount = sessionStorage.getItem("mortgageAmount");
  if (mortgageAmount != null) {
    $("#mortgageAmount").val(mortgageAmount);
  }
});

// validate and save inputted mortgage amount, return bool depending on success
function validateAndSave() {
  // get user's mortgage amount input
  var mortgageAmount = $("#mortgageAmount").val().toString();

  // ignore leading currency sign if there is one
  if (mortgageAmount.startsWith("$")) {
    mortgageAmount = mortgageAmount.substr(1);
  }

  // if user's input is not valid
  if (!(mortgageAmount > 0)) {
    return false;
  }
  // else, input is valid
  else {
    sessionStorage.setItem("mortgageAmount", mortgageAmount);
    return true;
  }
}

// when user clicks back
function btnBack() {
  // save the user's input
  validateAndSave()
  // navigate back to previous page
  history.back();
}

// when user clicks next
function btnToTimeFrame() {
  // navigate forward if input is valid
  if (validateAndSave()) {
    window.location.assign("../apply/timeframe.html");
  }
  else {
    alert("You must enter a mortgage amount.");
  }
}
