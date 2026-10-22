# Manas Raj — AI Generalist & Creative Technologist Portfolio

A dynamic, responsive, and editorial personal portfolio tailored for evaluation by **Ather Energy** for the **AI Generalist (Design)** role.

Built with semantic HTML5, modern CSS3 design tokens, and modular vanilla ES6 JavaScript—fully compatible with GitHub Pages with zero external build tools, bundlers, or package dependencies.

---

## 🚀 Live Preview & Deployment

- **Expected GitHub Pages URL:** [https://mr2704.github.io/portfolio/](https://mr2704.github.io/portfolio/)
- **Local Development URL:** [http://localhost:3000](http://localhost:3000)

### Run Locally

Run a lightweight HTTP server in the repository root:

```bash
# Python HTTP Server
python -m http.server 3000

# Or Node.js
npx -y serve . -p 3000
```

Then visit `http://localhost:3000` in your web browser.

---

## 🛠️ Project Structure & Data Architecture

The project decouples data from presentation, making it effortless to maintain and scale without touching markup:

```text
ather_portfolio/
├── index.html           # Semantic markup, accessible modals, and layout structure
├── styles.css           # Editorial design system, light/dark themes, responsive grid
├── script.js            # Kinetic canvas, project explorer, modal focus traps, lightbox
├── data/
│   ├── projects.js      # Structured project catalog & full case study manifestos
│   ├── gallery.js       # Photography & visual storytelling catalog with metadata
│   └── profile.js       # Verified academics, skills matrix, milestones & community roles
└── assets/
    ├── photos/          # Drop personal photos here (photo-1.jpg, photo-2.jpg, etc.)
    └── resume.pdf       # Verified curriculum vitae PDF for direct download
```

---

## 🧩 Key Interactive Features

1. **Kinetic Generative Synapse Canvas (Hero):**
   - 60fps reactive canvas drawing dynamic particle synapses that interactively deflect around cursor velocity.
   - Respects `prefers-reduced-motion` and pauses offscreen.
   - Dynamically recolors across Dark and Light themes.

2. **Interactive Project Explorer:**
   - Realtime client-side category filtering (`All`, `AI & Machine Learning`, `Software Engineering`, `Product & UI/UX Design`).
   - Rich visual representations (Telemetry Chart for StockSense, swipe card mockup for CodeCrew, acoustic waveform for Parkinson's, web stack for Alexa Developers SRM, security gateway for SentinelAPI).

3. **In-Depth Case Study Modal:**
   - Full case studies with Problem Statements, Goals & Constraints, Actual Contributions, Architecture breakdowns, Tech stack roles, and Verified Learnings.
   - Accessible keyboard focus trap, Escape key dismiss, backdrop click, and mobile-friendly viewports.

4. **Visual Storytelling Gallery & Fullscreen Lightbox:**
   - Curated editorial slots for photography and videography.
   - Graceful fallback placeholders with film grain and coordinates if images are pending.
   - Lightbox viewer supporting keyboard arrows (← / →), Escape key, and image metadata.

5. **Theme Switcher (Dark / Light):**
   - Persistent theme stored in `localStorage`.
   - Auto-detects system color scheme (`prefers-color-scheme`).
   - Dynamically updates `<meta name="theme-color">` for mobile browser bars.

6. **Interactive Skills Matrix & Milestones Timeline:**
   - Category switcher for AI/ML, Accelerated Computing (CUDA/RAPIDS), Software Engineering, Web Development, and Visual Storytelling.
   - Strictly truthful representation with **zero fabricated percentages or progress bars**.
   - Verified academic records: SRM IST B.Tech CSE (CGPA: 7.98), Class X (85.2%), Class XII (65.2%).

---

## 📸 Adding Your Personal Assets

1. **Photographs:**
   Drop your photography/videography stills into `assets/photos/`:
   - `assets/photos/photo-1.jpg` (Street / Architecture)
   - `assets/photos/photo-2.jpg` (Urban / Atmosphere)
   - `assets/photos/photo-3.jpg` (Aaruush Event / Stage)
   - `assets/photos/photo-4.jpg` (Cinematic Road / Travel)
   *The system automatically detects when your images load and gracefully hides the graphic placeholders.*

2. **Resume:**
   Save your PDF resume to `assets/resume.pdf`. The header, mobile drawer, and contact buttons link directly to it. If the file is not yet present, a helpful notice modal guides visitors.

---

## 🚢 Publishing to GitHub Pages

1. Stage and commit your changes:
   ```bash
   git add .
   git commit -m "Transform portfolio into dynamic creative-tech experience for Ather AI Generalist evaluation"
   ```

2. Push to your main branch:
   ```bash
   git push origin main
   ```

3. Enable GitHub Pages:
   - Navigate to **GitHub Repo → Settings → Pages**.
   - Under **Build and deployment**, select **Deploy from a branch**.
   - Set **Branch** to `main` and folder to `/ (root)`, then click **Save**.
   - Your site will be live at `https://mr2704.github.io/portfolio/`.
