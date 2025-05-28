
async function getGuestbookMessages(page, scrollDiv) {
    const res = await fetch(`${API_LINK}/messages/guestbook/getGuestbookMessages?page=${page}`);
    const result = await res.json();

    if (!result.isFull) {
        canFetchMore = false;
    }

    const messages = result.messages;

    if (messages.length === 0) return;

    console.log(messages)

    renderMessages(messages, scrollDiv)

    
}

function renderMessages(messages, scrollDiv) {
    const scrollHeightBefore = scrollDiv.scrollHeight;
    let first = true
    messages.forEach(msg => {
        if (!first){
            const br = document.createElement('br')
            //scrollDiv.insertBefore(br, scrollDiv.firstChild) //not used anymore
        } else{
            first = false
        }
        const el = createMessageElement(msg);
        scrollDiv.insertBefore(el, scrollDiv.firstChild);
    });

    // Preserve scroll position after prepending
    const scrollHeightAfter = scrollDiv.scrollHeight;
    scrollDiv.scrollTop += scrollHeightAfter - scrollHeightBefore;
}

function createMessageElement(msg) {
    let { name, website, message, created_at, reply, id } = msg;
    id -= 9
    const container = document.createElement('div');
    container.className = 'message-block';
    container.style.marginBottom = '1em';

    const color = getDeterministicColor(name);
    const date = new Date(created_at).toLocaleString();

    // Construct name + website line
    const nameLine = document.createElement('div');

    let websiteText = ``
    let websiteColor;
    if(website){
        websiteColor = getDeterministicColor(website)
        websiteText = `<p><b>Website:</b> <b style="color:${websiteColor}">${website}</b></p>`   
    }
    nameLine.innerHTML = `
        <b>${id}</b> - <strong style="color:${color}">${name}</strong> <span style="float:right; font-size: 0.85em; color: #777;">${date}</span>
        ${websiteText}
    `;

    // Message body
    const messageLine = document.createElement('p');
    messageLine.innerHTML = `<p style="word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><b>message:</b> ${message}</p>`;

    container.appendChild(nameLine);
    container.appendChild(messageLine);

    // Optional reply
    if (reply) {
        const replyLine = document.createElement('p');
        replyLine.innerHTML = `<em style="color: green;">Reply: ${reply}</em>`;
        replyLine.style.marginTop = '0.5em';
        container.appendChild(replyLine);
    }

    const divider = document.createElement('hr');
    divider.style.margin = '1em 0';
    container.appendChild(divider);

    return container;
}


window.getGuestbookMessages = getGuestbookMessages