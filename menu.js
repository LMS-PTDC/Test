document.addEventListener("DOMContentLoaded", () => {
  // 🔷 Highlight active link based on current page
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    link.classList.toggle("active", href === currentPage);

    // 🔹 Auto-close nav when a link is clicked (mobile-friendly)
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
      hamburger.setAttribute("aria-expanded", "false");
      if (menuIcon && closeIcon) {
        menuIcon.style.display = "inline";
        closeIcon.style.display = "none";
      }
      document.body.style.overflow = ""; // Restore scroll
    });
  });

  // 🔷 Toggle mobile nav menu
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-links");
  const menuIcon = document.querySelector(".menu-icon");
  const closeIcon = document.querySelector(".close-icon");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("show");
      hamburger.setAttribute("aria-expanded", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";

      if (menuIcon && closeIcon) {
        menuIcon.style.display = isOpen ? "none" : "inline";
        closeIcon.style.display = isOpen ? "inline" : "none";
      }
    });

    // 🔹 Close nav if clicked outside
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove("show");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
        if (menuIcon && closeIcon) {
          menuIcon.style.display = "inline";
          closeIcon.style.display = "none";
        }
      }
    });

    // 🔹 Close nav on ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        navMenu.classList.remove("show");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
        if (menuIcon && closeIcon) {
          menuIcon.style.display = "inline";
          closeIcon.style.display = "none";
        }
      }
    });
  }
});

