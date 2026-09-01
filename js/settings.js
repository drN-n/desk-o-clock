import { setTimeFormat, setShowSeconds } from "./clock.js";
import { getDesignTheme, setDesignTheme } from "./theme.js";

const FORMAT_KEY = 'desk-oclock-format';   // '12h' | '24h'
const SECONDS_KEY = 'desk-oclock-seconds'; // 'on' | 'off'

export function initializeSettings() {
    const settingsToggle = document.getElementById('settings-toggle');
    const settingsPanel = document.getElementById('settings-panel');
    const formatToggle = document.getElementById('format-toggle');
    const secondsToggle = document.getElementById('seconds-toggle');

    if (!settingsToggle || !settingsPanel || !formatToggle || !secondsToggle) return;

    // --- Panel open/close ---
    settingsToggle.addEventListener('click', (event) => {
        event.stopPropagation(); // prevent this click from also triggering the outside-click listener below
        const isOpen = !settingsPanel.hidden;
        settingsPanel.hidden = isOpen;
        settingsToggle.setAttribute('aria-expanded', String(!isOpen));
    });

    // Close the panel when clicking anywhere outside it
    document.addEventListener('click', (event) => {
        if (!settingsPanel.hidden && !settingsPanel.contains(event.target)) {
            settingsPanel.hidden = true;
            settingsToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // --- Time format toggle ---
    function applyFormat(format) {
        formatToggle.textContent = format === '24h' ? '24H' : '12H';
        setTimeFormat(format === '24h');
    }

    formatToggle.addEventListener('click', () => {
        const current = localStorage.getItem(FORMAT_KEY) || '12h';
        const next = current === '24h' ? '12h' : '24h';
        localStorage.setItem(FORMAT_KEY, next);
        applyFormat(next);
    });

    // --- Show seconds toggle ---
    function applySeconds(state) {
        secondsToggle.textContent = state === 'off' ? 'Off' : 'On';
        setShowSeconds(state !== 'off');
    }

    secondsToggle.addEventListener('click', () => {
        const current = localStorage.getItem(SECONDS_KEY) || 'on';
        const next = current === 'off' ? 'on' : 'off';
        localStorage.setItem(SECONDS_KEY, next);
        applySeconds(next);
    });

    // --- Apply saved preferences on load ---
    const savedFormat = localStorage.getItem(FORMAT_KEY);
    if (savedFormat) applyFormat(savedFormat);

    const savedSeconds = localStorage.getItem(SECONDS_KEY);
    if (savedSeconds) applySeconds(savedSeconds);

    // --- Clock Theme Picker ---
    const themePicker = document.getElementById('theme-picker');

    if (themePicker) {
        const themeButtons = themePicker.querySelectorAll('.theme-picker__option');

        function applyThemeUI(themeId) {
            themeButtons.forEach((button) => {
                button.setAttribute('aria-pressed', String(button.dataset.themeId === themeId));
            });
        }

        themeButtons.forEach((button) => {
            button.addEventListener('click', () => {
                setDesignTheme(button.dataset.themeId);
                applyThemeUI(button.dataset.themeId);
            });
        });

        applyThemeUI(getDesignTheme());
    }
}