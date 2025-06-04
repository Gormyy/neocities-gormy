//REQUIRES COOKIEUTILS, CANPOSTBLOG (from getPostableBlogs), 

async function addDeletionButtons(blogTitles, blogType) {

    console.log(blogType)
    const result = await canPostBlog(blogType)

    if (!result) { //user cannot post a blog
        return
    }

    Array.from(blogTitles).forEach(div => {
        const id = div.id;
        if (!id) return;

        // Skip if button already exists (prevents duplicates)
        if (div.querySelector('.delete-button')) return;



        // Create the "x" button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.className = 'delete-button';

        // Style the button
        deleteBtn.style.background = 'transparent';
        deleteBtn.style.border = 'none';
        deleteBtn.style.fontSize = '1.2em';
        deleteBtn.style.cursor = 'pointer';
        deleteBtn.style.padding = '0 4px';
        deleteBtn.style.marginTop = '-8px';
        deleteBtn.style.float = "right"
        //deleteBtn.style.marginLeft = '1%';
        //deleteBtn.style.verticalAlign = 'middle';

        deleteBtn.onclick = () => deleteBlog(id);

        // Append next to the title span
        div.appendChild(deleteBtn);
    });
}
window.addDeleteButtons = addDeletionButtons