const h1 = document.querySelector("div.hello:first-child h1")
const selectBodyColor = document.querySelector('body').style;
const selectBodyBackgroundColor = document.querySelector('body').style;

function handleTitleClick(){
    h1.style.color = "blue";
}

function handleMouseEnter(){
    h1.innerText = "here";
    console.log("here")
    selectBodyColor.color = "lavender";
    selectBodyBackgroundColor.backgroundColor = "black";
}

function handleMouseLeave(){
    h1.innerText = "gone";
    console.log("gone")
    selectBodyColor.color = "black";
    selectBodyBackgroundColor.backgroundColor = "lavender";
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWindowOffline(){
    alert("SOS no WIFI")
}

function handleWindowOnline(){
    alert("All Good")
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseEnter);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy)
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
