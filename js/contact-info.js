$(document).ready(function () {
  // if user previously entered contact info, ensure it shows when page loads
  var cName = sessionStorage.getItem("cName");
  var cEmail = sessionStorage.getItem("cEmail");
  var cPhone = sessionStorage.getItem("cPhone");
  var cProvince = sessionStorage.getItem("cProvince");
  var cMortgageSpecialist = sessionStorage.getItem("cMortgageSpecialist");
  $("#name").val(cName);
  $("#email").val(cEmail);
  $("#phone").val(cPhone);
  $("#province").val(cProvince);
  $("#mortgageSpecialist").val(cMortgageSpecialist);
});

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

function saveAndValidate() {
  // get and validate variables
  var cName = $("#name").val();
  var cEmail = $("#email").val();
  var cPhone = $("#phone").val();
  var cProvince = $("#province").val();
  var cMortgageSpecialist = $("#mortgageSpecialist").val();

  // save variables to session storage
  sessionStorage.setItem("cName", cName);
  sessionStorage.setItem("cEmail", cEmail);
  sessionStorage.setItem("cPhone", cPhone.toString());
  sessionStorage.setItem("cProvince", cProvince);
  sessionStorage.setItem("cMortgageSpecialist", cMortgageSpecialist);

  // return true if valid
  return true;
}

function btnBack() {
  saveAndValidate();
  history.back();
}

function buttonToApply() {
  window.location.assign("../apply/apply.html")
}