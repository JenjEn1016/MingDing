window.addEventListener('load', () => {
    // 當頁面載入完成後，等待所有 LOGO 動畫完成（約 1s + 0.5s = 1.5s），再啟動布幕升起動畫
    setTimeout(() => {
      const curtain = document.getElementById('curtain');
      const content = document.getElementById('content');
      curtain.classList.add('animate');
      // 當布幕升起動畫結束後，隱藏遮罩並顯示內容
      curtain.addEventListener('animationend', () => {
        curtain.style.display = 'none';
        content.style.opacity = '1';
        // 解除頁面 overflow 限制
        document.body.style.overflow = 'auto';
      });
    }, 1150);
  });
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