async function fetchLocation(){
    try{
        const res = await fetch(`${API_LINK}/location?format=json`)
        const data = await res.json()
        return data
    }catch {
        console.error("Error fetching location")
        return null
    }
}

window.fetchLocation = fetchLocation

// <script src="resources/js/apiEndpoints/fetchLocation.js">//imports fetchLocation()</script>