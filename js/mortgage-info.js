function buttonToMortgageInfo () {
    window.location.assign("../apply/mortgageinfo.html")
}

$(".card").click(function(){
    $(".card").removeClass("active");
    $(this).addClass("active");
});