## Repository summary

This is a small React + Vite portfolio webapp (single-page) using plain JSX, Vite for dev/build, and ESLint for linting. Key entry points:

- `package.json` — contains scripts (`dev`, `build`, `preview`, `lint`) and dependencies (notably `vite`, `react`, `react-dom`, `bootstrap`, `tailwindcss`).
- `vite.config.js` — Vite configuration (project uses the default Vite React setup).
- `src/main.jsx` — application bootstrap (mounts `App` into the DOM).
- `src/App.jsx` — root component and layout.
- `src/components/` — small, focused UI components: `Header.jsx`, `About.jsx`, `Contact.jsx`, `Education.jsx`, `Experience.jsx`, `Skills.jsx`.
- `public/` — static assets served as-is.

## Why this structure

Keep components small and single-purpose. The app groups each portfolio section as its own component under `src/components`. New UI pieces should follow the same pattern: one file per component, exported as a default functional component, and imported in `App.jsx` or wherever appropriate.

## Common tasks & commands

Use the scripts in `package.json`:

```powershell
npm install
npm run dev    # start Vite dev server (HMR, default port 5173)
npm run build  # produce production build
npm run preview# locally preview production build
npm run lint   # run eslint across the project
```

When editing components, prefer small, incremental changes and verify in `npm run dev`.

## Project-specific conventions

- Files use ES module `import`/`export` and `.jsx` for components.
- Component filenames use PascalCase and default exports (e.g. `Header.jsx` -> `export default function Header(){}`).
- Styles: top-level `index.css` and `App.css` live in `src/`. The project also includes `tailwindcss` and `bootstrap` in `package.json` — check `index.css`/`App.css` to see which utilities are used before adding new global styles.
- ESLint configuration is in `eslint.config.js`. Run `npm run lint` and follow autofix suggestions where safe.

## Integration points & external deps

- Runtime: React + ReactDOM. Vite serves and builds the app.
- CSS frameworks: `bootstrap` and `tailwindcss` are present as dependencies; inspect `index.css` to see which is actually used.
- No backend services are present in this repo. Any API integrations would be added as client-side fetch calls; prefer adding a small `src/lib/api.js` for shared fetch wrappers if needed.

## Editing tips and examples

- Add a new section component:
  1. Create `src/components/NewSection.jsx` as a default-export functional component.
  2. Import and include it in `src/App.jsx` where appropriate.

- Example import in `App.jsx`:

```js
import NewSection from './components/NewSection.jsx'

function App(){
  return (
    <main>
      <NewSection />
    </main>
  )
}
```

## What to avoid

- Don’t convert the repo to TypeScript or change major build tools without confirming with the maintainer — this is intentionally a minimal Vite+React setup.
- Avoid adding large or complex global CSS rules; prefer component-scoped styles or utility classes to keep layout predictable.

## Missing / not present

- There are currently no tests or CI configs in the repository. If you add tests, include a simple npm script and update the README.

## Where to look for more context

- `README.md` — high-level project description and rationale.
- `package.json` — scripts and dependencies (source of truth for developer workflows).
- `src/components/` — canonical examples of components to follow.

If anything here is unclear or you want the instructions to enforce stricter rules (formatting, commit message style, or a preferred CSS approach), tell me which conventions to add and I will update this file.
