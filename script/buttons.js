$(document).ready(function() {
    
    $(".b-accordion article:first").addClass("active");
    $(".b-accordion h3:first").addClass("active-acc-text");
    $(".b-accordion p:not(:first)").hide();

    $(".b-accordion div").click(function() {
        $(this).parent("article").siblings("article").removeClass("active");
        $(this).parent("article").toggleClass("active");

        $(this).next("p").slideToggle("slow");
        $(this).parent("article").siblings("article").children("p:visible").slideUp("slow");

        $(this).children("h3").toggleClass("active-acc-text");
        $(this).parent("article").siblings("article").children("div").children("h3").removeClass("active-acc-text");

    });
});


/*
let flag=true;

window.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById("open-button");
    let h1 = document.getElementById("hidden-1");
    let h2 = document.getElementById("hidden-2");
    let h3 = document.getElementById("hidden-3");
    
    openBtn.addEventListener("click", function () {
        if(flag){
            h1.style.display = "block";
            h2.style.display = "block";
            h3.style.display = "block";
            flag=false;
        }
        else{
            h1.style.display = "none";
            h2.style.display = "none";
            h3.style.display = "none";
            flag=true;
        }
    });
});
*/
