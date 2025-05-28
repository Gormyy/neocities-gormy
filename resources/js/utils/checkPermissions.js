//allows for checking permissions
//REQUIRES CONFIG AND COOKIE UTILS
async function checkPermissions(permission, user = null){
    if (user == null){
        user = getCookie("name")
    }

    const url = `${API_LINK}/utils/checkPermissions?username=${user}&permission=${permission}`

    try {

        const res = await fetch(url);
        const data = await res.json()
        return data.result

    } catch {
        return false //fail safe
    }
}