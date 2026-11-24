const nav = document.querySelector(".nav");
const navLinks = nav && nav.querySelector(".nav-links");

if (nav && navLinks) {
    const navToggle = document.createElement("button");
    navToggle.type = "button";
    navToggle.className = "nav-toggle";
    navToggle.setAttribute("aria-label", "메뉴 열기");
    navToggle.setAttribute("aria-expanded", "false");

    if (!navLinks.id) {
        navLinks.id = "nav-links";
    }
    navToggle.setAttribute("aria-controls", navLinks.id);
    navToggle.textContent = "☰";
    nav.insertBefore(navToggle, navLinks);
    nav.classList.add("has-toggle");

    const setMenuOpen = (isOpen) => {
        navLinks.classList.toggle("is-open", isOpen);
        navToggle.setAttribute("aria-expanded", String(isOpen));
        navToggle.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
        navToggle.textContent = isOpen ? "×" : "☰";
    };

    navToggle.addEventListener("click", () => {
        setMenuOpen(navToggle.getAttribute("aria-expanded") !== "true");
    });

    navLinks.addEventListener("click", (event) => {
        if (event.target instanceof Element && event.target.closest("a")) {
            setMenuOpen(false);
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
            setMenuOpen(false);
            navToggle.focus();
        }
    });
}