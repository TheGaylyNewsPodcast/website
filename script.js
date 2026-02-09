// script.js

// Function to validate form fields
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('All fields are required!');
        return false;
    }

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address!');
        return false;
    }

    return true;
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    if (validateForm()) {
        // Proceed with form submission or AJAX request
        alert('Form submitted successfully!');
        // Here you can add logic to send form data to a server
    }
}

// Add event listeners to the form
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', handleSubmit);
}