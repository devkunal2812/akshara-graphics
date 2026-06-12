# Akshara Graphics — Website

A modern creative-agency style website for **Akshara Graphics** (Design · Print · Inspire), built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Hero section** with animated floating product mockups
- **Services** grid with 3D-tilt hover cards
- **Featured Portfolio** horizontal scroll showcase
- **Printspiration Gallery** — Pinterest-style masonry gallery with search, category filters, and modal preview
- **About** section with animated statistics counters
- **Testimonials** marquee
- **Contact** section with quote-request form and WhatsApp CTA
- Animated **loading screen**
- **Smooth scrolling** via Lenis
- SEO metadata via Next.js Metadata API

## Tech Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS v4
- Framer Motion
- react-masonry-css
- react-countup
- react-fast-marquee
- lenis (smooth scroll)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/            # App Router pages, layout, global styles
├── components/     # Reusable UI components (Navbar, Hero, cards, etc.)
├── sections/       # Page sections (Services, Gallery, Contact, etc.)
└── data/           # Static data (gallery items)
```

## Next Steps / Roadmap

- Replace placeholder Unsplash images with real Akshara Graphics project photos
- Connect the contact form to email (e.g. `@emailjs/browser` or an API route)
- Add real 3D models (Three.js / React Three Fiber) for product previews
- Hook up a CMS (Sanity/Contentful) for dynamic portfolio management
- Deploy to Vercel

## Deployment

```bash
npm install -g vercel
vercel
```
