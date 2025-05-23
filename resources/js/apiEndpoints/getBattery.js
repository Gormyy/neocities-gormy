async function getBattery(){ //returns battery percentage
    const res = await fetch(`${API_LINK}/battery/getBattery?format=json`);
    const data = await res.json();
    return data.battery
}

window.getBattery = getBattery

//REQUIRES config.js
//<script src = "resources/js/apiEndpoints/getBattery.js">//importing getBattery()</script>