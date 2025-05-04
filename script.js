// Obtener los elementos del DOM
const passwordField = document.getElementById('password');
const lengthInput = document.getElementById('length');
const includeNumbers = document.getElementById('include-numbers');
const includeSpecial = document.getElementById('include-special');
const includeUppercase = document.getElementById('include-uppercase');
const generateButton = document.getElementById('generate');
const copyButton = document.getElementById('copy');

// Función para generar una contraseña aleatoria
function generatePassword() {
    const length = parseInt(lengthInput.value);
    const numbers = '0123456789';
    const specials = '!@#$%^&*()_+[]{}|;:,.<>?';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';

    let characters = lowercase;
    if (includeNumbers.checked) characters += numbers;
    if (includeSpecial.checked) characters += specials;
    if (includeUppercase.checked) characters += uppercase;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    passwordField.value = password;
}

// Función para copiar la contraseña al portapapeles
function copyToClipboard() {
    passwordField.select();
    document.execCommand('copy');
}

// Event listeners
generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyToClipboard);
