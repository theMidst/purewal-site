// when page loads
$(document).ready(function () {
  // colour each nav section the user has completed
  if (sessionStorage.getItem("doneContactInfo") === "true") {
    changeArrowColor(1);
  }
  if (sessionStorage.getItem("doneMortgageInfo") === "true") {
    changeArrowColor(2);
  }
  if (sessionStorage.getItem("doneReviewTerms") === "true") {
    changeArrowColor(3);
  }
});

// when user clicks the submit button
function submitApplication() {
  // if user is finished all sections
  if (userIsFinished()) {
    // gather applicant's variables for sending through AJAX
    var applicationData = {
      // contact info
      name: sessionStorage.getItem("cName"),
      email: sessionStorage.getItem("cEmail"),
      phone: sessionStorage.getItem("cPhone"),
      province: sessionStorage.getItem("cProvince"),
      mortgageSpecialist: sessionStorage.getItem("cMortgageSpecialist"),
      // mortgage info
      mortgageType: sessionStorage.getItem("mortgageType"),
      mortgageAmount: sessionStorage.getItem("mortgageAmount"),
      timeFrame: sessionStorage.getItem("timeFrame"),
      livingStatus: sessionStorage.getItem("livingStatus"),
      numberOfApplicants: sessionStorage.getItem("numberOfApplicants")
    };

    // send AJAX request to PHP and save result
    var request = $.ajax({
      // dataType: "json",
      url: "apply-email.php",
      type: "post",
      data: applicationData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR) {
      $('#output').html("Application submitted successfully.");
      $("#output").show();
      // Log a message to the console
      console.log("Application submission success: " + jqXHR.status + ", text: " + jqXHR.statusText + ", response text: " + jqXHR.responseText);//response.success + ", " + textStatus);
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown) {
      $("#output").html("Application submission failed. Please call us at (905) 281-3555 or try again later.");
      $("#output").show();
      // Log the error to the console
      console.error("Error sending email: " + errorThrown + ", status: " + textStatus);
    });

    // Callback handler that will be called regardless of success
    // request.always(function () {
    // });
  }
  // else: user is not finished application
  else {
    $("#output").removeClass("alert-success");
    $("#output").addClass("alert-danger");
    $("#output").text("You must complete each section prior to submitting your application.");
  }
}

function btnToHome() {
  window.location.assign("../index.html");
}

function buttonToContactInfo() {
  window.location.assign("../apply/contactinfo.html");
}

function buttonToMortgageInfo() {
  window.location.assign("../apply/mortgageinfo.html");
}

function buttonToTermsConditions() {
  window.location.assign("../apply/termsconditions.html");
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

// returns true if user has completed the application and is ready to submit, false otherwise
function userIsFinished() {
  // if user has completed all sections
  if (window.sessionStorage !== undefined
    && sessionStorage.getItem("doneContactInfo") === "true"
    && sessionStorage.getItem("doneMortgageInfo") === "true"
  /*&& sessionStorage.getItem("doneReviewTerms") === "true"*/) {
    return true;
  } else {
    return false;
  }
}