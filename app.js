"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function handleFormSubmission(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        const companyName = document.getElementById('company-name').value;
        const regNumber = document.getElementById('registration-number').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const address = document.getElementById('address').value;
        const businessType = document.getElementById('business-type').value;
        const terms = document.getElementById('terms').checked;
        // validation checks
        if (!companyName || !regNumber || !email || !phone || !password || !confirmPassword || !address || !businessType || !terms) {
            alert('Please fill out all fields.');
            return;
        }
        // Validate Email 
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email.');
            return;
        }
        // Password Validation
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }
        if (password.length < 8) {
            alert('Password must be at least 8 characters.');
            return;
        }
        const formData = {
            id: 1, 
            name: "John Doe", 
            companyName: "Company XYZ",
            regNumber: "98765",
            email: "john@example.com",
            phone: "123-456-7890",
            password: "password123",
            address: "456 Street, City",
            businessType: "Service"
        };
        try {
            const response = yield fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = yield response.json();
            console.log('User Created:', result);
            alert(`User ${companyName} created successfully!`);
        }
        catch (error) {
            console.error('Error:', error);
            alert('There was an issue with the form submission. Please try again.');
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmission);
    }
}
);
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check if dark mode is already set in localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark');
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark');

        // Save the dark mode state in localStorage
        if (body.classList.contains('dark')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});

