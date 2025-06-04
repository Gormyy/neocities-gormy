async function postBlog(blogData) {
  const token = getCookie("token");
  const url = `${API_LINK}/blogs/postBlog`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(blogData) 
    });

    const status = document.getElementById("status")

    if (!response.ok) {
      messages.innerHTML = "Failed to post blog: " + response.statusText;
      status.innerHTML = "Error posting"
      return;
    }

    status.innerHTML = "Success"
  } catch (error) {
    messages.innerHTML = "Network error: " + error.message;
  }
}
