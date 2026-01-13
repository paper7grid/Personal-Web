
const frames = document.querySelectorAll('.frame');

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

frames.forEach(frame => {
  frame.classList.add('reveal');
  observer.observe(frame);
});

// Hide scroll arrow when user scrolls
const scrollIndicator = document.querySelector('.scroll-indicator');
const scrapPaperDecor = document.querySelector('.scrap-paper-decor');
const introSection = document.querySelector('.intro');

window.addEventListener('scroll', () => {
  if (introSection) {
    const introBottom = introSection.offsetTop + introSection.offsetHeight;
    if (window.scrollY > introBottom - window.innerHeight) {
      scrollIndicator.style.opacity = '0';
      scrollIndicator.style.pointerEvents = 'none';
      scrapPaperDecor.style.opacity = '0';
      scrapPaperDecor.style.pointerEvents = 'none';
    } else {
      scrollIndicator.style.opacity = '1';
      scrollIndicator.style.pointerEvents = 'auto';
      scrapPaperDecor.style.opacity = '0.9';
      scrapPaperDecor.style.pointerEvents = 'none';
    }
  }
});
