/**
 * gallery.js — Photography & Visual Storytelling Catalog
 * 
 * Each item has metadata for the editorial gallery and interactive lightbox.
 * Real image files in `assets/photos/` are automatically loaded if present;
 * otherwise, a curated, high-craft creative placeholder is rendered.
 */

window.PORTFOLIO_GALLERY = [
  {
    id: "photo-1",
    src: "assets/photos/photo-1.jpg",
    title: "Shadows, Geometry & Street Cadence",
    category: "Street & Travel",
    categorySlug: "street",
    orientation: "portrait",
    aspectRatio: "4/5",
    caption: "Capturing high-contrast architectural shadows and spontaneous human movement during street explorations.",
    gear: "50mm Prime · Natural Light",
    placeholderTheme: "street",
    placeholderLabel: "01 / STREET & GEOMETRY",
    location: "Chennai, India",
    notes: "Drop your photograph as `assets/photos/photo-1.jpg` to display your personal capture."
  },
  {
    id: "photo-2",
    src: "assets/photos/photo-2.jpg",
    title: "Urban Atmosphere & Ambient Light",
    category: "Street & Travel",
    categorySlug: "street",
    orientation: "landscape",
    aspectRatio: "16/10",
    caption: "Exploring texture, evening light fall-off, and the quiet spaces between bustling city arteries.",
    gear: "35mm Equivalent · Low Light",
    placeholderTheme: "urban",
    placeholderLabel: "02 / URBAN ATMOSPHERE",
    location: "Tamil Nadu, India",
    notes: "Drop your photograph as `assets/photos/photo-2.jpg` to display your personal capture."
  },
  {
    id: "photo-3",
    src: "assets/photos/photo-3.jpg",
    title: "Campus Energy & Live Momentum",
    category: "Events & Campus",
    categorySlug: "events",
    orientation: "landscape",
    aspectRatio: "16/10",
    caption: "Behind-the-scenes documentation and live event coverage with the Aaruush Creatives team.",
    gear: "85mm Lens · Stage Lighting",
    placeholderTheme: "event",
    placeholderLabel: "03 / AARUUSH CREATIVES EVENT STILL",
    location: "SRM IST Campus",
    notes: "Drop your photograph as `assets/photos/photo-3.jpg` to display your personal capture."
  },
  {
    id: "photo-4",
    src: "assets/photos/photo-4.jpg",
    title: "Kinetic Motion & Spontaneous Horizons",
    category: "Cinematic & Motion",
    categorySlug: "cinematic",
    orientation: "landscape",
    aspectRatio: "16/9",
    caption: "Cinematography still exploring pacing, visual rhythm, and open highway landscapes during motorcycle journeys.",
    gear: "24fps · Wide Angle Composition",
    placeholderTheme: "cinematic",
    placeholderLabel: "04 / CINEMATIC ROAD STILL",
    location: "Highway Horizons",
    notes: "Drop your photograph as `assets/photos/photo-4.jpg` to display your personal capture."
  }
];
