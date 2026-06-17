# July 04 Restaurant & Bar — Landing Page

A single-page website for July 04 Restaurant & Bar, located in Wonnuo, Wa,
Upper West Region, Ghana.

## Project structure

```
july04-website/
├── index.html          → Page markup
├── css/
│   └── styles.css      → All styling
├── js/
│   └── main.js         → Interactivity (nav scroll state, reservation modal)
├── images/
│   ├── venue-hero.jpg      → Main venue photo (hero, about, photo band, quote, gallery)
│   ├── food.jpg            → "Full Restaurant" card photo
│   ├── night-exterior.jpg  → "Night Vibes" card photo
│   ├── day-exterior.jpg    → "The Venue" card photo
│   └── bar-interior.jpg    → "Full Bar & Sports" card photo
└── README.md
```

## How to view it

Just open `index.html` in any browser — double-click the file, or right-click
→ Open With → your browser of choice. No build step, no server required.

## How to edit it

- **Text content** (headings, paragraphs, hours, address) → edit `index.html` directly.
- **Colors, spacing, fonts, layout** → edit `css/styles.css`. All brand colors are
  defined as CSS variables at the top of the file (`--terracotta`, `--teal`,
  `--forest`, `--sand`, etc.) so you can re-theme the whole site by changing a
  handful of values.
- **Reservation modal behavior, scroll effects** → edit `js/main.js`.
- **Photos** → drop a new image into `images/` and update the matching
  `background-image: url('images/your-file.jpg')` reference in `index.html`
  or `styles.css`.

## Next steps (not yet built)

- Live Google Maps embed in the "Visit Us" section (currently a styled placeholder)
- A menu page/section
- Real reservation form submission (currently just shows a confirmation alert)
- Scroll-triggered animations
