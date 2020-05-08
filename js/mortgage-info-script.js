function buttonToMortgageInfo () {
    window.location.assign("../apply/mortgage-info.html")
}

$(".card").click(function(){
    $(".card").removeClass("active");
    $(this).addClass("active");
});