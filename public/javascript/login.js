const showPass = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass);
    const iconEye = document.getElementById(loginEye);
    
    iconEye.addEventListener('click', () => {
      if (input.type === 'password') {
        input.type = 'text';
        iconEye.classList.add('ri-eye-line');
        iconEye.classList.remove('ri-eye-off-line');
        } 
      else {
        input.type = 'password';
        iconEye.classList.remove('ri-eye-line');
        iconEye.classList.add('ri-eye-off-line');
        }
      });
  }
  showPass('password', 'login-eye');

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.login-form');
    const usernameInput = document.querySelector('#username');
    const emailInput = document.querySelector('#email_id');
    const addressInput = document.querySelector('#address');
    const passwordInput = document.querySelector('#password');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        clearErrorMessages();

        let isValid = true;

        if (!validateUsername(usernameInput.value)) {
            showError(usernameInput, 'Username is required.');
            isValid = false;
        }

        if (!validateEmail(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email.');
            isValid = false;
        }

        if (!validateAddress(addressInput.value)) {
            showError(addressInput, 'Address is required.');
            isValid = false;
        }

        if (!validatePassword(passwordInput.value)) {
            showError(passwordInput, 'Password must be at least 8 characters.');
            isValid = false;
        }

        if (isValid) {
            form.submit();
        }
    });

    function validateUsername(username) {
        return username.trim() !== '';
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateAddress(address) {
        return address.trim() !== '';
    }

    function validatePassword(password) {
        return password.trim().length >= 8;
    }

    function showError(input, message) {
        const errorElement = document.createElement('div');
        errorElement.classList.add('error-message');
        errorElement.textContent = message;
        input.parentElement.appendChild(errorElement);
        input.classList.add('input-error');
    }

    function clearErrorMessages() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(errorMessage => errorMessage.remove());

        const inputs = document.querySelectorAll('.input-error');
        inputs.forEach(input => input.classList.remove('input-error'));
    }
});
