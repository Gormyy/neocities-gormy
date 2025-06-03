async function getBlogsByBlogType(type){
    const token = getCookie("token")
    let url = `${API_LINK}/blogs/getBlogs?token=${token}&blog=${type}`

    const response = await fetch(url);

    if (!response.ok) {
        console.log("blog fetch failed")
        return null
    }
    return await response.json()
}
window.getBlogsByBlogType = getBlogsByBlogType