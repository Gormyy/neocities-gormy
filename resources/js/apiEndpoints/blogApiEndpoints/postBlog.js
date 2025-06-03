async function postBlog(content){
    const token = getCookie("token")
    url = `${API_LINK}/blogs/postBlog`

    try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content })
    });

    if (!response.ok) {
      return;
    }

    location.reload();
  } catch (error) {
    messages.innerHTML = "Network error: " + error.message;
  }
}