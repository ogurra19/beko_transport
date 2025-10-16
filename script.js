// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);

// Update theme toggle button and logo
function updateThemeToggle() {
    const isDark = body.getAttribute('data-theme') === 'dark';
    themeToggle.innerHTML = isDark
        ? '<i class="fas fa-sun sun-icon"></i>'
        : '<i class="fas fa-moon moon-icon"></i>';

    // Update hero logo based on theme
    const heroLogo = document.querySelector('.hero-logo');
    if (heroLogo) {
        heroLogo.src = isDark ? 'logo.png' : 'logo.jpeg';
    }
}

updateThemeToggle();

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggle();
});

// Logo is already set in HTML, no need for upload functionality

// Contact form handling with WhatsApp
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || phone === '' || message === '') {
        showNotification('Ju lutem plotësoni të gjitha fushat.', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showNotification('Ju lutem vendosni një adresë email të vlefshme.', 'error');
        return;
    }

    if (!isValidPhone(phone)) {
        showNotification('Ju lutem vendosni një numër telefoni të vlefshëm.', 'error');
        return;
    }

    // Format message for WhatsApp
    const whatsappMessage = `Emri: ${name}%0AEmail: ${email}%0ATelefon: ${phone}%0AMesazhi: ${message}`;
    const whatsappURL = `https://wa.me/355684343004?text=${whatsappMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    showNotification('Mesazhi është hapur në WhatsApp. Ju lutem dërgojeni atje.', 'success');
    contactForm.reset();
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
    return phoneRegex.test(phone);
}

function showNotification(message, type) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Style the notification
    notification.style.position = 'fixed';
    notification.style.top = '100px';
    notification.style.right = '20px';
    notification.style.padding = '16px 24px';
    notification.style.borderRadius = '8px';
    notification.style.fontWeight = '600';
    notification.style.zIndex = '9999';
    notification.style.maxWidth = '400px';
    notification.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
    notification.style.animation = 'slideInRight 0.3s ease-out';

    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        notification.style.color = 'white';
    } else {
        notification.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
        notification.style.color = 'white';
    }

    // Add to body
    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Add notification animations to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.service-card, .feature-item, .value-item, .info-item').forEach(el => {
    observer.observe(el);
});

// Hero background is static, no need for dynamic updates

// "Kërko Sherbim" button functionality - scroll to contact section
document.querySelectorAll('.cta-button, .btn-primary').forEach(button => {
    if (button.textContent.trim() === 'Kërko Sherbim' || button.textContent.trim() === 'Kerko Sherbim') {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});
