const clock = document.getElementById('clock');
const toggleFormatButton = document.getElementById('toggle-format');

let is12HourFormat = true;

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  if (is12HourFormat) {
    clock.innerHTML = `${hours % 12 || 12}:${minutes}:${seconds} ${hours < 12 ? 'AM' : 'PM'}`;
  } else {
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
  }
}

toggleFormatButton.addEventListener('click', () => {
  is12HourFormat = !is12HourFormat;
  updateClock();
});

setInterval(updateClock, 1000);
