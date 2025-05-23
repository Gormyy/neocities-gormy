async function loadWeather() {
    try {
        const response = await fetch(`${API_LINK}/weather?format=json`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error("Failed to load weather:", err);
        return null;

    }
}

window.loadWeather = loadWeather

//  <script src="resources/js/apiEndpoints/loadWeather.js">//imports loadWather()</script>