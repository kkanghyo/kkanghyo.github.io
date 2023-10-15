const clock = document.querySelector("li#clock");
const today = document.querySelector("li#today");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getDay() {
  const day = new Date();
  const year = String(day.getFullYear()).substring(2, 4);
  const month = day.getMonth() + 1;
  const date = day.getDate();
  today.innerText = `${year}.${month}.${date}`;
}

getDay();
getClock();
setInterval(getClock, 1000);
setInterval(getDay, 1000);
