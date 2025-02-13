// 點擊主按鈕切換展開/收起語言選項
document.getElementById('translate-toggle').addEventListener('click', function() {
  document.querySelector('.floating-translate').classList.toggle('active');
});

// 監聽各語言按鈕的點擊事件 (根據你的翻譯切換邏輯來處理)
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const selectedLang = this.dataset.lang;
    // 此處請根據你的多語言切換邏輯進行語言更新，例如：
    // switchLanguage(selectedLang);
    console.log("切換語言到：" + selectedLang);
  });
});
// 多語言內容字典
const translations = {
  'zh-TW': {
    'all_works': '全部作品',
    'all': '全部',
    'menu_design': '菜單設計',
    'logo': 'Logo',
    'graphic_design': '平面設計',
    'illustration': '插畫',
    'text_design': '文字設計',
    'book_design': '書籍設計',
    'business_card_design': '名片設計',
    'ui_design': 'UI 設計',
    'visual_composition': '視覺合成',
    'joyorder5_ui': 'JoyOrder5 桌邊點餐 | UI 設計',
    'isheng_menu': '伊勝日式料理 | 菜單設計',
    'kiosk_chikee_ui': 'Kiosk 池記燒臘 | UI 設計',
    'kiosk_mountain_coffee_ui': 'Kiosk 山上咖啡 | UI 設計',
    'rabbit_year_red_envelope': "2024 兔年紅包 | 平面設計",
    'good_digital_business_card': "好好用數位 | 名片設計",
    'cangyi_auction_book_painting': "藏逸拍賣會-2023 書畫拍賣 | 書籍設計",
    'cangyi_auction_jewelry_2023': "藏逸拍賣會-2023 珠寶拍賣 | 書籍設計",
    'cangyi_auction_wine_2023': "藏逸拍賣會-2023 酒品拍賣 | 書籍設計",
    'cangyi_auction_invitation': "藏逸拍賣會-拍賣邀請卡 | 平面設計",
    'visual_extension': "視覺延伸物 | 平面設計",
    'cangyi_auction_jewelry_2022': "藏逸拍賣會-2022 珠寶拍賣 | 書籍設計",
    'jurassic_diamond_brand_book_2021': "2021侏羅紀彩鑽品牌書 | 書籍設計",
    'world_music_festival': "世界音樂節 | 平面設計",
    'cocokuma_breakfast_logo': "可可熊早餐店 視覺識別再造 | Logo",
    'design_book_cover_redesign': "《設計》書封重新設計 | 平面設計",
    'taipei_zoo_ticket_redesign': "台北市立動物園票券重製 | 平面設計",
    'kiosk_fireMaster': "Kiosk 火少爺炒飯  | UI 設計"
  },
  'en': {
  'all_works': 'All Works',
  'all': 'All',
  'menu_design': 'Menu Design',
  'logo': 'Logo',
  'graphic_design': 'Graphic Design',
  'illustration': 'Illustration',
  'text_design': 'Text Design',
  'book_design': 'Book Design',
  'business_card_design': 'Business Card Design',
  'ui_design': 'UI Design',
  'visual_composition': 'Visual Composition',
  'joyorder5_ui': 'JoyOrder5 Table Ordering | UI Design',
  'isheng_menu': 'Isheng Japanese Cuisine | Menu Design',
  'kiosk_chikee_ui': 'Kiosk Chikee Roast | UI Design',
  'kiosk_mountain_coffee_ui': 'Kiosk Mountain Coffee | UI Design',
   'rabbit_year_red_envelope': "2024 Rabbit Year Red Envelope | Graphic Design",
  'good_digital_business_card': "Good Digital Use | Business Card Design",
  'cangyi_auction_book_painting': "Cangyi Auction - 2023 Painting & Calligraphy Auction | Book Design",
  'cangyi_auction_jewelry_2023': "Cangyi Auction - 2023 Jewelry Auction | Book Design",
  'cangyi_auction_wine_2023': "Cangyi Auction - 2023 Wine Auction | Book Design",
  'cangyi_auction_invitation': "Cangyi Auction - Auction Invitation Card | Graphic Design",
  'visual_extension': "Visual Extension | Graphic Design",
  'cangyi_auction_jewelry_2022': "Cangyi Auction - 2022 Jewelry Auction | Book Design",
  'jurassic_diamond_brand_book_2021': "2021 Jurassic Colored Diamond Brand Book | Book Design",
  'world_music_festival': "World Music Festival | Graphic Design",
  'cocokuma_breakfast_logo': "Coco Bear Breakfast | Visual Identity Redesign | Logo",
  'design_book_cover_redesign': "Redesign of 'Design' Book Cover | Graphic Design",
  'taipei_zoo_ticket_redesign': "Taipei Zoo Ticket Redesign | Graphic Design",
    'kiosk_fireMaster': "Kiosk Fire Master Fried Rice  | UI Design"
},
'ja': {
  'all_works': 'すべての作品',
  'all': 'すべて',
  'menu_design': 'メニュー設計',
  'logo': 'ロゴ',
  'graphic_design': 'グラフィックデザイン',
  'illustration': 'イラストレーション',
  'text_design': 'テキストデザイン',
  'book_design': '書籍デザイン',
  'business_card_design': '名刺デザイン',
  'ui_design': 'UI デザイン',
  'visual_composition': 'ビジュアル合成',
  'joyorder5_ui': 'JoyOrder5 テーブルオーダー | UI デザイン',
  'isheng_menu': '伊勝日本料理 | メニュー設計',
  'kiosk_chikee_ui': 'Kiosk 池記焼き物 | UI デザイン',
  'kiosk_mountain_coffee_ui': 'Kiosk 山のコーヒー | UI デザイン',
  'rabbit_year_red_envelope': "2024 兎年紅包｜グラフィックデザイン",
  'good_digital_business_card': "好好用數位｜名刺デザイン",
  'cangyi_auction_book_painting': "藏逸拍賣會-2023 書画拍売｜書籍デザイン",
  'cangyi_auction_jewelry_2023': "藏逸拍賣會-2023 宝石拍売｜書籍デザイン",
  'cangyi_auction_wine_2023': "藏逸拍賣會-2023 酒品拍売｜書籍デザイン",
  'cangyi_auction_invitation': "藏逸拍賣會-拍賣招待状｜グラフィックデザイン",
  'visual_extension': "ビジュアルエクステンション｜グラフィックデザイン",
  'cangyi_auction_jewelry_2022': "藏逸拍賣會-2022 宝石拍売｜書籍デザイン",
  'jurassic_diamond_brand_book_2021': "2021 ジュラシックカラーダイヤモンドブランドブック｜書籍デザイン",
  'world_music_festival': "世界音楽祭｜グラフィックデザイン",
  'cocokuma_breakfast_logo': "可可熊朝食店｜ビジュアルアイデンティティ再構築｜ロゴ",
  'design_book_cover_redesign': "『設計』ブックカバー再デザイン｜グラフィックデザイン",
  'taipei_zoo_ticket_redesign': "台北市立動物園チケット再製｜グラフィックデザイン",
    'kiosk_fireMaster': "Kiosk 火少爺チャーハン  | UI デザイン"
}
};

// 初始化語言
let currentLang = localStorage.getItem('language') || 'zh-TW';

// 切換語言函數
function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  applyTranslations();
  updateButtonStyles();
}

// 應用翻譯
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    element.textContent = translations[currentLang][key];
  });
}

// 更新按鈕樣式
function updateButtonStyles() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

// 初始化事件監聽
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
});

// 頁面載入時執行
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  updateButtonStyles();
});
const categoryMapping = {
  'all': 'all_works',
  '菜單設計': 'menu_design',
  'Logo': 'logo',
  '平面設計': 'graphic_design',
  '插畫': 'illustration',
  '文字設計': 'text_design',
  '書籍設計': 'book_design',
  '名片設計': 'business_card_design',
  'UI 設計': 'ui_design',
  '視覺合成': 'visual_composition'
  // 新增分類時，在此處添加新的映射對應
};
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
// function filterPortfolio(tag) {
//   const items = document.querySelectorAll('.portfolio-item');
//   items.forEach(item => {
//     const itemTags = item.getAttribute('data-tags');
//     if (tag === 'all' || itemTags.includes(tag)) {
//       item.style.display = 'block';
//     } else {
//       item.style.display = 'none';
//     }
//   });

//   const title = document.getElementById('portfolio-title');
//   title.textContent = tag === 'all' ? translations[currentLang]['all_works'] : tag;

//   const buttons = document.querySelectorAll('.tag-button');
//   buttons.forEach(button => button.classList.remove('active'));
//   event.target.classList.add('active');
// }



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