document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.banner-slide');
    const totalSlides = slides.length;

    function showNextSlide() {
        slides[currentIndex].classList.remove('active');
        
        currentIndex = (currentIndex + 1) % totalSlides;
        
        slides[currentIndex].classList.add('active');
    }

    slides[currentIndex].classList.add('active');

    setInterval(showNextSlide, 3000);
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const interest = document.getElementById('interest').value;
    const message = document.getElementById('message').value.trim();

    if (!name) {
        alert('Name is required!');
        return; 
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address!');
        return;
    }

    if (!interest) {
        alert('Please select an interest from the dropdown!');
        return;
    }

    if (!message) {
        alert('Message cannot be empty!');
        return;
    }

    alert('Thank you for your submission, ' + name + '! Our sales team will contact you within 24 hours.');
    event.target.reset(); 
});

function validateEmail(email) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}