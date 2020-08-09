function buttonToApply () {
    window.location.assign("../apply/apply.html")
}

$(".card").click(function(){
    $(".card").removeClass("active");
    $(this).addClass("active");
});