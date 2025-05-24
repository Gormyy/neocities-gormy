async function changeUsername(input, username, hashedPassword) {
    input = input.value.trim()
    const messages = document.getElementById("messages")
    if (input === "") {
        messages.innerHTML = "Username cannot be empty"
        return
    }

    url = `https://gormysecret.onrender.com/changeUsername?username=${encodeURIComponent(username)}&hashedPassword=${encodeURIComponent(hashedPassword)}&newname=${encodeURIComponent(input)}`;
    //console.log(url)
    const response = await fetch(url);
    if (!response.ok) {
        messages.innerHTML = "Username is already taken"
        return
    }

    const data = await response.json();
    console.log(data)
    setCookie("name", input);
    messages.innerHTML = "Username changed succesfully"
    autoLogin()
    console.log(data)
}