const mainSecretBlogs = [
    "secret1", "secret2", "secret3" //These are used by name on the backend :3
]

publicBlogs = [
    "coding", "malady_blogs"
]

const all_blogs = mainSecretBlogs.concat(publicBlogs)

async function fetchBlog(url, blog, startingPath){
    const cur_blog_url = url + `&blog=${blog}` 
    const response = await fetch(cur_blog_url);

    if (!response.ok) {
        console.log("blog fetch failed")
        return null
    }

    const data = await response.json();

    if(data.result){
        return {"name" : data.blog, "path" : startingPath + data.blogInput + ".html", "blogInput" : data.blogInput}
    } else {
        return null
    }
}

async function getReadableBlogs(blogType = "main", startingPath = ""){
    const token = getCookie("token")
    const url = `${API_LINK}/blogs/canReadBlog?token=${token}`

    let blogs = null;

    if(blogType == "main"){
        blogs = mainSecretBlogs
    } else if (blogType == "all"){
        blogs = all_blogs
    }

    if (!blogs){
        return null //if no blogs for this function
    }

    const blogPromises = blogs.map(blog => fetchBlog(url, blog, startingPath));
    const fetchedBlogs = await Promise.all(blogPromises);

    // Filter out any null or undefined results
    const returnedBlogs = fetchedBlogs.filter(b => b);

    return returnedBlogs
}

async function getBlogActualName(blog, blogType = "all"){
    const token = getCookie("token")
    const url = `${API_LINK}/blogs/canReadBlog?token=${token}`

    let blogs = null;

    if(blogType == "main"){
        blogs = mainSecretBlogs
    } else if (blogType == "all"){
        blogs = all_blogs
    }

    if (!blogs){
        return null //if no blogs for this function
    }

    const startingPath = ""
    const blogPromises = blogs.map(blog => fetchBlog(url, blog, startingPath));
    const fetchedBlogs = await Promise.all(blogPromises);

    // Filter out any null or undefined results
    const returnedBlogs = fetchedBlogs.filter(b => b);

    for(const obj of returnedBlogs){
        if (obj.blogInput == blog){
            return obj["name"]
        }
    }

    return returnedBlogs
}

window.getReadableBlogs = getReadableBlogs
window.getBlogActualName = getBlogActualName