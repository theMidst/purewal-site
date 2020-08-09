function buttonToNumberOfApplicants () {
    window.location.assign("../apply/numberofapplicants.html")
}

$(".card").click(function(){
    $(".card").removeClass("active");
    $(this).addClass("active");
});