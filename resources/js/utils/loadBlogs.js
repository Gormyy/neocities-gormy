//style = vaporeon : default style -> for vaporeon css style
async function loadBlogs(blogs, content, style = "vaporeon") {
    // Sort by date descending
    blogs.sort((a, b) => new Date(b.date) - new Date(a.date));

    for (const blog of blogs) {
        if (style == "vaporeon") {

            const titleHTML = `
                <div class="title2" id="${blog.id}">
                  <img src="https://64.media.tumblr.com/0b91ec3f6bd8e50404dc513ffbdf5821/014d6f73835b6e87-d3/s75x75_c1/f19c167835beae789c67e6721b3492325131958c.gifv">
                  <span class="titleText">${blog.title}</span> <br> <span class='blogDate'>${new Date(blog.date + "T12:00:00").toLocaleDateString()}</span>
                </div>
              `;

            const bodyHTML = `<p class="body">${blog.content}</p><br>`;
            content.innerHTML += titleHTML + bodyHTML;

        } else if(style == "ghost kitty"){
          if(blog.format == "default"){

             const titleHTML = `
              <div id="contentbox">
                <div class="big-title">
                  <img src="https://64.media.tumblr.com/70e035a2d218094d7fb7ece0966f2434/675a77468b0f4c8b-5d/s75x75_c1/34833cfe763fee2c330a4f69b737c60b06b8a839.gifv" alt="x">
                  <span class='titleText'>${blog.title}</span> - <span class='blogDate'>${new Date(blog.date + "T12:00:00").toLocaleDateString()}</span>
                </div>
                <p class="blogBody">${blog.content}</p>
              </div>`

              content.innerHTML += titleHTML

          } else if (blog.format == "twoColumn"){

            const titleHTML = `
            <div id="contentbox">
              <table id="Table">
                <thead>
                  <tr>
                    <th><img
                        src="https://64.media.tumblr.com/70e035a2d218094d7fb7ece0966f2434/675a77468b0f4c8b-5d/s75x75_c1/34833cfe763fee2c330a4f69b737c60b06b8a839.gifv"
                        alt="x"> ${blog.title}</th>
                    <th><img
                        src="https://64.media.tumblr.com/70e035a2d218094d7fb7ece0966f2434/675a77468b0f4c8b-5d/s75x75_c1/34833cfe763fee2c330a4f69b737c60b06b8a839.gifv"
                        alt="x"> ${blog.title2}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td valign="top">${blog.content}</td>
                    <td valign="top">${blog.content2}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            `

            content.innerHTML += titleHTML

          }

        }
    }
}