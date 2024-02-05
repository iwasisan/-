$(function () {
  $(".slick").slick({
    autoplay: true,
    fade: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    speed: 600,
  });
})

$(function () {
  $(".slider img").click(function () {
    const imgSrc = $(this).attr('src');
    $(".modal-img").attr('src', imgSrc);
    $(".modal").fadeIn();
    return false;
  })

  $(".close-btn").click(function () {
    $(".modal").fadeOut();
    return false;
  });
})

$(function () {
  $('header a[href^= "#"]').click(function () {
    const speed = 800;
    let href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;

    $("html,body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});


const topbtn = document.querySelector(".top_button img");

const icon = document.querySelector(".header_icon");

topbtn.addEventListener("click", function () {
  icon.scrollIntoView({
    behavior:"smooth",
  })
})


let mypic = document.querySelector(".mypic");

let minipic1 = document.querySelector(".mypic1");

let minipic2 = document.querySelector(".mypic2");

let minipic3 = document.querySelector(".mypic3");

let minipic4 = document.querySelector(".mypic4");

let picbox = new Array("img/cafepage/top.png", "img/cafepage/news.png", "img/cafepage/menu.png", "img/cafepage/concept.png");

let num = 0;

minipic1.addEventListener("click", function () {
  num = 0;
  mypic.src = picbox[0];
  mypic.animate([{ opacity: "0" }, { opacity: "1" }], 1300);
})


minipic2.addEventListener("click", function () {
  num = 0;
  mypic.src = picbox[1];
  mypic.animate([{ opacity: "0" }, { opacity: "1" }], 1300);
})


minipic3.addEventListener("click", function () {
  num = 0;
  mypic.src = picbox[2];
  mypic.animate([{ opacity: "0" }, { opacity: "1" }], 1300);
});


minipic4.addEventListener("click", function () {
  num = 0;
  mypic.src = picbox[3];
  mypic.animate([{ opacity: "0" }, { opacity: "1" }], 1300);
});

