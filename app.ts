
interface User {
    companyName: string;
    regNumber: string;
    email: string;
    phone: string;
    password: string;
    address: string;
    businessType: string;
}

async function handleFormSubmission(event: Event) {
    event.preventDefault();
    const companyName = (document.getElementById('company-name') as HTMLInputElement).value;
    const regNumber = (document.getElementById('registration-number') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const confirmPassword = (document.getElementById('confirm-password') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const businessType = (document.getElementById('business-type') as HTMLSelectElement).value;
    const terms = (document.getElementById('terms') as HTMLInputElement).checked;

    //  validation checks
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

    const formData: User = {
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
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        console.log('User Created:', result);

        alert(`User ${companyName} created successfully!`);
    } catch (error) {
        console.error('Error:', error);
        alert('There was an issue with the form submission. Please try again.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form') as HTMLFormElement;
    if (form) {
        form.addEventListener('submit', handleFormSubmission);
    }
});
