// Renders "flap" character (digits + colon separators) into a board element
export function renderFlaps(boardElement, flapChars) {
    const flapsChanged = boardElement.children.length !== flapChars.length;

    if (flapsChanged) {
        boardElement.innerHTML = '';
        for (const char of flapChars) {
            const flap = document.createElement('div');
            flap.className = char === ':' ? 'flap flap--colon' : 'flap';
            boardElement.appendChild(flap);
        }
    }

    const flapElements = boardElement.children;
    for (let i = 0; i < flapChars.length; i++) {
        flapElements[i].textContent = flapChars[i];
    }
}