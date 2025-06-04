async function getPostableBlogs() {
    const token = getCookie("token")
    let url = `${API_LINK}/blogs/getPostableBlogs?token=${token}`

    const response = await fetch(url);

    if (!response.ok) {
        console.log("blog fetch failed")
        return null
    }

    return await response.json()
}

async function canPostBlog(blogType) {
    const [actualBlogName, postableBlogs] = await Promise.all([
        getBlogActualName(blogType),
        getPostableBlogs()
    ]);

    return postableBlogs.includes(actualBlogName)
}

window.getPostableBlogs = getPostableBlogs
window.canPostBlog = canPostBlog