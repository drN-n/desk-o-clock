import { renderFlaps } from "./flap.js";
import { renderAmbient } from "./ambient.js";
import { getDesignTheme } from "./theme.js";

// Only need to add 1 line for new theme
const renderers = {
    'split-flap': renderFlaps,
    'ambient-daylight': renderAmbient,
};

export function renderClockFace(elements, data) {
    const renderer = renderers[getDesignTheme()] || renderFlaps;
    renderer(elements, data);
}