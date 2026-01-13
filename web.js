// Intersection Observer for frame reveal animation
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
