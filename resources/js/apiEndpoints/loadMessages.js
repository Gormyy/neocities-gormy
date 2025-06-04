//please don't abuse this :3 i know all the posting messages and stuff are publicly accesible endpoints but i just want to make a fun 'lil website so please don't try to intentionally break it that wouldn't be fun.
async function loadMessages(page, scrollDiv) {
    const res = await fetch(`${API_LINK}/getMessages?page=${page}`);
    const result = await res.json();

    if (!result.isFull) {
        canFetchMore = false;
    }

    const messages = result.messages;

    if (messages.length === 0) return;

    const scrollDiv = document.getElementById("scrollableDiv");

    const scrollHeightBefore = scrollDiv.scrollHeight;

    messages.forEach(msg => {
        const el = createMessageElement(msg.name, msg.message);
        scrollDiv.insertBefore(el, scrollDiv.firstChild);
    });

    //Preserve scroll position after prepending
    const scrollHeightAfter = scrollDiv.scrollHeight;
    scrollDiv.scrollTop += scrollHeightAfter - scrollHeightBefore;
}

function createMessageElement(name, message) {
    const p = document.createElement('p');
    let color = getDeterministicColor(name)
    p.innerHTML = `<strong style="color:${color}">${name}</strong>: ${message}`;
    return p;
}

window.loadMessages = loadMessages