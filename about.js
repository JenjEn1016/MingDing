function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
  }
  const ball = document.querySelector('.mouse-ball');
  const clickableElements = document.querySelectorAll('a, button, .clickable');

  // 追蹤鼠標移動
  document.addEventListener('mousemove', (e) => {
    ball.style.left = `${e.pageX}px`;
    ball.style.top = `${e.pageY}px`;
  });

  // 防止鼠標超出視窗
  document.addEventListener('mouseleave', () => {
    ball.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    ball.style.opacity = '1';
  });

  // 鼠標懸停效果
  clickableElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      ball.style.transform = 'translate(-50%, -50%) scale(4)';
      ball.style.background = '#82bccf';
      ball.style.mixBlendMode= 'multiply'; /* 反白效果 */
    });

    element.addEventListener('mouseleave', () => {
      ball.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });
// circulatation
    function $$(selector, context) {
      context = context || document;
      var elements = context.querySelectorAll(selector);
      return Array.prototype.slice.call(elements);
    }

    $$('.circular').forEach(function(el) {
      var NS = "http://www.w3.org/2000/svg";

      var svg = document.createElementNS(NS, "svg");
      svg.setAttribute("viewBox", "0 0 100 100");

      var circle = document.createElementNS(NS, "path");
      circle.setAttribute("d", "M0,50 a50,50 0 1,1 0,1z");
      circle.setAttribute("id", "circle");

      var text = document.createElementNS(NS, "text");
      var textPath = document.createElementNS(NS, "textPath");
      textPath.setAttributeNS("http://www.w3.org/1999/xlink", 'xlink:href', '#circle');
      textPath.textContent = el.textContent;
      text.appendChild(textPath);

      svg.appendChild(circle);
      svg.appendChild(text);

      el.textContent = '';
      el.appendChild(svg);
    });
    // circulatation2
    function $$(selector, context) {
      context = context || document;
      var elements = context.querySelectorAll(selector);
      return Array.prototype.slice.call(elements);
    }

    $$('.circular2').forEach(function(el) {
      var NS = "http://www.w3.org/2000/svg";

      var svg = document.createElementNS(NS, "svg");
      svg.setAttribute("viewBox", "0 0 100 100");

      var circle = document.createElementNS(NS, "path");
      circle.setAttribute("d", "M0,50 a50,50 0 1,1 0,1z");
      circle.setAttribute("id", "circle");

      var text = document.createElementNS(NS, "text");
      var textPath = document.createElementNS(NS, "textPath");
      textPath.setAttributeNS("http://www.w3.org/1999/xlink", 'xlink:href', '#circle');
      textPath.textContent = el.textContent;
      text.appendChild(textPath);

      svg.appendChild(circle);
      svg.appendChild(text);

      el.textContent = '';
      el.appendChild(svg);
    });
    // 點擊外部關閉行動菜單
document.addEventListener('click', (e) => {
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamburger');
  
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('active');
  }
});
document.querySelectorAll('a, button').forEach(element => {
  element.style.position = 'relative';
  element.style.zIndex = '2';
});
function adjustCircular() {
  const circular = document.querySelector('.circular');
  if (window.innerWidth <= 768) {
    circular.style.animation = 'none';
  } else {
    circular.style.animation = 'circle 16s infinite linear';
  }
}
function adjustCircular2() {
  const circular2 = document.querySelector('.circular2');
  if (window.innerWidth <= 768) {
    circular2.style.animation = 'none';
  } else {
    circular2.style.animation = 'circle 16s infinite linear';
  }
}
// 初始化執行
adjustCircular();
// 窗口變化時執行
window.addEventListener('resize', adjustCircular);

// 初始化執行
adjustCircular2();
// 窗口變化時執行
window.addEventListener('resize', adjustCircular2);