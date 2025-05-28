async function postGuestbookReply(id, replyInput, username, hashedPassword) {
    console.log("Test")
    replyInput = replyInput.value.trim()
    if (replyInput === "") {
        return
    }

    url = `${API_LINK}/messages/guestbook/postGuestbookReply`
    console.log(id, replyInput, username, hashedPassword)
    try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, replyInput, username, hashedPassword })
    });

    if (!response.ok) {
      return;
    }

    location.reload();
  } catch (error) {
    messages.innerHTML = "Network error: " + error.message;
  }
}

window.postGuestbookReply = postGuestbookReply