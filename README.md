# Desk O'clock

A clean, distraction-free digital clock for your browser tab or second monitor — built with vanilla HTML, CSS, and JavaScript.

<!-- screenshot will be posted here -->

## Features

- **Two selectable clock designs**, switchable anytime from the settings panel and remembered across visits:
  - **Split-Flap** (default) - a mechanical flip-board look, with individual flap tiles per digit and a dedicated AM/PM indicator
  - **Ambient Daylight** - the entire page background continuously shifts color based on the real time of day, smoothly blending between dawn, noon, dusk, and night rather than jumping between fixed states
- **Live digital clock** - updates every second
- **12H / 24H time format toggle**
- **Show / hide seconds** toggle
- **Dynamic greeting** based on the time of day (morning, afternoon, evening, midnight)
- **Full date and weekday display**
- **Dark mode** - follows your system preference by default, with a manual override that persists across sessions (applies to Split-Flap; Ambient Daylight handles its own light/dark range automatically through the day)
- **Fullscreen mode** - great for desk displays or kiosk setups
- **Settings panel** - every preference (time format, seconds, clock design, dark mode) is saved locally, so your setup is remembered on your next visit
- **Responsive layout** - a navbar that stays a comfortable size on large screens instead of scaling up indefinitely, floating above the content so the clock stays centered in the full viewport

## Tech Stack

- HTML5
- CSS3 (custom properties, `light-dark()` for theming, attribute-based theme switching)
- Vanilla JavaScript (ES modules, no frameworks, no build step)
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/): Space Mono (display type) and Archivo (body text)

## Project Structure

```
js/
├── app.js
├── clock.js
├── flap.js
├── ambient.js
├── render.js
├── theme.js
├── settings.js
├── darkmode.js
└── fullscreen.js
```

## Getting Started

Clone the repo and open `index.html` in your browser — no build step or dependencies required.

```bash
git clone https://github.com/drN-n/desk-o-clock.git
cd desk-o-clock
```

Then just open `index.html` directly, or serve it with any static file server.

## Roadmap

- [ ] Alarm
- [ ] Stopwatch
- [ ] More background/customization options
- [ ] Weather (maybe — still deciding if it fits the "distraction-free" goal)

## License

MIT
