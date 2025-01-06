document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", function(event) {
        let valid = true;

        // Validate name
        if (nameInput.value.trim() === "") {
            alert("Name is required.");
            valid = false;
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            alert("Please enter a valid email address.");
            valid = false;
        }

        // Validate message
        if (messageInput.value.trim() === "") {
            alert("Message is required.");
            valid = false;
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});