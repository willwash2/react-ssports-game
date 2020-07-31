//Team One
const teamOneShots = document.querySelector("#teamone-numshots")
const teamOneButton = document.querySelector("teamone-shoot-button"
teamOneButton.addEventListener("click", function () {
    let teamOneShotsTaken = Number(teamOneShots.innerHTML) + 1;
    teamOneShots.innerHTML = teamOneShotsTaken
    console.log(" + button clicked");
    if (Math.random() < .5) {
        console.log(" + team scored")
    }
}))

//Team Two
const teamTwoShots = document.querySelector("#teamtwo-numshots")
const teamTwoButton = document.querySelector("teamtwo-shoot-button"
teamTwoButton.addEventListener("click", function () {
    let teamOneShotsTaken = Number(teamOneShots.innerHTML) + 1;
    teamOneShots.innerHTML = teamOneShotsTaken
    console.log(" + button clicked");
    if (Math.random() < .5) {
        console.log(" + team scored")
    }
}))

let teamTwoGoals = document.querySelector("#teamTwo-numgoals")