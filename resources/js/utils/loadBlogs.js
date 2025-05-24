//style = vaporeon : default style -> for vaporeon css style
async function loadBlogs(blogs, content, style = "vaporeon") {

    // Sort by date descending
    blogs.sort((a, b) => new Date(b.date) - new Date(a.date));

    for (const blog of blogs) {
        if (style == "vaporeon") {
            const titleHTML = `
                <div class="title2">
                  <img src="https://64.media.tumblr.com/0b91ec3f6bd8e50404dc513ffbdf5821/014d6f73835b6e87-d3/s75x75_c1/f19c167835beae789c67e6721b3492325131958c.gifv">
                  <span class="titleText">${blog.title}</span> <br> <span class='blogDate'>${new Date(blog.date + "T12:00:00").toLocaleDateString()}</span>
                </div>
              `;

            const bodyHTML = `<p class="body">${blog.content}</p><br>`;
            content.innerHTML += titleHTML + bodyHTML;
        }

    }
}