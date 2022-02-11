document.getElementById('login-btn').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const passwordField = document.getElementById('user-password');

    const userEmail = emailField.value;
    const userPass = passwordField.value;

    if (userEmail == 'sontan' && userPass == '1234'){
        window.location.href ='banking.html';
    }
    else{
        alert('invalid username or password :D');
    }
})