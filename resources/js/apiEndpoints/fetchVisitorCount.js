async function fetchVisitorCount() {
    try {
        const response = await fetch(`${API_LINK}/visitorCount`);
        const data = await response.json();

        const num = data["visitorCount"]

        return num
        
    } catch (err) {
        console.error("Failed to load Visitor date:", err);
        return -1
        
    }
}

window.fetchVisitorCount = fetchVisitorCount

//  <script src = "resources/js/apiEndpoints/fetchVisitorCount.js">//imports fetchVisitorCount()</script>