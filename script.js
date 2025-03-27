// script.js
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, {
    threshold: 0.2 // Adjust as needed (percentage of element visible)
});

sections.forEach(section => {
    observer.observe(section);
});