//This JavaScript gives functionality to the buttons on index.html

document.getElementById("statsButton").addEventListener("click", function() {
    window.location.href = "teamStats.html";
});

document.getElementById("findingsButton").addEventListener("click", function() {
    window.location.href = "Findings/findings.html";
});

document.getElementById("aboutButton").addEventListener("click", function() {
    window.location.href = "About/about.html";
});

document.getElementById("authorButton").addEventListener("click", function() {
    window.location.href = "About/author.html";
});

document.getElementById("visualizationButton").addEventListener("click", function() {
    window.location.href = "Findings/dataVisual.html";
});

document.getElementById("playerStatsButton").addEventListener("click", function() {
    window.location.href = "playerStats.html";
});

document.getElementById("teamPageButton").addEventListener("click", function() {
    window.location.href = "teamSelect.html";
});

document.getElementById("teamPage2Button").addEventListener("click", function() {
    window.location.href = "teamSelect2.html";
});

document.getElementById("knicksLogButton").addEventListener("click", function() {
    window.location.href = "teamPages/knicks.html";
});

document.getElementById("knicksAvgsButton").addEventListener("click", function() {
    window.location.href = "teamPlayerPages/knicks.html";
});
