document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", () => {
    // Toggle hidden class on menu
    menu.classList.toggle("hidden");

    // Change icon/text based on menu visibility
    if (menu.classList.contains("hidden")) {
      menuToggle.textContent = "☰"; // Menu closed
    } else {
      menuToggle.textContent = "✖"; // Menu open
    }
  });
});
