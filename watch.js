"use strict";

let [hours, minutes, seconds] = [0, 0, 0];
let timeDisplay = document.querySelector(".timedisplay");
let startBtn = document.querySelector(".btn-start");
let stopBtn = document.querySelector(".btn-stop");
let resetBtn = document.querySelector(".btn-reset");
let timer = null;

function watchStart() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? `0${hours}` : hours;
  let m = minutes < 10 ? `0${minutes}` : minutes;
  let s = seconds < 10 ? `0${seconds}` : seconds;

  timeDisplay.textContent = `${h}:${m}:${s}`;
}

function startWatch() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(watchStart, 1000);
}

startBtn.addEventListener("click", startWatch);

stopBtn.addEventListener("click", function () {
  clearInterval(timer);
});

resetBtn.addEventListener("click", function () {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  timeDisplay.textContent = `00:00:00`;
});
