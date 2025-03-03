document.getElementById('signup-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    let username = document.getElementById('signup-username').value;
    let password = document.getElementById('signup-password').value;
    localStorage.setItem(username, password);
    alert('User registered!');
    window.location.href = 'login.html';
});

document.getElementById('login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;
    if (localStorage.getItem(username) === password) {
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'profile.html';
    } else {
        alert('Invalid login');
    }
});

function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'index.html';
}