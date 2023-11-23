const login = document.getElementById("loginBtn")

login.addEventListener('click', function(event) {
    event.preventDefault();
    
    const username = document.getElementById("logUsername").value
    const password = document.getElementById("logPassword").value

    if (username == 'admin' && password == 'admin') {
        window.location.href = './adminPanel.html'
        return
    } 
    if (username=="") {
        document.getElementById("errorUsername").innerHTML = "Username is required";
        document.getElementById("errorUsername").style.color="red";
        document.getElementById("logUsername").style.borderColor = "red";
    }
    if (password == ""){
        document.getElementById("errorPass").innerHTML = "Password is required";
        document.getElementById("errorPass").style.color="red";
        document.getElementById("logPassword").style.borderColor = "red";
    }
    if (username in localStorage) {
        let user = localStorage.getItem(username)
        user = JSON.parse(user)
        let userPass = user['password']
        document.getElementById("logUsername").style.borderColor = "greenyellow";
        document.getElementById("errorUsername").innerHTML = "";
        if (password == "") {
            document.getElementById("errorPass").innerHTML="Type your password";
            document.getElementById("errorPass").style.color="red";
            document.getElementById("logPassword").style.borderColor = "red";
        } else if (password == userPass){
            // alert("Logged in")
            let loggedIn = {
                'loggedIn': true,
                'username': username
            }
            localStorage.setItem('loggedIn', JSON.stringify(loggedIn))
            window.location.href = "./index.html";
        } else {
            document.getElementById("errorPass").innerHTML="Incorrect password"
            document.getElementById("errorPass").style.color="red";
            document.getElementById("logPassword").style.borderColor = "red";
        }
    } else if (username != ""){
        document.getElementById("errorUsername").innerHTML = "Incorrect username or register";
        document.getElementById("errorUsername").style.color="red";
        document.getElementById("logUsername").style.borderColor = "red";
    }
}) 


let eyeicon = document.getElementById("eyeicon")
let passw = document.getElementById("logPassword")
eyeicon.onclick = function() {
    if (passw.type == "password") {
        passw.type = "text"
        eyeicon.name = "eye-outline"
    } else {
        passw.type = "password"
        eyeicon.name = "eye-off-outline"
    }
}
