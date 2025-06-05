//REQUIRES COOKIE UTILS


async function getGuestbookMessages(page, scrollDiv, reply = false) {
    const res = await fetch(`${API_LINK}/messages/guestbook/getGuestbookMessages?page=${page}`);
    const result = await res.json();

    if (!result.isFull) {
        canFetchMore = false;
    }

    const messages = result.messages;

    if (messages.length === 0) return;

    console.log(messages)

    renderMessages(messages, scrollDiv, reply)


}

function renderMessages(messages, scrollDiv, reply) {
    const scrollHeightBefore = scrollDiv.scrollHeight;
    let first = true
    messages.forEach(msg => {
        if (!first) {
            const br = document.createElement('br')
            //scrollDiv.insertBefore(br, scrollDiv.firstChild) //not used anymore
        } else {
            first = false
        }
        const el = createMessageElement(msg, reply);
        scrollDiv.insertBefore(el, scrollDiv.firstChild);
    });

    // Preserve scroll position after prepending
    const scrollHeightAfter = scrollDiv.scrollHeight;
    scrollDiv.scrollTop += scrollHeightAfter - scrollHeightBefore;
}

function createMessageElement(msg, reply_text) {
    let { name, website, message, created_at, reply, id } = msg;
    const unchangedId = id
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
    if (website) {
        websiteColor = getDeterministicColor(website)
        websiteText = `<p><b>Website:</b> <b style="color:${websiteColor}">${website}</b></p>`
    }
    nameLine.innerHTML = ""; // Clear

    const b = document.createElement("b");
    b.textContent = id;

    const dash = document.createTextNode(" - ");

    const strong = document.createElement("strong");
    strong.style.color = color;
    strong.textContent = name;

    const span = document.createElement("span");
    span.style.float = "right";
    span.style.fontSize = "0.85em";
    span.style.color = "#777";
    span.textContent = date;

    const websiteWrapper = document.createElement("div");
    // Only websiteText can contain HTML — sanitize it
    websiteWrapper.innerHTML = DOMPurify.sanitize(websiteText);

    nameLine.append(b, dash, strong, span, websiteWrapper);


    let reply_button = ``

    if (reply_text) {
        const username = getCookie("name")
        const hashedPassword = getCookie("hashedpassword")
        reply_button = `<button class="text-button" onclick="postGuestbookReply(${unchangedId}, replyInput, '${username}', '${hashedPassword}')">Reply</button>`
    }

    // Message body
    const messageLine = document.createElement('p');
    function sanitize(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    const safeMessage = sanitize(message);
    messageLine.innerHTML = `<p style="word-wrap: break-word; overflow-wrap: break-word; white-space: normal;"><b>message:</b> ${safeMessage}</p>${reply_button}`;;

    container.appendChild(nameLine);
    container.appendChild(messageLine);

    // Optional reply
    if (reply) {
        const replyLine = document.createElement('p');
        const safeReply = sanitize(reply);
        replyLine.innerHTML = `<em style="color: green;">Reply: ${safeReply}</em>`;
        replyLine.style.marginTop = '0.5em';
        container.appendChild(replyLine);
    }

    const divider = document.createElement('hr');
    divider.style.margin = '1em 0';
    container.appendChild(divider);

    return container;
}


window.getGuestbookMessages = getGuestbookMessages