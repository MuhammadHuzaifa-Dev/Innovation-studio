// components.js

// Toggle mobile menu with animation
// Toggle mobile menu with animation
function setupMenuToggle() {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  const nav = document.getElementById("nav");

  let menuOpen = false;

  menuToggle.addEventListener("click", () => {
    const isOpen = menuOpen;
    menuOpen = !menuOpen;

    // Animate toggle icon rotation
    anime({
      targets: menuToggle,
      rotate: menuOpen ? 90 : 0,
      duration: 400,
      easing: "easeInOutSine",
      complete: () => {
        menuToggle.textContent = menuOpen ? "✖" : "☰";
      },
    });

    // Animate menu open/close
    anime({
      targets: "#menu",
      opacity: isOpen ? [1, 0] : [0, 1],
      translateY: isOpen ? [-10, -20] : [-20, 0],
      duration: 300,
      easing: "easeInOutQuad",
      begin: () => {
        if (!isOpen) {
          menu.classList.remove("hidden");
          menu.classList.add("dark:shadow-[0_10px_16px_rgba(112,228,170,0.4)]");
          menu.classList.add("shadow-[0_10px_16px_rgba(112,228,170,0.4)]");
          menu.classList.add("dark:bg-[#04060b]");
          nav.classList.remove("shadow-[0_10px_16px_rgba(112,228,170,0.4)]");
        }
      },
      complete: () => {
        if (isOpen) {
          menu.classList.add("hidden");
          menu.classList.remove(
            "dark:shadow-[0_10px_16px_rgba(112,228,170,0.4)]"
          );
          menu.classList.remove("shadow-[0_10px_16px_rgba(112,228,170,0.4)]");
          nav.classList.add("shadow-[0_10px_16px_rgba(112,228,170,0.4)]");
        }
      },
    });
  });
}

// Theme toggle with anime.js and localStorage
function setupThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  const htmlEl = document.documentElement;

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    htmlEl.classList.add("dark");
    toggleBtn.textContent = "☀️";
  } else {
    htmlEl.classList.remove("dark");
    toggleBtn.textContent = "🌙";
  }

  toggleBtn.addEventListener("click", () => {
    const isDark = htmlEl.classList.contains("dark");

    anime({
      targets: "body",
      opacity: [1, 0.85, 1],
      duration: 300,
      easing: "easeInOutQuad",
    });

    if (isDark) {
      htmlEl.classList.remove("dark");
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "🌙";
    } else {
      htmlEl.classList.add("dark");
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "☀️";
    }
  });
}

// Animate navbar on load
function animateNavbar() {
  anime({
    targets: "#navbar nav",
    opacity: [0, 1],
    translateY: [-20, 0],
    duration: 500,
    easing: "easeOutQuad",
  });
}

//Services and Projects card component loop
function renderCards(type, data) { 
  let container;
  let itemsToShow;

  if (document.getElementById(`home-${type}`)) {
    container = document.getElementById(`home-${type}`);
    itemsToShow = 3;
  } 
  else if (document.getElementById(`${type}-container`)) {
    container = document.getElementById(`${type}-container`);
    itemsToShow = data.length;
  }

  if (!container) return;

  data.slice(0, itemsToShow).forEach(item => {
    const card = document.createElement("div");
    card.innerHTML = `
      <div class="bg-[#245053] dark:bg-[#07161f] shadow-lg rounded-lg overflow-hidden sm:min-w-[350px] sm:h-[400px]  max-w-[300px] transform transition sm:hover:scale-105">
        <img
          src="${item.image}"
          alt="${item.title}"
          class="w-full sm:h-72 h-56 object-fill rounded-t-lg"
        />
        <div class="p-4">
          <h3 class="text-lg text-white font-bold mt-2">${item.title}</h3>
          <p class="text-gray-300">${item.description}</p>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Run on page load
document.addEventListener("DOMContentLoaded", () => {
  renderCards("services", servicesData);
  renderCards("projects", projectsData);
});
