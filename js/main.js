document.addEventListener('DOMContentLoaded', function() {
  // 要素の取得
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.navi');
  const mask = document.getElementById('mask');
  const pagetop = document.getElementById('to-top');

  if (hamburger && nav && mask) {
    // ハンバーガーメニューのクリックイベント
    hamburger.addEventListener('click', function() {
      nav.classList.toggle('open'); // ナビゲーションにopenクラスをトグル
      mask.classList.toggle('active'); // マスクにactiveクラスをトグル
      hamburger.classList.toggle('open'); // ハンバーガーアイコンにopenクラスをトグル
    });

    // マスクのクリックイベント
    mask.addEventListener('click', function() {
      nav.classList.remove('open'); // ナビゲーションのopenクラスを削除
      mask.classList.remove('active'); // マスクのactiveクラスを削除
      hamburger.classList.remove('open'); // アイコンのクラスを削除
    });

    // リンクをクリックした時にメニューを閉じる
    const navLinks = document.querySelectorAll('.navi a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        nav.classList.remove('open'); // ナビゲーションのopenクラスを削除
        mask.classList.remove('active'); // マスクのactiveクラスを削除
        hamburger.classList.remove('open'); // アイコンのクラスを削除
      });
    });
  }

  // トップに戻るボタンの処理
  if (pagetop) {
    pagetop.style.display = 'none';

    window.addEventListener('scroll', function() {
      if (window.scrollY > 700) {
        pagetop.style.display = 'block';
      } else {
        pagetop.style.display = 'none';
      }
    });

    pagetop.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
