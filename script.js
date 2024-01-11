document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var passwordLength = document.getElementById('passwordLength').value;
    if (passwordLength < 8) {
        alert("Password length should be 8 or more.");
    } else {
        generatePassword(passwordLength);
    }
});

function generatePassword(length) {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?-=[]\;,./';
    var password = '';
    for (var i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    // document.getElementById('passwordDisplay').innerText = "Generated password: " + password;
    document.getElementById('passwordDisplay').innerHTML = `
    <div class="alert alert-primary" role="alert">
       ${password}
    </div>`;

}
