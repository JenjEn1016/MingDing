function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('active');
}

// 鼠标控制
const ball = document.querySelector('.mouse-ball');
const clickables = document.querySelectorAll('a, button, [class*="tag"], .gallery-image');

document.addEventListener('mousemove', (e) => {
  ball.style.left = `${e.pageX}px`;
  ball.style.top = `${e.pageY}px`;
});

document.addEventListener('mouseleave', () => ball.style.opacity = '0');
document.addEventListener('mouseenter', () => ball.style.opacity = '1');

clickables.forEach(el => {
  el.addEventListener('mouseenter', () => {
    ball.style.transform = 'translate(-50%, -50%) scale(4)';
    ball.style.backgroundColor = '#82bccf';
    ball.style.mixBlendMode= 'multiply';
  });
  el.addEventListener('mouseleave', () => {
    ball.style.transform = 'translate(-50%, -50%) scale(1)';
  });
});

// 点击外部关闭菜单
document.addEventListener('click', (e) => {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove('active');
  }
});
function openLightbox(imgSrc, altText) {
const overlay = document.getElementById('lightboxOverlay');
const lightboxImg = document.getElementById('lightboxImage');
lightboxImg.src = imgSrc;
lightboxImg.alt = altText;
overlay.style.display = 'flex';
}

function closeLightbox() {
  // 關閉影片燈箱
  lightbox.style.display = 'none';
  
  // 確保影片暫停並重置時間
  videoPlayer.pause();
  videoPlayer.currentTime = 0;

  // 關閉圖片燈箱
  document.getElementById('lightboxOverlay').style.display = 'none';
}

// 點擊事件綁定
document.querySelectorAll('.gallery-image img').forEach(img => {
img.addEventListener('click', () => {
openLightbox(img.dataset.fullsize, img.alt);
});
});

// 點擊遮罩關閉
document.getElementById('lightboxOverlay').addEventListener('click', (e) => {
if(e.target === document.getElementById('lightboxOverlay')) {
closeLightbox();
}
});

// ESC鍵關閉
document.addEventListener('keydown', (e) => {
if(e.key === 'Escape') {
closeLightbox();
}
});

  // JavaScript 部分
     // 獲取元素
const openButtons = document.querySelectorAll('.openButton');
const lightbox = document.getElementById('lightbox');
const videoPlayer = document.getElementById('videoPlayer');


// 點擊按鈕時，顯示燈箱並載入影片
openButtons.forEach(button => {
  button.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    videoPlayer.src = button.getAttribute('data-video-path');
    videoPlayer.load();
  });
});

// 定義關閉燈箱函式
function closeLightbox() {
  lightbox.style.display = 'none';
  document.getElementById('lightboxOverlay').style.display = 'none';
  videoPlayer.pause();
}
document.addEventListener('click', (e) => {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove('active');
  }
});
function openLightbox(imgSrc, altText) {
const overlay = document.getElementById('lightboxOverlay');
const lightboxImg = document.getElementById('lightboxImage');
lightboxImg.src = imgSrc;
lightboxImg.alt = altText;
overlay.style.display = 'flex';
}

// 點擊事件綁定
document.querySelectorAll('.gallery-image img').forEach(img => {
  img.addEventListener('click', () => {
    openLightbox(img.dataset.fullsize, img.alt);
  });
  });
  
  
// 統一的 closeLightbox 函式，會同時檢查影片與圖片燈箱
function closeLightbox() {
  // 關閉影片燈箱
  const videoOverlay = document.getElementById('lightbox');
  if (videoOverlay && videoOverlay.style.display === 'flex') {
    videoOverlay.style.display = 'none';
    const videoPlayer = document.getElementById('videoPlayer');
    if (videoPlayer) {
      videoPlayer.pause();
      videoPlayer.currentTime = 0;
    }
  }
  // 關閉圖片燈箱
  const imageOverlay = document.getElementById('lightboxOverlay');
  if (imageOverlay && imageOverlay.style.display === 'flex') {
    imageOverlay.style.display = 'none';
  }
}

// 為影片燈箱 overlay 添加點擊事件（點擊空白區域關閉）
const videoOverlay = document.getElementById('lightbox');
videoOverlay.addEventListener('click', (e) => {
  if (e.target === videoOverlay) {
    closeLightbox();
  }
});

// 為圖片燈箱 overlay 添加點擊事件（點擊空白區域關閉）
const imageOverlay = document.getElementById('lightboxOverlay');
imageOverlay.addEventListener('click', (e) => {
  if (e.target === imageOverlay) {
    closeLightbox();
  }
});

// 使用 ESC 鍵關閉燈箱
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

// 如果有關閉按鈕 (例如 id="closeButton")，也請綁定事件
const closeButton = document.getElementById('closeButton');
if (closeButton) {
  closeButton.addEventListener('click', () => {
    closeLightbox();
  });
}
//TOP按鈕
   document.addEventListener("DOMContentLoaded", function () {
            const topButton = document.getElementById("topButton");

            window.addEventListener("scroll", function () {
                // 計算滾動距離的百分比
                const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
                
                if (scrollPercentage > 20) {
                    topButton.classList.add("show");
                } else {
                    topButton.classList.remove("show");
                }
            });

            // 平滑滾動回頂部
            topButton.addEventListener("click", function () {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        });