//handles both registration and login
let registerForm = document.getElementById("register-form")
if (registerForm) {
    registerForm.addEventListener("submit", register(e))
}

function register(e) {
    e.preventDefault();
    let firstname = document.getElementById("firstname").value
    let lastname = document.getElementById("lastname").value
    let userName = document.getElementById("username").value
    let password = document.getElementById("pswd").value

    const user = {
        firstName: firstname,
        lastName: lastname,
        userName: userName,
        pswd: password
    }
    console.log(user)
}


let loginForm = document.getElementById("login-form");
if (loginForm) {
    loginForm.addEventListener("submit", login(e));
}

function login(e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("pswd").value;

    const user = {
        userName: username,
        pswd: password
    }
    console.log(user)
}