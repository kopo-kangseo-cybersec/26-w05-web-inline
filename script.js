const menuToggle = document.querySelector('.nav-toggle');
const navigationLinks = document.querySelector('.nav-links');

if (menuToggle && navigationLinks) {
	document.body.classList.add('menu-enhanced');

	const setMenuOpen = (isOpen) => {
		menuToggle.setAttribute('aria-expanded', String(isOpen));
		menuToggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
		navigationLinks.classList.toggle('is-open', isOpen);
	};

	menuToggle.addEventListener('click', () => {
		const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
		setMenuOpen(!isOpen);
	});

	navigationLinks.addEventListener('click', (event) => {
		if (event.target.closest('a')) {
			setMenuOpen(false);
		}
	});

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') {
			setMenuOpen(false);
			menuToggle.focus();
		}
	});
}
