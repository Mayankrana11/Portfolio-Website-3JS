# 3D Interactive Portfolio - Mayank Rana

A cinematic, interactive 3D portfolio built with React, Three.js, and modern web technologies. Features an immersive experience with animated moon backgrounds, parallax effects, and smooth motion systems.

## Features

- **3D Moon Background** - Animated Three.js moon with rotating texture and atmospheric glow
- **Interactive Camera Rig** - Mouse-tracking 3D camera with smooth parallax effects
- **Glassmorphism UI** - Modern translucent interface design
- **Smooth Scroll** - Lenis-powered smooth scrolling experience
- **Cinematic Animations** - GSAP and Framer Motion for premium motion design
- **Responsive Design** - Fully responsive layout with Tailwind CSS

## Tech Stack

### Frontend
- **React 19** - UI framework
- **Three.js** - 3D rendering
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Three.js helpers and components
- **@react-three/postprocessing** - Post-processing effects

### Styling & Animation
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12** - Animation library
- **GSAP** - Professional animation toolkit
- **Lenis** - Smooth scrolling

### Build Tools
- **Vite 8** - Fast build tool
- **ESLint** - Code linting

## Project Structure

```
src/
├── components/      # Reusable UI components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── HeroContent.jsx
│   └── Loader.jsx
├── scenes/          # Three.js 3D scenes
│   ├── Experience.jsx
│   ├── HeroScene.jsx
│   ├── ProjectsScene.jsx
│   ├── Moon.jsx
│   ├── CameraRig.jsx
│   └── FloatingPortrait.jsx
├── sections/        # Main page sections
│   ├── HeroSection.jsx
│   ├── AboutSection.jsx
│   ├── SkillsSection.jsx
│   ├── ExperienceSection.jsx
│   ├── ProjectsSection.jsx
│   └── ContactSection.jsx
└── lib/             # Utilities
    └── lenis.js
```

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm or bun package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Features in Detail

### 3D Elements
- **Moon Scene**: A fully animated moon with rotation and subtle floating movement
- **Camera Rig**: Smooth mouse-tracking camera that responds to user interaction
- **Floating Portrait**: Parallax portrait effect with dynamic lighting

### Interactive Elements
- **Parallax Background**: Moon background drifts at different speeds based on mouse position
- **Smooth Scroll**: Lenis integration for buttery-smooth scrolling
- **Mouse Tracking**: Interactive 3D elements that follow cursor position

### Sections
1. **Hero** - Animated moon background with floating portrait
2. **About** - Personal introduction and background
3. **Skills** - Technical stack visualization
4. **Experience** - Professional timeline
5. **Projects** - Portfolio of work with tech stack badges
6. **Contact** - Contact information and links

## Customization

To customize this portfolio for your own use:

1. Replace `/videos/Moon.mp4` with your own video background
2. Replace `/images/mayank.png` with your own portrait
3. Replace `/textures/moon.jpg` with your own texture
4. Update content in `App.jsx` and relevant section files

## License

This project is open source and available under the MIT License.

## Author

**Mayank Rana** - B.Tech student, Full Stack Developer & Creative Web Engineer
