const timeEl = document.querySelector(".timer"),
  startBtn = document.querySelector(".start"),
  resetBtn = document.querySelector(".reset"),
  startText = document.querySelector(".start h3"),
  minutesP = timeEl.querySelector(".minutes"),
  secondsP = timeEl.querySelector(".seconds"),
  tensP = timeEl.querySelector(".tens");

let seconds = 0,
  tens = 0,
  int = null;

resetBtn.addEventListener("click", reset);
startBtn.addEventListener("click", start);

function timer() {
  tens++;

  tens < 10 ? (tens = "0" + tens) : "";

  if (tens > 99) {
    seconds++;
    tens = "00";
  }

  let mins = Math.floor(seconds / 60),
    secs = seconds % 60;

  secs < 10 ? (secs = "0" + secs) : "";
  mins < 10 ? (mins = "0" + mins) : "";

  minutesP.innerHTML = mins;
  secondsP.innerHTML = secs;
  tensP.innerHTML = tens;
}

function start() {
  if (int) {
    clearInterval(int);
    int = null;
    startText.innerHTML = "RESUME";
  } else {
    int = setInterval(timer, 10);
    startText.innerHTML = "STOP";
  }
}

function reset() {
  let confirmDel = confirm("Are you sure you want to reset the timer?");
  if (!confirmDel) return;

  clearInterval(int);
  int = null;
  seconds = 0;
  timeEl.innerHTML = "00:00:00";
  startText.innerHTML = "START";

  resetBtn.style.height = "150px";
  setTimeout(function () {
    resetBtn.style.height = "235px";
  }, 500);
}
