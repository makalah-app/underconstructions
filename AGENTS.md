# Repository Guidelines

## Project Structure & Module Organization
This repository uses the Next.js App Router. Feature code sits in `app/`, with `app/layout.tsx` defining shared wrappers and `app/page.tsx` hosting the landing page UI. Global design tokens live in `app/globals.css`, and reusable utilities should be promoted into a future `app/(components)` or `components/` folder to keep the root lean. Static assets, such as `public/logo.png`, belong in `public/`. Tailwind and TypeScript configuration is centralized in `tailwind.config.ts` and `tsconfig.json`; keep branding colours and animation tokens there rather than scattering CSS variables across components.

## Build, Test, and Development Commands
Run `npm install` once to sync dependencies. Use `npm run dev` for the local development server, `npm run build` to produce the production bundle, and `npm run start` to smoke-test the build artifact. `npm run lint` runs the Next.js ESLint profile and should stay green before you push or open a PR.

## Coding Style & Naming Conventions
The project is written in strict TypeScript; prefer typed function components and server components unless you need client hooks. Match the existing two-space indentation, single quotes, and trailing commas enforced by the default Next.js formatter. When composing Tailwind classes, group layout → spacing → colour tokens to keep diffs readable. Name React components in PascalCase (`UnderConstruction`) and files in lowercase dashed patterns when introducing shared modules (for example, `countdown-timer.tsx`).

## Testing Guidelines
There is no automated test harness yet, so linting plus manual browser checks are the current gate. When adding tests, favour React Testing Library and place specs near the feature under `__tests__/` (e.g., `app/__tests__/page.test.tsx`) to align with Next's module resolution. Document any behaviours validated manually in the PR description until we adopt full integration tests.

## Commit & Pull Request Guidelines
Recent history follows Conventional Commits (`feat:`, `fix:`); continue using `type: concise summary` with an optional body explaining rationale and trade-offs. Squash noisy work-in-progress commits before pushing. Pull requests should describe the user-visible change, list validation steps (`npm run lint`, screenshots for UI tweaks), and link to tracking issues or tasks. Mention any configuration changes so deployers can update environment variables or assets.
