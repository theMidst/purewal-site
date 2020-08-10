
function submitContact() {
  var cName = $("#name").val();
  var cEmail = $("#email").val();
  var cNumber = $("#number").val();
  var cProvince = $("#province").val();
  var cMortgageSpecialist = $("#mortgageSpecialist").val();
  var doneContactInfo = true;
  sessionStorage.setItem("cName", cName);
  sessionStorage.setItem("cEmail", cEmail);
  sessionStorage.setItem("cNumber", cNumber);
  sessionStorage.setItem("cProvince", cProvince);
  sessionStorage.setItem("cMortgageSpecialist", cMortgageSpecialist);
  sessionStorage.setItem("doneContactInfo", doneContactInfo);
}

function buttonToApply () {
    window.location.assign("../apply/apply.html")
}