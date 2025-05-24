async function postComment(nameInput, messageInput, messages) {
    nameInput = nameInput.value.trim()
    messageInput = messageInput.value.trim()
    if (nameInput === "" || messageInput === "") {
        messages.innerHTML = "Name/message cannot be empty"
        return
    }

    url = `${API_LINK}/postMessage?name=${nameInput}&message=${messageInput}`;
    //console.log(url)
    const response = await fetch(url);
    if (!response.ok) {
        messages.innerHTML = "message failed to post"
        return
    }

    const data = await response.json();
    messages.innerHTML = "Message posted!"
    location.reload();
}

window.postComment = postComment