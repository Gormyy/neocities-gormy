
const navigation = `
    <center>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="travel.html">Travel</a>
        <a href="interests.html">Interests</a>
        <a href="art.html">Art</a>
        <a href="blog.html">Blog</a>
        <a href="otherStuff.html">Updates</a>
    </center>
`

const defaultElements = [
    {"name" : "Home", "path" : "index.html"},
    {"name" : "About", "path" : "about.html"},
    {"name" : "Travel", "path" : "travel.html"},
    {"name" : "Interests", "path" : "interests.html"},
    {"name" : "Art", "path" : "art.html"},
    {"name" : "Blog", "path" : "blog.html"},
    {"name" : "Updates", "path" : "otherStuff.html"},
]
/*
          <a href="../../index.html">Home</a>
          <a href="slotMachine.html">Slots</a>
          <a href="payoutTable.html">Payout</a>
          <a href="leaderboard.html">leaderboard</a>
          <a href="accountSettings.html">Account</a>
*/
const slotElements = [
    {"name" : "Home", "path" : "index.html"},
    {"name" : "Slots", "path" : "games/slots/slotMachine.html"},
    {"name" : "Payout", "path" : "games/slots/payoutTable.html"},
    {"name" : "Leaderboard", "path" : "games/slots/leaderboard.html"},
    {"name" : "Account", "path" : "games/slots/accountSettings.html"},
]

async function addNavigation(div, pathToRoot = "", centered = true, style = "default", Elements = "default"){
    let content = ``

    let navElements;
    if (Elements == "default"){
        navElements = defaultElements
    } else if (Elements == "slots"){
        navElements = slotElements
    }

    for (el of navElements){
        if(style == "default"){
            content = content + `<a href="${pathToRoot+el["path"]}">${el["name"]}</a>`
        } else if (style == "ghost kitty"){ //ghost kitty style
            content = content +
            `<a href="${pathToRoot+el["path"]}"><img
              src="https://64.media.tumblr.com/e3e4a736aa1583b728742edbbf28acf3/584c5726409b8704-3d/s75x75_c1/33ae09fbcf16dcd4398301c7f00bf8197ca47c91.gifv"
              alt="x"> ${el["name"]}</a> `
        } else if (style == "spaceship"){
            content = content + 
            `<a class="navi" href="${pathToRoot+el["path"]}">${el["name"]}</a>\n`
        }
        
    }

    if(centered){
        content = `<center>` + content + `</center>`
    }

    div.innerHTML = content

}

window.addNavigation = addNavigation

//usage 

//<script src = "resources/js/utils/addNavigation.js">//adds addNavigation(div, pathToRoot = "", centered = true, style = "default", navigationElements = "default") to add the navigation to the div bar</script>
/*
<script>
    //script to add navigation elements
    let div = document.getElementById("navigation")
    addNavigation(div)
</script>
*/