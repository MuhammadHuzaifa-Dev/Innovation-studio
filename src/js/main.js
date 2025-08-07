// main.js

fetch('./components/navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;

    // Setup animations and theme after navbar is loaded
    setupMenuToggle();
    setupThemeToggle();
    animateNavbar();
  });
