async function changePassword(input, username, hashedPassword) {
    console.log(input)
    input = input.value.trim()
    const messages = document.getElementById("messages")
    if (input === "") {
        messages.innerHTML = "Password cannot be empty"
        return
    }

    url = `${API_LINK}/changePassword?username=${encodeURIComponent(username)}&hashedPassword=${encodeURIComponent(hashedPassword)}&newpassword=${encodeURIComponent(input)}`;
    //console.log(url)
    const response = await fetch(url);
    console.log(response)
    if (!response.ok) {
        messages.innerHTML = "Error changing password"
        return
    }

    const data = await response.json();

    setCookie("hashedpassword", data.generatedPassword);
    messages.innerHTML = "Password changed succesfully"
    autoLogin()
    console.log(data)
}

window.changePassword = changePassword