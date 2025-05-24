async function fetchLocation(user="gormy"){
    try{
        const res = await fetch(`${API_LINK}/location?format=json&user=${user}`)
        const data = await res.json()
        return data
    }catch (error){
        console.log(error)
        console.error("Error fetching location")
        return null
    }
}

window.fetchLocation = fetchLocation

// <script src="resources/js/apiEndpoints/fetchLocation.js">//imports fetchLocation()</script>