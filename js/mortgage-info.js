function buttonToMortgageAmount () {
    window.location.assign("../apply/mortgageamount.html")
}

$(".card").click(function(){
    $(".card").removeClass("active");
    $(this).addClass("active");
});