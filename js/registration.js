const register = document.getElementById("regSubmit")

register.addEventListener('click', function(event) {
    event.preventDefault();

    const username = document.getElementById("regUsername").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;
    const confirmPassword = document.getElementById("confirmPass").value;

    let isValid = true

    var passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$!*#?.])[A-Za-z\d$!*#?.]{8,16}$/;
    var emailRegex = /^(?=.{8,16}@)[a-zA-Z0-9]+[.]?[a-zA-Z0-9]+[_]?@[a-z]+\.[a-z]{2,6}$/;
    if (username=="") { 
        document.getElementById("errorUsername").innerHTML = "Username is required";
        document.getElementById("errorUsername").style.color = "red"
        document.getElementById("regUsername").style.borderColor = "red";
        isValid=false
    } else if (username.length<6 || username.length>16) {
        document.getElementById("errorUsername").innerHTML = "Length of username must be in range 6 to 16";
        document.getElementById("errorUsername").style.color = "red"
        document.getElementById("regUsername").style.borderColor = "red";
        isValid=false
    } else {
        document.getElementById("errorUsername").innerHTML = "";
        document.getElementById("regUsername").style.borderColor = "greenyellow";
        isValid=true
    }

    if (email=="") {
        document.getElementById("errorEmail").innerHTML="Enter email";
        document.getElementById("errorEmail").style.color = "red"
        document.getElementById("regEmail").style.borderColor = "red"
        isValid = false
    } else if (!emailRegex.test(email)) {
        document.getElementById("errorEmail").innerHTML="Enter a valid email address";
        document.getElementById("errorEmail").style.color = "red"
        document.getElementById("regEmail").style.borderColor = "red"
        isValid = false;
    } else {
        document.getElementById("errorEmail").innerHTML = ""
        document.getElementById("regEmail").style.borderColor = "greenyellow"
        isValid = true
    }       

    if (password=="") {
        document.getElementById("errorPass").innerHTML="Enter password";
        document.getElementById("errorPass").style.color="red"
        document.getElementById("regPassword").style.borderColor = "red"
        isValid = false 
    } else if (password.length < 8) {
        document.getElementById("errorPass").innerHTML="Password must be at least 8 characters";
        document.getElementById("errorPass").style.color="red"
        document.getElementById("regPassword").style.borderColor = "red"
        isValid = false
    } else if (!passRegex.test(password)) {
        document.getElementById("errorPass").innerHTML="Enter a valid password";
        document.getElementById("errorPass").style.color="red"
        document.getElementById("regPassword").style.borderColor = "red"
        isValid = false
    } else {
        document.getElementById("errorPass").innerHTML="";
        document.getElementById("regPassword").style.borderColor = "greenyellow"
        isValid = true
    }
    
    if (confirmPassword=="") {
        document.getElementById("errorConfpass").innerHTML="Confirm password";
        document.getElementById("errorConfpass").style.color = "red"
        document.getElementById("confirmPass").style.borderColor = "red"
        isValid = false 
    } else if (password!==confirmPassword) {
        document.getElementById("errorConfpass").innerHTML="Password doesn't match";
        document.getElementById("errorConfpass").style.color = "red"
        document.getElementById("confirmPass").style.borderColor = "red"
        isValid = false
    } else if (localStorage.getItem(username)) {
        document.getElementById("errorConfpass").innerHTML="Username is already taken"
        document.getElementById("errorConfpass").style.color = "red"
        document.getElementById("confirmPass").style.borderColor = "red"
        isValid=true
    }
    
    let user = {
        'login': username,
        'email': email,
        'password': password    
    }
    if (isValid) {
        localStorage.setItem(user.login, JSON.stringify(user))
        window.location.href = "./login.html";
    }
})




let eyeicon = document.getElementById("eyeicon")
let passw = document.getElementById("regPassword")
eyeicon.onclick = function() {
    if (passw.type == "password") {
        passw.type = "text"
        eyeicon.name = "eye-outline"
    } else {
        passw.type = "password"
        eyeicon.name = "eye-off-outline"
    }
}

let eyeicon2 = document.getElementById("eyeicon2")
let confpass = document.getElementById("confirmPass")
eyeicon2.onclick = function() {
    if (confpass.type == "password") {
        confpass.type = "text"
        eyeicon2.name = "eye-outline"
    } else {
        confpass.type = "password"
        eyeicon2.name = "eye-off-outline"
    }
}