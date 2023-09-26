var loginContainer = document.querySelector(".login");
var signUpContainer = document.querySelector(".signup");

var email = localStorage.getItem("email");
var username = localStorage.getItem("username");
var password = localStorage.getItem("password");

if (email !== null || username !== null || password !== null) {
    localStorage.setItem("profile", "true")
} else {
    localStorage.setItem("profile", "false")
}

function isValid(inputString) {
    const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    var vaild;

    if (pattern.test(inputString)) {
        vaild = true;
    } else {
        vaild = false;
    }

    return vaild;
}

function signUpForm() {
    var profile = localStorage.getItem("profile")
    var signUpEmail = document.getElementById("email_signup").value;
    var signUpUsername = document.getElementById("username_signup").value;
    var signUpPassword = document.getElementById("password_signup").value;

    if (profile === "true") {
        alert("You already have a account created.")
        signUpContainer.style.display = "none";
        return loginContainer.style.display = "flex";
    }

    if (!signUpEmail || !signUpPassword || !signUpUsername) {
        alert("Invaild Credentials");
        return window.location.reload();
    }

    if (signUpUsername.length <= 8 || signUpUsername.length >= 25) {
        alert("Username must be greater than 8 or more and less than 25 characters.")
        return window.location.reload();
    }

    if (isValid(signUpPassword) === false) {
        alert("Password must be at least 8 characters long. Contain a uppercase & lowercase letter, a symbol, and a number digit.");
        return window.location.reload();
    }


    localStorage.setItem("email", signUpEmail);
    localStorage.setItem("username", signUpUsername);
    localStorage.setItem("password", signUpPassword);
    signUpContainer.style.display = "none";
    loginContainer.style.display = "flex";
}

function isLoginValid(inputUsername) {
    const storedEmail = localStorage.getItem("email");
    const storedUsername = localStorage.getItem("username");

    // Check if inputUsername matches either stored email or username
    if (inputUsername.trim() === storedEmail.trim() || inputUsername.trim() === storedUsername.trim()) {
        return true;
    } else {
        return false;
    }
}

function loginForm() {
    var email = localStorage.getItem("email");
    var username = localStorage.getItem("username");
    var password = localStorage.getItem("password");

    var loginUsername = document.querySelector("#username_login").value;
    var loginPassword = document.querySelector("#password_login").value;
    console.log("loginUsername: [" + loginUsername + "]");
    console.log("username: [" + username + "]");
    

    if (!loginUsername || !loginPassword) {
        return alert("Invaild Credentials");
    }

    if (isLoginValid(loginUsername) === false) {
        return alert("Invaild Username/Email");
    }

    if (loginPassword != password) {
        return alert("Invaild Password");
    }

    window.location.replace("welcome.html")

}

function redirect(clicked_id) {
    switch (clicked_id) {
        case "login_redirect":
            signUpContainer.style.display = "none";
            loginContainer.style.display = "flex";
            break;
        case "signup_redirect":
            signUpContainer.style.display = "flex";
            loginContainer.style.display = "none";
            break;
    }
}