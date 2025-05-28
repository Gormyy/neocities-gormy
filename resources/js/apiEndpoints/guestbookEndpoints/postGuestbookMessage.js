async function postGuestbookMessage(nameInput, messageInput, websiteInput, messages) {
    nameInput = nameInput.value.trim()
    messageInput = messageInput.value.trim()
    websiteInput = websiteInput.value.trim()
    if (nameInput === "" || messageInput === "") {
        messages.innerHTML = "Name/message cannot be empty"
        return
    }

    url = `${API_LINK}/messages/guestbook/postGuestbookMessage`

    try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nameInput, messageInput, websiteInput })
    });

    if (!response.ok) {
      messages.innerHTML = "Message failed to post";
      return;
    }

    const data = await response.json();
    messages.innerHTML = "Message posted!";
    location.reload();
  } catch (error) {
    messages.innerHTML = "Network error: " + error.message;
  }
}

window.postGuestbookMessage = postGuestbookMessage