
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contact-form-id');
const messageDiv = document.getElementById('form-message');

function toggleMenu() {
    if (!navLinks || !menuButton) return;
    navLinks.classList.toggle('open');
    const isExpanded = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isExpanded);
    menuButton.innerHTML = isExpanded ? '✕' : '☰';
}

if (menuButton) menuButton.addEventListener('click', toggleMenu);

// Close menu on link click for mobile UX
if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('open')) toggleMenu();
        });
    });
}




if (contactForm && messageDiv) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const nameInput = document.getElementById('name').value.trim();
        const emailInput = document.getElementById('email').value.trim();

        if (nameInput === '' || emailInput === '') {
            messageDiv.textContent = 'Please fill out all required fields.';
            messageDiv.style.color = 'red';
        } else {
            messageDiv.textContent = 'Thank you for your message! I will be in touch shortly.';
            messageDiv.style.color = 'green';
            contactForm.reset();
        }
    });
}
