
let formpic = document.querySelector(".formpic_main");

let formpic1 = document.querySelector(".formpic1");

let formpic2 = document.querySelector(".formpic2");

let picbox2 = new Array(
  "img/farmpage/top.png",
  "img/farmpage/wire.png"
);

let num2 = 0;

formpic1.addEventListener("click", function () {
  num2 = 0;
  formpic.src = picbox2[0];
  formpic.animate([{ opacity: "0" }, { opacity: "1" }], 1300);
});

formpic2.addEventListener("click", function () {
  num2 = 0;
  formpic.src = picbox2[1];
  formpic.animate([{ opacity: "0" }, { opacity: "1" }], 1300);
});