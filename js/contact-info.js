$(document).ready(function() {
  // if user previously entered contact info, ensure it shows when page loads
  var cName = sessionStorage.getItem("cName");
  var cEmail = sessionStorage.getItem("cEmail");
  var cNumber = sessionStorage.getItem("cNumber");
  var cProvince = sessionStorage.getItem("cProvince");
  var cMortgageSpecialist = sessionStorage.getItem("cMortgageSpecialist");
  $("#name").val(cName);
  $("#email").val(cEmail);
  $("#number").val(cNumber);
  $("#province").val(cProvince);
  $("#mortgageSpecialist").val(cMortgageSpecialist);
});

function saveAndValidate() {
  var cName = $("#name").val();
  var cEmail = $("#email").val();
  var cNumber = $("#number").val();
  var cProvince = $("#province").val();
  var cMortgageSpecialist = $("#mortgageSpecialist").val();
  sessionStorage.setItem("cName", cName);
  sessionStorage.setItem("cEmail", cEmail);
  sessionStorage.setItem("cNumber", cNumber);
  sessionStorage.setItem("cProvince", cProvince);
  sessionStorage.setItem("cMortgageSpecialist", cMortgageSpecialist);

  // return true if valid
  return true;
}

function btnBack() {
  saveAndValidate();
  history.back();
}

function submitContact() {

  // if input is valid
  if (saveAndValidate()) {
    // flag this form step as finished
    sessionStorage.setItem("doneContactInfo", "true");
    buttonToApply();
  }
  else {
    // warn user input is not valid
    alert("Input not valid.");
  }
}

function buttonToApply () {
    window.location.assign("../apply/apply.html")
}