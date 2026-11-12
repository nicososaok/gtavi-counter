# 🌴 GTA VI — Time in Development Tracker

> A high-performance, immersive, and fully responsive real-time development tracker for **Grand Theft Auto VI**, built with modern web technologies and styled with a retro-futuristic **Vice City / Synthwave** aesthetic.

![GTA VI Tracker Banner](gta-vi.jpg)

---

## ✨ Features

- **Precision Real-Time Counter**: Calculates exact years, months, days, hours, minutes, and seconds elapsed since key project milestones.
- **Milestone Preset Switcher**: Toggle between historical reference points:
  - **Concept (2014)**: Early pre-production and conceptualization after GTA V's launch.
  - **Post-RDR2 (2018)**: Shift of primary studio resources following *Red Dead Redemption 2*.
  - **Official Announcement (2022)**: Rockstar's first public confirmation of active development.
  - **Trailer 1 (2023)**: World premiere of the official reveal trailer.
- **Interactive Tooltips & Dynamic History**: Hover over milestones for quick insights or select them to update the active historical description instantly.
- **Visual Modes**: 
  - *Background Cover*: Immersive full-screen Vice City ambient backdrop.
  - *Footer Embedded*: Clean architectural banner layout.
- **Neon Extreme Theme Toggle**: Switch seamlessly between the soft sunset atmosphere and a high-contrast cyberpunk neon-night palette.
- **Synthwave Ambient Audio (Easter Egg)**: Toggle atmospheric retro audio playback right from the interface.
- **Retro Grain & Particle Effects**: Custom CSS animations and SVG noise overlay for authentic 80s aesthetic depth.

---

## 🛠️ Tech Stack

- **HTML5** (Semantic structure & layout)
- **Tailwind CSS** (Utility-first styling via CDN)
- **Vanilla JavaScript** (Real-time time-calculation algorithms & DOM manipulation)
- **Font Awesome & Google Fonts** (Typography & iconography)

---

## 📁 Project Structure

```text
gtavi-counter/
├── index.html       # Main application markup & structure
├── style.css        # Custom neon gradients, animations, and theme styles
├── index.js         # Counter engine, preset listeners, and audio/theme controllers
└── gta-vi.jpg       # Vice City ambient background asset
```

---

## 🚀 Getting Started Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/gtavi-counter.git
   ```
2. Navigate into the project folder:
   ```bash
   cd gtavi-counter
   ```
3. Make sure your background image (`gta-vi.jpg`) is placed in the root directory.
4. Open `index.html` in your favorite browser or run it via a local server (like VS Code Live Server).

---

## ☁️ Deployment

### GitHub
1. Initialize git and commit your files:
   ```bash
   git init
   git add .
   git commit -m "feat: initial release of GTA VI Development Tracker"
   ```
2. Link your remote repository and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/gtavi-counter.git
   git push -u origin main
   ```

### Vercel
1. Go to [Vercel](https://vercel.com/) and log in with your GitHub account.
2. Click **Add New...** -> **Project**.
3. Import your `gtavi-counter` repository.
4. Leave build settings as default (since this is a static HTML/CSS/JS site) and click **Deploy**.

---

## 📄 License & Disclaimer

This project is a fan-made portfolio piece and is not endorsed by, affiliated with, or officially connected to **Rockstar Games** or **Take-Two Interactive**. GTA VI © Rockstar Games.