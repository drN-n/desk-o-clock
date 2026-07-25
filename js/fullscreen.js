export function initializeFullscreen() {
    const fScreenToggle = document.getElementById('fullscreen-toggle');

    // Reconfirms if button exists
    if (!fScreenToggle) return;

    // Look for icon inside the button element
    const icon = fScreenToggle.querySelector('i');

    // Change icons inside the button 
    // Updates aria-label
    fScreenToggle.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen()
                .then(() => {
                    fScreenToggle.setAttribute('aria-label', 'Exit fullscreen');
                    if (icon) {
                        icon.className = 'fa-solid fa-compress';
                    }
                })
                .catch(err => alert(`Error enabling fullscreen: ${err.message}`));
        } else {
            document.exitFullscreen()
                .then(() => {
                    fScreenToggle.setAttribute('aria-label', 'Enter fullscreen');
                    if (icon) {
                        icon.className = 'fa-solid fa-expand';
                    }
                });
        }
    });
}