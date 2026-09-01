// Renders "flap" character (digits + colon separators) into a board element
export function renderFlaps(elements, data) {

    const { board, period } = elements;
    const { flapChars, dayPeriod } = data;


    const flapsChanged = board.children.length !== flapChars.length;

    if (flapsChanged) {
        board.innerHTML = '';
        for (const char of flapChars) {
            const flap = document.createElement('div');
            flap.className = char === ':' ? 'flap flap--colon' : 'flap';
            board.appendChild(flap);
        }
    }

    const flapElements = board.children;
    for (let i = 0; i < flapChars.length; i++) {
        flapElements[i].textContent = flapChars[i];
    }

    if (period) {
        period.textContent = dayPeriod;
        period.hidden = !dayPeriod;
    }
}