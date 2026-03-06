// Toggle password visibility for specific ID
function togglePass(id) {
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}

// Handle Form Submission
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const pass = document.getElementById('pass').value;
    const confirm = document.getElementById('confirmPass').value;

    if (pass !== confirm) {
        alert("Passwords do not match!");
        return;
    }

    alert("Account creation successful!");
});