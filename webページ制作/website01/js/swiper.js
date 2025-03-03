// プログレスバー用の変数
const bar = document.querySelector(".bar span");

//スワイパ―設定
const mySwiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  effect: "fade", //追加 フェード機能をONにする
  speed: 2000,

  // プログレスバースタート
  on: {
    slideChangeTransitionStart: function () {
      (bar.style.transitionDuration = "0s"),
        (bar.style.transform = "scaleX(0)");
    },
    slideChangeTransitionEnd: function () {
      (bar.style.transitionDuration = 4000 + "ms"),
        (bar.style.transform = "scaleX(1)");
    },
  },
});

const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination", //必須の設定：ページネーションのclass指定
    type: "bullets",
    clickable: "clickable",
  },
  loop: true, //繰り返し指定
  spaceBetween: 10, //スライド感の余白

  slidesPerView: 3, // コンテナ内に表示させるスライド数（CSSでサイズ指定する場合は 'auto'）
  spaceBetween: 20, // スライド間の余白（px）
  centeredSlides: true,
  speed: 1200,

  autoplay: {
    delay: 3000, // 次のスライドに切り替わるまでの時間（ミリ秒）
  },
  breakpoints: {
    // ブレークポイント
    500: {
      // 画面幅600px以上で適用
      slidesPerView: 1,
    },
    1025: {
      // 画面幅1025px以上で適用
      slidesPerView: 4,
      spaceBetween: 32,
    },
  },
  grabCursor: true, // PCでマウスカーソルを「掴む」マークにする
});
