# RuralTech Skill Page — React version

This project converts the original RuralTech Skill Page to React while keeping the original visual styling and learning content.

## Run it

1. Install Node.js if it is not already installed.
2. Extract this ZIP.
3. Open a terminal in the extracted `ruraltech-react` folder.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local address printed by Vite (usually `http://localhost:5173`).

## Main files

- `src/App.jsx` — React page components, lesson modal, quiz interactions, progress, achievements, and reset.
- `src/skills.js` — original skill and lesson data/content.
- `src/style.css` — original page CSS, reused without redesigning it.
- `src/lesson.css` — lesson popup and reset-button CSS that was previously inserted dynamically by JavaScript.
- `original-backup/` — unchanged copies of the original HTML, CSS, and JavaScript files.

Progress continues to be stored in browser `localStorage` using the existing key `ruralTechProgress`.
