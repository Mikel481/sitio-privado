const users = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (users.some(user => user.username === username)) {
        errorMessage.textContent = 'El usuario ya existe';
    } else {
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registro exitoso');
        window.location.href = 'index.html';
    }
});
