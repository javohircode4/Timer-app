const WEEK = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

function zero(num) {
    return num < 10 ? "0" + num : num;
}

function updateTime() {
    let now = new Date();

    let hours = zero(now.getHours());
    let minutes = zero(now.getMinutes());
    let seconds = zero(now.getSeconds());

document.getElementById("time").innerText =
        hours + ":" + minutes + ":" + seconds;
let timeEl = document.getElementById("time");

timeEl.classList.remove("animate");
void timeEl.offsetWidth;
timeEl.classList.add("animate");
let colors = ["cyan", "lime", "yellow", "magenta", "orange"];

let randomColor = colors[Math.floor(Math.random() * colors.length)];

document.getElementById("time").style.color = randomColor;
    let year = now.getFullYear();
    let month = zero(now.getMonth() + 1);
    let day = zero(now.getDate());
    let week = WEEK[now.getDay()];

    document.getElementById("date").innerText =
        year + "-" + month + "-" + day + " " + week;
}

updateTime();
setInterval(updateTime, 1000);
function changeColor() {
    let timeEl = document.getElementById("time");

    // random rang
    let colors = ["#ff0000", "#00ff00", "#00ccff", "#ff00ff", "#ffff00"];

    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    timeEl.style.color = randomColor;
    timeEl.style.textShadow = "0 0 20px " + randomColor;
}
function saveTime() {
    const timeElement = document.getElementById("time");
    const savedContainer = document.getElementById("saved-times");

    const newTime = document.createElement("div");

    newTime.innerText = timeElement.innerText;

    const color = window.getComputedStyle(timeElement).color;
    const shadow = window.getComputedStyle(timeElement).textShadow;

    newTime.style.color = color;
    newTime.style.textShadow = shadow;

    savedContainer.appendChild(newTime);
}
