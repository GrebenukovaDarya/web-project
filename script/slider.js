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

$('.autoplay-1').slick({
    arrows: false,
    adaptiveWidth: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    
    responsive: [
        {
            breakpoint: 1000,
            settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 3
            }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 2
          }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
            }
        }
    ]
  });
