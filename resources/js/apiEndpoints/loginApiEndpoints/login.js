async function login(usernameInput, passwordInput) {
    usernameInput = usernameInput.value.trim()
    passwordInput = passwordInput.value.trim()

    const messages = document.getElementById("messages")

    if (usernameInput === "" || passwordInput === "") {
        messages.innerHTML = "Username/password cannot be empty"
        return
    }

    let url = `https://gormysecret.onrender.com/login?username=${encodeURIComponent(usernameInput)}&password=${encodeURIComponent(passwordInput)}`;

    const response = await fetch(url);

    if (!response.ok) {
        messages.innerHTML = "Error logging in"
        return
    }
    const data = await response.json()

    setCookie("name", data.name);
    setCookie("hashedpassword", data.generatedPassword);
    setCookie("token", data.token, 1) //1 day cookie!

    messages.innerHTML = "Logged in succesfully"
    autoLogin()
}

window.login = login