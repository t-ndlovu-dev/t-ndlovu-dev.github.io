// Contact form validation for t-ndlovu-dev.github.io
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    if (!form) return; // only run on pages that have the form

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // stop actual submission (demo)
        clearErrors();
        let isValid = true;

        // Name – must not be empty
        const name = document.getElementById('name').value.trim();
        if (name === '') {
            showError('nameError', 'Please enter your full name.');
            isValid = false;
        }

        // Email – must match a basic pattern
        const email = document.getElementById('email').value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showError('emailError', 'Please enter a valid email address.');
            isValid = false;
        }

        // Reason – must select one
        const reason = document.getElementById('reason').value;
        if (reason === '') {
            showError('reasonError', 'Please select a reason for contacting me.');
            isValid = false;
        }

        // Message – if provided, must be at least 10 characters
        const message = document.getElementById('message').value.trim();
        if (message !== '' && message.length < 10) {
            showError('messageError', 'Your message must be at least 10 characters.');
            isValid = false;
        }

        // If all checks pass, show demo success
        if (isValid) {
            alert('Thank you for your message! (Demo – no data was sent.)');
            form.reset();
        }
    });
});

// Helper: show error message next to the field
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

// Helper: clear all previous error messages
function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(function (error) {
        error.textContent = '';
    });
}