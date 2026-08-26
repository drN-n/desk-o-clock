// Theme Manager

const THEME_KEY = 'desk-ocock-design-theme';
const DEFAULT_THEME = 'split-flap';

// Themes
// more themes will be added
export const THEMES = [
    { id: 'split-flap', label: 'Split-Flap' },
    { id: 'ambient-daylight', label: 'Ambient Daylight' },
];

let currentTheme = DEFAULT_THEME;
let onChangeCallback = null;

function applyTheme(themeId) {
    document.documentElement.dataset.theme = themeId;
}

export function getDesignTheme() {
    return currentTheme;
}

export function setDesignTheme(themeId) {
    currentTheme = themeId;
    localStorage.setItem(THEME_KEY, themeId);
    applyTheme(themeId);
    if (onChangeCallback) onChangeCallback(themeId);
}

// Instant change instead of waiting for next tick
export function onThemeChange(callback) {
    onChangeCallback = callback;
}

export function initializeTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const isValid = saved && THEMES.some((theme) => theme.id === saved);
    currentTheme = isValid ? saved : DEFAULT_THEME;
    applyTheme(currentTheme);
}