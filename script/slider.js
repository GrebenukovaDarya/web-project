$('.single-item').slick({
    dots: false,
    infinite: true,
    nextArrow: document.querySelector('#my-arrow-next'),
    prevArrow: document.querySelector('#my-arrow-prev'),
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    fade: true,
    cssEase: 'linear'
});

let n=1;
const prevbtn = document.getElementById("my-arrow-prev");
const nextbtn = document.getElementById("my-arrow-next");
let num = document.getElementById("slide-current-number");

prevbtn.addEventListener("click", function () {
    if (n === 1) {
        n = 8;
    } else {
        n -=1;
    }
    num.innerHTML = '0' + n;
});
nextbtn.addEventListener("click", function () {
    if (n === 8) {
        n = 1;
    } else {
        n +=1;
    }
    num.innerHTML = '0' + n;
});
