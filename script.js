const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const cvButton = document.getElementById('btn');

cvButton.addEventListener('click', () => {
  cvInput.click();
});

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});