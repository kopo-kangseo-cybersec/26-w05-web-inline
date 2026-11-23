document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links a');

  // 햄버거 버튼 클릭 시 메뉴 열기/닫기 토글
  hamburger.addEventListener('click', () => {
    const isExpanded = navLinks.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
  });

  // 모바일에서 메뉴 링크 클릭 시 자동으로 메뉴 닫기
  links.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
});