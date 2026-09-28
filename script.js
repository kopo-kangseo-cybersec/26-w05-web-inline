(() => {
	const navLinks = document.querySelector('nav .nav-links');

	if (!navLinks) return;

	const nav = navLinks.closest('nav');
	const breakpoint = 768;
	const button = document.createElement('button');

	button.type = 'button';
	button.className = 'nav-toggle';
	button.setAttribute('aria-label', '메뉴 열기');
	button.setAttribute('aria-expanded', 'false');
	button.innerHTML = '<span></span><span></span><span></span>';
	nav.insertBefore(button, navLinks);

	const style = document.createElement('style');
	style.textContent = `
		.nav-toggle {
			display: none;
			flex-direction: column;
			gap: 4px;
			padding: 8px;
			border: 0;
			background: transparent;
			cursor: pointer;
		}
		.nav-toggle span {
			display: block;
			width: 24px;
			height: 2px;
			background: currentColor;
		}
		@media (max-width: ${breakpoint}px) {
			.nav-toggle { display: flex; }
			nav .nav-links {
				display: none;
				width: 100%;
			}
			nav .nav-links.is-open { display: flex; }
		}
	`;
	document.head.appendChild(style);

	const closeMenu = () => {
		navLinks.classList.remove('is-open');
		button.setAttribute('aria-expanded', 'false');
		button.setAttribute('aria-label', '메뉴 열기');
	};

	button.addEventListener('click', () => {
		const isOpen = navLinks.classList.toggle('is-open');
		button.setAttribute('aria-expanded', String(isOpen));
		button.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
	});

	navLinks.addEventListener('click', (event) => {
		if (event.target.closest('a')) closeMenu();
	});

	window.addEventListener('resize', () => {
		if (window.innerWidth > breakpoint) closeMenu();
	});
})();
