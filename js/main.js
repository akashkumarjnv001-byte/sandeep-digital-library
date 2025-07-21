// js/main.js

// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Simple Alert on Contact Page Form Submit
document.addEventListener("DOMContentLoaded", function() {
    const joinForm = document.querySelector('#join-form form');
    const feedbackForm = document.querySelector('#feedback-box form');

    if (joinForm) {
        joinForm.addEventListener('submit', function() {
            alert("✅ Thanks for joining! We'll contact you soon.");
        });
    }

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function() {
            alert("✅ Thanks for your feedback!");
        });
    }
});