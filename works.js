



// 初始化語言
let currentLang = localStorage.getItem('language') || 'zh-TW';


// 初始化事件監聽
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
});


function filterPortfolio(tag) {
  const items = document.querySelectorAll('.portfolio-item');
  items.forEach(item => {
    const itemTags = item.getAttribute('data-tags');
    if (tag === 'all' || itemTags.includes(tag)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

  const title = document.getElementById('portfolio-title');
  // 從映射表中取得對應的翻譯鍵，如果沒有找到則使用原始 tag
  const translationKey = categoryMapping[tag] || tag;
  title.textContent = translations[currentLang][translationKey] || tag;

  const buttons = document.querySelectorAll('.tag-button');
  buttons.forEach(button => button.classList.remove('active'));
  event.target.classList.add('active');
}
function filterPortfolio(tag) {
  const items = document.querySelectorAll('.portfolio-item');
  items.forEach(item => {
    const itemTags = item.getAttribute('data-tags');
    if (tag === 'all' || itemTags.includes(tag)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

  const title = document.getElementById('portfolio-title');
  title.textContent = tag === 'all' ? translations[currentLang]['all_works'] : tag;

  const buttons = document.querySelectorAll('.tag-button');
  buttons.forEach(button => button.classList.remove('active'));
  event.target.classList.add('active');
}



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