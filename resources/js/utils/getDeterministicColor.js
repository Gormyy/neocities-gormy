function getDeterministicColor(input) {
    //Simple hash function (djb2)
    let day = new Date().getDay()
    let month = new Date().getMonth()
    let year = new Date().getFullYear()
    let hash = day * month * year
    for (let i = 0; i < input.length; i++) {
        hash = ((hash << 5) + hash) + input.charCodeAt(i);
        hash = hash & hash; //Convert to 32bit integer
    }

    //Generate RGB values based on hash
    const r = (hash >> 16) & 0xFF;
    const g = (hash >> 8) & 0xFF;
    const b = hash & 0xFF;

    //Convert to hex string and pad if needed
    const toHex = (n) => n.toString(16).padStart(2, '0');

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

window.getDeterministicColor = getDeterministicColor

//<script src="resources/js/utils/getDeterministicColor.js">//imports getDeterministicColor(inpu) gives a random color</script>