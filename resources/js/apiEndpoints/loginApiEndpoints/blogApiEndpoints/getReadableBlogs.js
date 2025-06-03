const mainSecretBlogs = [
    "secret1", "secret2", "secret3" //These are used by name on the backend :3
]

async function fetchBlog(url, blog){
    const cur_blog_url = url + `&blog=${blog}` 
    const response = await fetch(cur_blog_url);

    if (!response.ok) {
        console.log("blog fetch failed")
        return null
    }

    const data = await response.json();

    if(data.result){
        return {"name" : data.blog, "path" : data.blogInput + ".html"}
    } else {
        return null
    }
}

async function getReadableBlogs(blogType = "main"){
    const token = getCookie("token")
    const url = `https://gormysecret.onrender.com/blogs/canReadBlog?token=${token}`

    let blogs = null;

    if(blogType == "main"){
        blogs = mainSecretBlogs
    }

    if (!blogs){
        return null //if no blogs for this function
    }

    const blogPromises = blogs.map(blog => fetchBlog(url, blog));
    const fetchedBlogs = await Promise.all(blogPromises);

    // Filter out any null or undefined results
    const returnedBlogs = fetchedBlogs.filter(b => b);

    return returnedBlogs
}

window.getReadableBlogs = getReadableBlogs