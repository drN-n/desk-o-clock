//            #1B263B      #142033     #0D1B2A
const NIGHT = [[27, 38, 59], [20, 32, 51], [13, 27, 42]];
//            #F6C185        #EE9C7C       #7C5A8C
const DAWN = [[246, 193, 133], [238, 156, 124], [124, 90, 140]];
//            #BFE3F2        #8FBFE0       #4E6E9E
const NOON = [[191, 227, 242], [143, 191, 224], [78, 110, 158]];
//            #F2946B        #A45A87       #4B3466
const DUSK = [[242, 148, 107], [164, 90, 135], [75, 52, 102]];

// Anchors span a FULL 24h cycle
const ANCHORS = [
    { hour: 0, colors: NIGHT },
    { hour: 6, colors: DAWN },
    { hour: 12, colors: NOON },
    { hour: 18, colors: DUSK },
    { hour: 24, colors: NIGHT },
];

// Recompute + write the DOM once a minute, not every second
let lastMinuteKey = null;

function lerp(start, end, progress) {
    return start + (end - start) * progress;
}

// Blends two RGB colors together based on progress (0 ~ 1)
function lerpColor(colorA, colorB, progress) {
    return [
        Math.round(lerp(colorA[0], colorB[0], progress)),
        Math.round(lerp(colorA[1], colorB[1], progress)),
        Math.round(lerp(colorA[2], colorB[2], progress)),
    ];
}

function rgbString([r, g, b]) {
    return `rgb(${r}, ${g}, ${b})`;
}

// Finds the two anchors the given decimal hour (e.g. 14.5 = 2:30pm)
// falls between, plus how far between them it is (0 to 1).
function findSurroundingAnchors(hourDecimal) {
    for (let i = 0; i < ANCHORS.length - 1; i++) {
        const from = ANCHORS[i];
        const to = ANCHORS[i + 1];
        if (hourDecimal >= from.hour && hourDecimal <= to.hour) {
            return {
                from,
                to,
                progress: (hourDecimal - from.hour) / (to.hour - from.hour),
            };
        }
    }

    return { from: ANCHORS[0], to: ANCHORS[1], progress: 0 };
}

function buildGradient(hourDecimal) {
    const { from, to, progress } = findSurroundingAnchors(hourDecimal);

    const stop = from.colors.map((colorA, i) => {
        const colorB = to.colors[i];
        return rgbString(lerpColor(colorA, colorB, progress));
    });

    return `linear-gradient(180deg, ${stop[0]} 0%, ${stop[1]} 55%, ${stop[2]} 100%)`;
}

export function renderAmbient(elements, data) {
    const { ambientTime } = elements;
    const { formattedTime, hour, minute } = data;

    if (ambientTime) ambientTime.textContent = formattedTime;

    const minuteKey = hour * 60 + minute;
    if (minuteKey !== lastMinuteKey) {
        lastMinuteKey = minuteKey;
        const hourDecimal = hour + minute / 60;
        document.documentElement.style.setProperty('--ambient-bg', buildGradient(hourDecimal));
    }
}