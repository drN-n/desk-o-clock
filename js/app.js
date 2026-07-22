const date = new Date();

// Time Format HH:MM:SS
const hour = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();

document.querySelector('.current-time').textContent = `${hour}:${min}:${sec}`;

// Date Format MM:DD:YYYY
const monthInText = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = monthInText[date.getMonth()];
const day = date.getDate();
const year = date.getFullYear();

// Day of the week
const weekInText = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let dayOfWeek = weekInText[date.getDay()];

document.querySelector('.current-date').textContent = `${month} ${day}, ${year} • ${dayOfWeek}`;

// Updates the greeting based on Time
function updatePeriodOfDay() {
    const hour = new Date().getHours();

    if (hour == 0) {
        return "it's midnight";
    } else if (hour >= 1 && hour < 12 ) {
        return "good morning";
    } else if (hour >= 12 && hour < 18 ) {
        return "good afternoon";
    } else {
        return "good evening";
    }
}

document.querySelector('.day-period').textContent = updatePeriodOfDay();