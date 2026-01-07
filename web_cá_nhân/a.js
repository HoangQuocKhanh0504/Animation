// Scroll animation
const scrollElements = document.querySelectorAll('.scroll-animate');
const elementInView = el => el.getBoundingClientRect().top <= (window.innerHeight || document.documentElement.clientHeight) - 100;
const displayScrollElement = el => el.classList.add('visible');
const handleScrollAnimation = () => scrollElements.forEach(el => {if(elementInView(el)) displayScrollElement(el);});
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// Modal
const detailButtons = document.querySelectorAll('.detail-btn');
detailButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = document.getElementById(btn.dataset.modal);
    modal.style.display = 'flex';
  });
});
const modals = document.querySelectorAll('.modal');
modals.forEach(modal => {
  modal.querySelector('.close').addEventListener('click', () => modal.style.display='none');
  modal.addEventListener('click', e => {if(e.target===modal) modal.style.display='none';});
});

// Smooth scroll for Khám Phá
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});