var loginForm = document.getElementById("loginForm");
var signupForm = document.getElementById("signupForm");
var loginTab = document.getElementById("loginTab");
var signupTab = document.getElementById("signupTab");

function showLogin() {
    loginForm.classList.remove("hide-form");
    signupForm.classList.add("hide-form");
    loginTab.classList.add("active-tab");
    signupTab.classList.remove("active-tab");
    clearMessages();
}

function showSignup() {
    signupForm.classList.remove("hide-form");
    loginForm.classList.add("hide-form");
    signupTab.classList.add("active-tab");
    loginTab.classList.remove("active-tab");
    clearMessages();
}

function loginUser() {
    var email = document.getElementById("loginEmail").value.trim();
    var password = document.getElementById("loginPassword").value.trim();
    var message = document.getElementById("loginMessage");

    if (email === "" || password === "") {
        showMessage(message, "Please fill all login fields", "error");
        return;
    }

    if (password.length < 6) {
        showMessage(message, "Password must contain at least 6 characters", "error");
        return;
    }

    showMessage(message, "Login successful. This is frontend only.", "success");
}

function signupUser() {
    var name = document.getElementById("signupName").value.trim();
    var email = document.getElementById("signupEmail").value.trim();
    var password = document.getElementById("signupPassword").value.trim();
    var confirmPassword = document.getElementById("confirmPassword").value.trim();
    var message = document.getElementById("signupMessage");

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        showMessage(message, "Please fill all signup fields", "error");
        return;
    }

    if (password.length < 6) {
        showMessage(message, "Password must contain at least 6 characters", "error");
        return;
    }

    if (password !== confirmPassword) {
        showMessage(message, "Passwords do not match", "error");
        return;
    }

    showMessage(message, "Signup successful. This is frontend only.", "success");
}

function showMessage(element, text, type) {
    element.innerText = text;
    element.className = "message " + type;
}

function clearMessages() {
    document.getElementById("loginMessage").innerText = "";
    document.getElementById("signupMessage").innerText = "";
}
