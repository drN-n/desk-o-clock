// Elements
const greetingElement = document.querySelector('.greeting_day');
const clockTimeElement = document.querySelector('.clock_time');
const clockDateElement = document.querySelector('.clock_date');
const weekDayElement = document.querySelector('.clock_weekday');

// Formatter
const time12HFormatter = new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
});

const time24HFormatter = new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
});

const dateFormatter = new Intl.DateTimeFormat(undefined, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
});

const weekDayFormatter = new Intl.DateTimeFormat(undefined, {
    weekday: 'long'
});


function getGreeting(hour) {
    if (hour === 0) {
        return "it's midnight";
    } else if (hour >= 1 && hour < 12 ) {
        return "good morning";
    } else if (hour >= 12 && hour < 18 ) {
        return "good afternoon";
    } else {
        return "good evening";
    }  
}

function updateClock() {
    const now = new Date();

    const hour = now.getHours();

    greetingElement.textContent = getGreeting(hour);

    clockTimeElement.textContent = time12HFormatter.format(now);
    clockDateElement.textContent = dateFormatter.format(now);
    weekDayElement.textContent = weekDayFormatter.format(now);

}

updateClock();
setInterval(updateClock, 1000); //Updates per second