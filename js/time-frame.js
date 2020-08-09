function buttonToLivingStatus () {
    window.location.assign("../apply/livingstatus.html")
}

$(".card").click(function(){
    $(".card").removeClass("active");
    $(this).addClass("active");
});