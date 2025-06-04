function fixDatesForBlogs(blogs){
    for (let blog of blogs){
        const d = new Date(blog.created_at)
        blog.date = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${(d.getDay() + 1).toString().padStart(2, '0')}`
    }
    return blogs
}
window.fixDatesForBlogs = fixDatesForBlogs