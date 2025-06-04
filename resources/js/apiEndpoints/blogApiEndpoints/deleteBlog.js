//REQUIRES COOKIE UTILS

async function deleteBlog(id) {
    const token = getCookie("token")

    const url = `${API_LINK}/blogs/deleteBlog`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ "id": id })
        });

        if (!response.ok) {
            console.log("Error posting blog")
            return;
        }

        console.log("Success")
        location.reload()
    } catch (error) {
        console.log("Network error: " + error.message);
    }
}

window.deleteBlog = deleteBlog