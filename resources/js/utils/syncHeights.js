function syncHeights(content, right) {

    if (!content || !right) return;

    function adjustHeights() {
        // Reset to natural height before measuring
        content.style.height = 'auto';
        right.style.height = 'auto';

        const contentHeight = content.offsetHeight;
        const rightHeight = right.offsetHeight;
        const maxHeight = Math.max(contentHeight, rightHeight) - 37;

        content.style.height = `${maxHeight}px`;
        right.style.height = `${maxHeight}px`;
    }

    // Watch DOM changes
    const observer = new ResizeObserver(adjustHeights);
    observer.observe(content);
    observer.observe(right);

    // Watch window resizing
    window.addEventListener('resize', adjustHeights);

    // Fallback: check periodically for layout changes
    setInterval(adjustHeights, 500);

    // Initial run
    adjustHeights();
}

window.syncHeights = syncHeights
//<script src="resources/js/utils/syncHeights.js">//imports syncHeights(content, right)</script>