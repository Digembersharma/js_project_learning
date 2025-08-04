 let generate = document.getElementById('generate-btn').addEventListener("click", generatePassword);

const generatePassword = () => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";  // Fixed typo in alphabet
    const specialChars = "!@#$%^&*()_+";
    const numbers = "1234567890";
    
    const length = document.getElementById('length').value;
    const uppercaseInclude = document.getElementById('uppercase').checked;
    const lowercaseInclude = document.getElementById('lowercase').checked;
    const numbersInclude = document.getElementById('numbers').checked;
    const symbolsInclude = document.getElementById('symbols').checked;

    document.getElementById('length-value').textContent = length;

    // Create character pool based on selected options
    let charPool = "";
    if (uppercaseInclude) charPool += uppercase;
    if (lowercaseInclude) charPool += lowercase;
    if (numbersInclude) charPool += numbers;
    if (symbolsInclude) charPool += specialChars;

    // Check if at least one character type is selected
    if (charPool.length === 0) {
        alert("Please select at least one character type!");
        return;
    }

    // Generate password
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }

    // Display the generated password
    document.getElementById('password').value = password;
}

// Add copy functionality
document.getElementById('copy-btn').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
});

// Update length display when slider changes
document.getElementById('length').addEventListener('input', function() {
    document.getElementById('length-value').textContent = this.value;
});