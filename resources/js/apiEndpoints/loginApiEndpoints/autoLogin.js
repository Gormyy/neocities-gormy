async function autoLogin(onSlots = true) { //onSlots is true if this is being used for slots

    let username = getCookie("name");
    let hashedPassword = getCookie("hashedpassword");

    let url;
    if (username && hashedPassword) {
        url = `${API_LINK}/login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(hashedPassword)}&loginType=hash`;
    } else {
        url = `${API_LINK}/login`;
    }

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Login failed");

        const data = await response.json();
        
        console.log(data)
        // Save name and generated password if it's a new login
        if (!username || !hashedPassword) {
            setCookie("name", data.name);
            setCookie("hashedpassword", data.generatedPassword);
        }
        setCookie("token", data.token, 1) //1 day cookie!
        console.log("Logged in as:", data.name);

        //user and bal elements
        let uEl = document.getElementById("user")
        let balEl = document.getElementById("bal")

        if(onSlots){
            uEl.innerHTML = data.name
            balEl.innerHTML = Math.round(data.balance * 100) / 100
        }
        
        // You can now use the user data
    } catch (err) {
        console.error("Auto-login failed:", err);
    }
}

//REQUIRES COOKIE UTILS and CONFIG
window.autoLogin = autoLogin