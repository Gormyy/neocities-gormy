async function getDbStats(){
    try {
        const res = await fetch(`${API_LINK}/coding/getDbStats`);
        const data = await res.json()
        return data
    } catch {
        console.error("Error fetching time")
        return null
    }
}

window.getDbStats = getDbStats

//<script src="../resources/js/apiEndpoints/codingEndpoints/getDbStats.js">//imports getDbStats()</script>