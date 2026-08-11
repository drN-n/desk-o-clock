// Elements
const greetingElement = document.querySelector('.greeting_day');
const clockTimeElement = document.querySelector('.clock_time');
const clockDateElement = document.querySelector('.clock_date');
const weekDayElement = document.querySelector('.clock_weekday');

// Settings state (defaults: 12H format, seconds shown)
let use24Hour = false;
let showSeconds = true;

function buildTimeFormatter() {
    return new Intl.DateTimeFormat(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: showSeconds ? '2-digit' : undefined,
        hour12: !use24Hour,
    });
}

let timeFormatter = buildTimeFormatter();

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

    clockTimeElement.textContent = timeFormatter.format(now);
    clockDateElement.textContent = dateFormatter.format(now);
    weekDayElement.textContent = weekDayFormatter.format(now);

}


export function initializeClock() {
    updateClock();
    setInterval(updateClock, 1000); //Updates per second
}

// Called by settings.js
// when the user changes the time format
export function setTimeFormat(is24Hour) {
    use24Hour = is24Hour;
    timeFormatter = buildTimeFormatter();
    updateClock();
}

// when the user toggles seconds on/off
export function setShowSeconds(show) {
    showSeconds = show;
    timeFormatter = buildTimeFormatter();
    updateClock();
}