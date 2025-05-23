async function fetchTime(){
    try {
        const res = await fetch(`${API_LINK}/time?format=json`);
        const data = await res.json()
        return data
    } catch {
        console.error("Error fetching time")
        return null
    }
}

window.fetchTime = fetchTime

//<script src="resources/js/apiEndpoints/fetchTime.js">//imports fetchTime()</script>