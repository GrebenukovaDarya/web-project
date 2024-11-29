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

$(".slider-1").slick({
    dots: false,
    infinite: true,
    arrows: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 1400,
            settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 6
            }
        },
        {
            breakpoint: 1000,
            settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 4
            }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 3.1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 2.5
          }
        }
      ],
    slidesToShow: 7.8,
    slidesToScroll: 1,
  });

  $(".slider-2").slick({
    dots: false,
    infinite: true,
    arrows: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 1400,
            settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 6.4
            }
        },
        {
            breakpoint: 1000,
            settings: {
              arrows: false,
              centerMode: true,
              slidesToShow: 4.4
            }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 3.4
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 2.2
          }
        }
      ],
    slidesToShow: 7.3,
    slidesToScroll: 1,
  });
