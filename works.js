function sortPortfolio(order, btn) {
  // 更新按鈕的 .active
  const tagButtons = document.querySelectorAll('.tag-button');
  tagButtons.forEach(button => button.classList.remove('active'));
  btn.classList.add('active');

  // 更新提示文字（假設提示文字為作品標題，可根據需求調整）
  const title = document.getElementById('portfolio-title');
  title.textContent = order === 'asc' ? '年份:升序' : '年份:降序';

  const container = document.getElementById('portfolio');
  const items = Array.from(container.getElementsByClassName('portfolio-item'));

  // 根據 data-year 進行排序
  items.sort((a, b) => {
    const yearA = parseInt(a.getAttribute('data-year'), 10);
    const yearB = parseInt(b.getAttribute('data-year'), 10);
    return order === 'asc' ? yearA - yearB : yearB - yearA;
  });

  // 重新插入排序後的項目
  container.innerHTML = '';
  items.forEach(item => container.appendChild(item));
}

// 初始化語言
let currentLang = localStorage.getItem('language') || 'zh-TW';


// 初始化事件監聽
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
});


function filterPortfolio(tag, btn) {
  // 移除所有按鈕的 active，再設定目前點擊的按鈕
  const tagButtons = document.querySelectorAll('.tag-button');
  tagButtons.forEach(button => button.classList.remove('active'));
  btn.classList.add('active');

  // 更新上方提示文字
  const title = document.getElementById('portfolio-title');
  title.textContent = tag === 'all' ? '全部作品' : tag;

  // 根據選取的 tag 顯示或隱藏作品項目
  const container = document.getElementById('portfolio');
  const items = container.getElementsByClassName('portfolio-item');

  for (let item of items) {
    // 取得該作品的所有 tag，移除前後空格再比對
    const tags = item.getAttribute('data-tags').split(',').map(t => t.trim());
    if (tag === 'all' || tags.includes(tag)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  }
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