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


  fetch('./components/footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;

    // Setup animations and theme after navbar is loaded
 
  });