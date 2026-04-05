# Adarsh Tiwari — Personal Portfolio

A modern, 3D glassmorphism portfolio built with **React 18** + **Material UI 5** + **Vite**.

## ✨ Features

- 🌗 Dark / Light mode toggle
- 🎇 Animated particle network canvas background
- 🃏 3D tilt-on-hover cards (CSS perspective transforms)
- ⌨️ Typewriter / typed-text effect in Hero
- 🔭 Scroll-reveal animations (IntersectionObserver)
- 📊 Animated skill progress bars
- 🖱️ Custom cursor glow effect
- 📱 Fully responsive (mobile hamburger menu)
- 🚀 Back-to-top FAB button
- 🧊 Glassmorphism UI throughout
- 📬 Contact form with success state

## 📁 Project Structure

```
adarsh-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── BackToTop.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticleCanvas.jsx
│   │   ├── Projects.jsx
│   │   ├── Reveal.jsx        ← scroll-reveal wrapper
│   │   ├── Skills.jsx
│   │   └── TiltCard.jsx      ← 3D tilt wrapper
│   ├── data/
│   │   └── index.js          ← all portfolio content here
│   ├── hooks/
│   │   ├── useParticleCanvas.js
│   │   ├── useScrollReveal.js
│   │   └── useTypedText.js
│   ├── theme/
│   │   └── index.js          ← MUI dark & light themes
│   ├── App.jsx
│   ├── index.css             ← global styles & keyframes
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## ✏️ Customization

All portfolio content is centralized in **`src/data/index.js`** — edit your name, skills, projects, contact links, etc. there.

Theme colors are in **`src/theme/index.js`**.

Global animations and CSS variables are in **`src/index.css`**.

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite 5 | Build tool & dev server |
| Material UI 5 | Component library & theming |
| Emotion | CSS-in-JS (MUI peer dep) |
| Canvas API | Particle network background |
| IntersectionObserver | Scroll reveal animations |
| CSS Transforms | 3D tilt card effect |
