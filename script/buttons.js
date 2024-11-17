$(document).ready(function(){
    $(".b-accordion h3:first").addClass("active");
    $(".b-accordion p:not(:first)").hide();
    $(".b-accordion h3").click(function(){
    $(this).next("p").slideToggle("slow")
    .siblings("p:visible").slideUp("slow");
    $(this).toggleClass("active");
    $(this).siblings("h3").removeClass("active");
    });
});

window.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById("open-button");
    let popup = document.getElementById("member");
    //let overlay = document.getElementById("overlay");
    openBtn.addEventListener("click", function () {
        popup.style.display = "block";
        //overlay.classList.add("show");
    });
});
