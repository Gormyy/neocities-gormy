async function getGithubInfo(repo="neocities-gormy"){
    try {
        const res = await fetch(`${API_LINK}/coding/getGithubInfo?repo=${repo}`);
        const data = await res.json()
        return data
    } catch {
        console.error("Error fetching time")
        return null
    }
}

window.getGithubInfo = getGithubInfo

//<script src="../resources/js/apiEndpoints/codingEndpoints/getGithubInfo.js">//imports getGithubInfo(repo)</script>