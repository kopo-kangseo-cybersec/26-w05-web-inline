document.addEventListener("DOMContentLoaded", () => {
	const nav = document.querySelector("nav");
	const links = nav?.querySelector(".nav-links");

	if (!nav || !links) return;

	let toggle = nav.querySelector(".nav-toggle");

	if (!toggle) {
		toggle = document.createElement("button");
		toggle.className = "nav-toggle";
		toggle.type = "button";
		toggle.setAttribute("aria-label", "메뉴 열기");
		toggle.setAttribute("aria-expanded", "false");
		toggle.innerHTML = "<span></span><span></span><span></span>";
		nav.insertBefore(toggle, links);
	}

	const closeMenu = () => {
		nav.classList.remove("menu-open");
		toggle.setAttribute("aria-expanded", "false");
		toggle.setAttribute("aria-label", "메뉴 열기");
	};

	toggle.addEventListener("click", () => {
		const isOpen = nav.classList.toggle("menu-open");
		toggle.setAttribute("aria-expanded", String(isOpen));
		toggle.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
	});

	links.addEventListener("click", (event) => {
		if (event.target.closest("a")) closeMenu();
	});

	document.addEventListener("click", (event) => {
		if (!nav.contains(event.target)) closeMenu();
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") closeMenu();
	});
});
