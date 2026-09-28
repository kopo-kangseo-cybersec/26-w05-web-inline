document.addEventListener('DOMContentLoaded', () => {
	const nav = document.querySelector('.nav');
	const toggleButton = document.querySelector('.nav-toggle');
	const navLinks = document.querySelector('.nav-links');

	if (!nav || !toggleButton || !navLinks) {
		return;
	}

	const setMenuOpen = (isOpen) => {
		navLinks.classList.toggle('is-open', isOpen);
		toggleButton.setAttribute('aria-expanded', String(isOpen));
		toggleButton.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
	};

	toggleButton.addEventListener('click', () => {
		setMenuOpen(toggleButton.getAttribute('aria-expanded') !== 'true');
	});

	navLinks.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', () => setMenuOpen(false));
	});

	document.addEventListener('click', (event) => {
		if (!nav.contains(event.target)) {
			setMenuOpen(false);
		}
	});

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && toggleButton.getAttribute('aria-expanded') === 'true') {
			setMenuOpen(false);
			toggleButton.focus();
		}
	});

	window.matchMedia('(max-width: 560px)').addEventListener('change', () => setMenuOpen(false));
});
