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
