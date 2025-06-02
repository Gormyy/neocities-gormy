async function getNeocitiesStats(){
    try {
        const res = await fetch(`${API_LINK}/coding/getWebsiteInfo`);
        let data = await res.json()
        data = data.info
        return data
    } catch {
        console.error("Error fetching time")
        return null
    }
}

window.getNeocitiesStats = getNeocitiesStats

//<script src="../resources/js/apiEndpoints/codingEndpoints/getDbStats.js">//imports getDbStats()</script>