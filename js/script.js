//wow.jsの発火
new WOW().init();

// フォント読み込み後bodyとloading画面にクラス付与
$(function () {
  document.fonts.ready.then(function (fontFaceSet) {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
    $('body').addClass("loaded");
  });
})



// ハンバーガーメニュー
$(function () {
  $(".js-hamburger,.js-drawer").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
  });
})

// スムーススクロール
$(function () {
  $('a[href^="#"]').click(function () {
    var header = $('.p-header').innerHeight();
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      //今回はヘッダー文を考慮しない
      scrollTop: position
    },
      400);
  });
});

// ページトップに戻る
$(function () {
  var topBtn = $('#page-top');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 600) {
      topBtn.addClass("active");
    } else {
      topBtn.removeClass("active");
    }
  });

  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});

//モーダルウィンドウ
$(function () {

  $(document).ready(function () {
    const $body = $('body');
    const $modal = $('#js-modal');
    const $modalOpenButton = $('#js-modal-open');
    const $modalCloseButton = $('#js-modal-close');
  
    const openModal = () => {
      $modal.fadeIn();
      $body.css('overflow', 'hidden');
    };
  
    const closeModal = () => {
      $modal.fadeOut();
      $body.css('overflow', 'auto');
    };
  
    const onClickOutside = (event) => {
      if ($modal.is(event.target)) closeModal();
    }
  
    $modalOpenButton.on('click', openModal);
    $modalCloseButton.on('click', closeModal);
    $modal.on('click', onClickOutside);
  });
});


//マイページ利用開閉
$("#js-toggle-box01").hide();
$("#js-toggle01").on("click", function (e) {
  $("#js-toggle-box01").slideToggle('fast');
  if ($(this).hasClass('open')) {
    $(this).removeClass('open');
  } else {
    $(this).addClass('open');
  }
});
$("#js-toggle-box02").hide();
$("#js-toggle02").on("click", function (e) {
  $("#js-toggle-box02").slideToggle('fast');
  if ($(this).hasClass('open')) {
    $(this).removeClass('open');
  } else {
    $(this).addClass('open');
  }
});

//FAQアコーディオン
$(".faq__table dd").hide();
$(".faq__table").on("click", function (e) {
  $('dd', this).slideToggle('fast');
  if ($(this).hasClass('open')) {
    $(this).removeClass('open');
  } else {
    $(this).addClass('open');
  }
});

