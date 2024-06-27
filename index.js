document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted successfully!');
        form.reset();
    });
});
