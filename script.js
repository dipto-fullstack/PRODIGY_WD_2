let timer;
let elapsedTime = 0;
let isRunning = false;
function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    const startTime = Date.now() - elapsedTime;
    timer = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      document.getElementById("time").textContent = formatTime(elapsedTime);
    }, 100);
  }
}
function pauseStopwatch() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
  }
}
function resetStopwatch() {
  isRunning = false;
  clearInterval(timer);
  elapsedTime = 0;
  document.getElementById("time").textContent = "00:00:00.0";
  document.getElementById("laps").innerHTML = "";
}
function lapStopwatch() {
  if (isRunning) {
    const lapTime = formatTime(elapsedTime);
    const lapDiv = document.createElement("div");
    lapDiv.textContent = `Lap: ${lapTime}`;
    document.getElementById("laps").appendChild(lapDiv);
  }
}
function formatTime(time) {
  const milliseconds = Math.floor((time % 1000) / 100);
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    return (
    (hours ? (hours < 10 ? "0" + hours : hours) + ":" : "") +
    (minutes < 10 ? "0" : "") + minutes + ":" +
    (seconds < 10 ? "0" : "") + seconds + "." + milliseconds
  );
}
