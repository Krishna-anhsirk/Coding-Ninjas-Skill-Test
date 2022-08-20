const timeShown = document.getElementById("time");
const start_btn = document.getElementById("start-btn");
const stop_btn = document.getElementById("stop-btn");
const reset_btn = document.getElementById("reset-btn");

let seconds = 0;
let interval = null;

//For adding event listeners
start_btn.addEventListener("click", start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);

//Function for stopwatch
function timer() {
  seconds++;
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hrs * 3600) / 60);
  let secs = seconds % 60;

  if (secs < 10) {
    secs = "0" + secs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (hrs < 10) {
    hrs = "0" + hrs;
  }

  timeShown.innerText = `${hrs}:${mins}:${secs}`;
}

//Start the watch
function start() {
  if (interval) {
    return;
  }
  interval = setInterval(timer, 1000);
}

//Stop the watch
function stop() {
  clearInterval(interval);
  interval = null;
}

//Reset the watch
function reset() {
  stop();
  seconds = 0;
  timeShown.innerText = "00:00:00";
}
