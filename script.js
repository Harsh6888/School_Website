// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const helpUsButton = document.getElementById('helpUsButton');
    const helpUsForm = document.getElementById('helpUsForm');
    const helpForm = document.getElementById('helpForm');

    // Toggle help form visibility
    helpUsButton.addEventListener('click', () => {
        helpUsForm.style.display = helpUsForm.style.display === 'block' ? 'none' : 'block';
    });

    // Handle form submission
    helpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you can add the logic to handle form submission, such as sending the data to a server
        alert('Thank you for your message!');
        helpUsForm.style.display = 'none';
        helpForm.reset();
    });
});
