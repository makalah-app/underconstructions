# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is "Makalah AI", an under-construction landing page for an Indonesian academic writing AI platform. It's built with Next.js 14 using the App Router, TypeScript, and Tailwind CSS with a dark theme design system.

## Development Commands
- `npm run dev` - Start development server (default port 3000)
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with Next.js configuration

## Architecture & Structure
- **App Router Structure**: Uses Next.js App Router with `app/` directory
- **Main Files**:
  - `app/layout.tsx` - Root layout with font configuration (Inter + Roboto) and metadata
  - `app/page.tsx` - Landing page component with features list and under-construction message
  - `app/globals.css` - Global styles with CSS custom properties for dark theme
- **Design System**: Tailwind CSS with custom color tokens using OKLCH color space
- **Typography**: Inter (sans-serif) and Roboto (headings) from Google Fonts
- **Theme**: Dark mode by default with CSS custom properties for colors

## Key Configuration
- **TypeScript**: Strict mode enabled with path aliases (`@/*` maps to `./`)
- **Tailwind**: Extended theme with custom colors, animations, and font families
- **Next.js**: React strict mode enabled, images domain configuration ready
- **Colors**: Uses OKLCH color space with primary orange (`oklch(0.65 0.2 45)`) and yellow accent

## Development Guidelines
- Follow existing code style: 2-space indentation, single quotes, trailing commas
- Use TypeScript strict mode - prefer typed function components and server components
- Group Tailwind classes: layout → spacing → color tokens
- Component naming: PascalCase for components, lowercase-dashed for files
- Recent commits follow Conventional Commits format (`feat:`, `fix:`)

## Content & Branding
- Site is in Indonesian language (`lang="id"`)
- Brand: "Makalah AI" - AI platform for academic paper writing
- Logo: `/public/logo.png` (80x80px, rounded corners)
- Meta description emphasizes "Fokus anda adalah berpikir, bukan berkutat dengan prompt"

## Testing & Quality
- No automated test suite currently - relies on manual browser testing
- ESLint with Next.js configuration must pass before commits
- Manual validation required for UI changes with screenshots

## Important Notes
- Always run `npm run lint` before committing
- The site is currently an under-construction page with feature preview
- All text content is in Indonesian
- Dark theme is the default and only theme currently implemented