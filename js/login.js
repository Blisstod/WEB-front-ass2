const login = document.getElementById("loginBtn")

login.addEventListener('click', function(event) {
    event.preventDefault();
    
    const username = document.getElementById("logUsername").value
    const password = document.getElementById("logPassword").value

    if (username == 'admin' && password == 'admin') {
        window.location.href = '/adminPanel.html'
        return
    }

    if (username in localStorage) {
        let user = localStorage.getItem(username)
        user = JSON.parse(user)
        let userPass = user['password']
        if (password == "") {
            alert("type your password")
        } else if (password == userPass){
            alert("Logged in")
            window.location.href = "./index.html";
        } else {
            alert("Password incorrect")
        }
    } else {
        alert("Please, register")
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