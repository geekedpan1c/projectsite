document.addEventListener("DOMContentLoaded", () => {
    // 🌙 Theme toggle
    const toggleButton = document.getElementById("theme-toggle");
    if (toggleButton) {
      toggleButton.addEventListener("click", () => {
        const currentTheme = document.body.getAttribute("data-theme") || "light";
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        document.body.setAttribute("data-theme", newTheme);
      });
    }
  
    // 🔁 Page transition fade-in
    document.body.classList.add("loaded");
  
    // 🌀 Scroll reveal effect
    const revealEls = document.querySelectorAll(".scroll-reveal");
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    revealEls.forEach(el => revealObserver.observe(el));
  
    // 🍔 Mobile nav toggle
    const menuToggle = document.getElementById("mobile-menu-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
      });
    }
  
    // 🖼️ Lightbox gallery
    const lightboxOverlay = document.getElementById("lightbox-overlay");
    const lightboxImg = document.getElementById("lightbox-img");
    const triggers = document.querySelectorAll(".lightbox-trigger");
  
    triggers.forEach(trigger => {
      trigger.addEventListener("click", () => {
        lightboxImg.src = trigger.src;
        lightboxOverlay.style.display = "flex";
      });
    });
  
    lightboxOverlay.addEventListener("click", () => {
      lightboxOverlay.style.display = "none";
    });
  });
  