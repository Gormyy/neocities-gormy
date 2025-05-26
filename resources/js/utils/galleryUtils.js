function sortGallery(method) {
    let sorted = [...imageData];
    if (method === 'date-desc') {
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (method === 'date-asc') {
        sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (method === 'score-desc') {
        sorted.sort((a, b) => b.score - a.score);
    } else if (method === 'score-asc') {
        sorted.sort((a, b) => a.score - b.score);
    } else if (method === 'random') {
        for (let i = sorted.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [sorted[i], sorted[j]] = [sorted[j], sorted[i]];
        }
    }
    renderGallery(sorted);
}

window.sortGallery = sortGallery

function renderGallery(images) {
    const container = document.getElementById("gallery");
    container.innerHTML = '';
    images.forEach(img => {
        let imgHref;
        if (img.link == null) {
            imgHref = img.src
        } else {
            imgHref = img.link
        }

        container.innerHTML += `
          <div class="image-card">
            <a href="${imgHref}">
                <img src="${img.src}" alt="${img.caption}">
            </a>
            <div class="image-info">
                <h3>${img.title}</h3>
                <div class="description-container">
                    <p class="description">${img.caption}</p>
                    <button class="toggle-btn">Read more</button>
                </div>
                <small>${img.date}</small>
            </div>
          </div>
        `;
    });
}

window.renderGallery = renderGallery