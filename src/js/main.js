// main.js
// navbar
fetch('./components/navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;

    // Setup animations and theme after navbar is loaded
    setupMenuToggle();
    setupThemeToggle();
    animateNavbar();
  });

// footer
 fetch('./components/footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });

  // hero-section
   fetch('./components/hero.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('hero-section').innerHTML = data;
  });
  
  function populateServiceSelect() {
  const select = document.getElementById('serviceSelect');
  if (!select) return; // Form not loaded yet
  
  servicesData.forEach(service => {
    const option = document.createElement('option');
    option.value = service.title;
    option.textContent = service.title;
    select.appendChild(option);
  });
}
  
//contact
    fetch('./components/contactform.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('contact').innerHTML = data;
    populateServiceSelect();
  });