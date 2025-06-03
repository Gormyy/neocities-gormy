function fixDatesForBlogs(blogs){
    for (let blog of blogs){
        const d = new Date(blog.created_at)
        blog.date = `${d.getFullYear()}-${d.getMonth().toString().padStart(2, '0')}-${d.getDay().toString().padStart(2, '0')}`
         console.log(blog)
    }
    return blogs
}
window.fixDatesForBlogs = fixDatesForBlogs