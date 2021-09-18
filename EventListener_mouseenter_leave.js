const title = document.querySelector("div.hello:first-child h1")

function handleTitleClick(){
    title.style.color = "blue";
}

function handleMouseEnter(){
    title.innerText = "Mouse is here";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseEnter);

-------------------------------------------------------------
const title = document.querySelector("div.hello:first-child h1")

function handleTitleClick(){
    title.style.color = "blue";
}

function handleMouseEnter(){
    title.innerText = "here";
    console.log("here")
}

function handleMouseLeave(){
    title.innerText = "gone";
    console.log("gone")
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseEnter);

-------------------------------------------------------------
const title = document.querySelector("div.hello:first-child");
const selectBodyColor = document.querySelector('body').style;
const selectBodyBackgroundColor = document.querySelector('body').style;

function handleTitleClick() {
title.style.color = "blue";
console.log("title was clicked");
}

function handlemouseenter() {
title.innerText = "mouse is here";
console.log("Mouse is here");
selectBodyColor.color = "lavender";
selectBodyBackgroundColor.backgroundColor = "black";
}

function handlemouseleave () {
title.innerText = "mouse is gone!";
console.log("Mouse is gone!");
selectBodyColor.color = "black";
selectBodyBackgroundColor.backgroundColor = "lavender";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handlemouseenter);
title.addEventListener("mouseleave", handlemouseleave);
-------------------------------------------------------------
const title = document.querySelector(".hello:first-child h1");
const selectBodyColor = document.querySelector('body').style;

function changeBodyColor(color, backgroundColor) {
selectBodyColor.color = color;
selectBodyColor.backgroundColor = backgroundColor;
}


function handleTitleClick() {
title.style.color = 'pink';
}

function handleMouseEnter() {
title.innerHTML = "Mouse is here!";
changeBodyColor("lavender", "black");
}

function handleMouseLeave() {
title.innerHTML = "Mouse was gone!";
changeBodyColor("black", "lavender");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
