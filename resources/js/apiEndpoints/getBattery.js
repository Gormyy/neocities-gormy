

async function getBattery(){ //returns battery percentage
    const res = await fetch('https://gormysecret.onrender.com/battery/getBattery?format=json');
    const data = await res.json();
    return data.battery
}

window.getBattery = getBattery

//<script src = "resources/js/apiEndpoints/getBattery.js">//importing getBattery()</script>