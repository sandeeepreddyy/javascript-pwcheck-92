function check() {
    const pwd = document.getElementById('pwd').value;
    alert(pwd.length >= 8 ? 'Strong' : 'Weak');
}