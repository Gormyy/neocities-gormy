async function getRadar(){
    try {
        const res = await fetch(`${API_LINK}/weather/getRadar`);
        return await res.json()
    } catch {
        console.error("Error fetching radar")
        return null
    }
}

window.getRadar = getRadar

//<script src="../resources/js/apiEndpoints/weatherEndpoints/getRadar.js">//imports getRadar()</script>
