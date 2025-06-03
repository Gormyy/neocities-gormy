const defaultElements = [
    {"name" : "Home", "path" : "index.html"},
    {"name" : "About", "path" : "about.html"},
    {"name" : "Travel", "path" : "travel.html"},
    {"name" : "Interests", "path" : "interests.html"},
    {"name" : "Art", "path" : "art.html"},
    {"name" : "Blog", "path" : "blog.html"},
    {"name" : "Updates", "path" : "updates.html"},
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

const interestElements = [
    {"name" : "sports", "path" : "interests/sports.html"},
    {"name" : "random stuff", "path" : "galleries/interestGallery/randomImageGallery.html"},
    {"name" : "climbing", "path" : "interests/climbing.html"},
    {"name" : "music", "path" : "interests/music.html"},
    {"name" : "weather", "path" : "interests/weather.html"},
    {"name" : "coding", "path" : "interests/coding.html"},
]

async function addNavigation(div, pathToRoot = "", centered = true, style = "default", Elements = "default"){
    let content = ``

    let navElements;
    if (Elements == "default"){
        navElements = defaultElements
    } else if (Elements == "slots"){
        navElements = slotElements
    } else if (Elements == "interests"){
        navElements = interestElements
    } else { //if elements is a dict
        navElements = Elements
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
        } else if (style == "interests"){
            content = content + `<a href="${pathToRoot + el["path"]}"> <div class="interestTitle">${el["name"]}</div> </a>`
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