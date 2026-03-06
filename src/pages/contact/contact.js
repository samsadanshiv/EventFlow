const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    contactForm.reset();
    successMessage.classList.add('show');
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 5000);
});

const navLinks = document.querySelectorAll('.nav-links a');
const logoSection = document.querySelector('.logo-section');

// Logo click handler
logoSection.addEventListener('click', function(e) {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove('active'));
    const homeLink = document.querySelector('a[href="#home"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }
});

// Navigation links click handler
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            if (document.querySelector(href)) {
                document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Set Contact as active on page load
document.addEventListener('DOMContentLoaded', function() {
    const contactLink = document.querySelector('a[href="#contact"]');
    if (contactLink) {
        contactLink.classList.add('active');
    }
    
    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        updateThemeIcon(true);
    }
});

// Dark mode toggle
const themeToggle = document.querySelector('.theme-toggle');

themeToggle.addEventListener('click', function() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    updateThemeIcon(isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

function updateThemeIcon(isDarkMode) {
    const icon = themeToggle.querySelector('i');
    if (isDarkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// CTA buttons
const ctaButtons = document.querySelectorAll('.cta-btn-primary, .cta-btn-secondary');
ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('This is a demo. Button functionality would be implemented here.');
    });
});

// Sign up button
const signupBtn = document.querySelector('.signup-btn');
signupBtn.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Sign up functionality would be implemented here.');
});

// Student login link
const studentLogin = document.querySelector('.student-login');
studentLogin.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Student login functionality would be implemented here.');
});

// Social icons
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('click', function(e) {
        e.preventDefault();
        const label = this.getAttribute('aria-label');
        alert(`${label} profile would open here.`);
    });
});

// Footer links smooth scroll
document.querySelectorAll('.footer-column a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});
