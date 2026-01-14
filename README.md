# PROG-101-VOL-1

> A collection of practical programming exercises and mini-projects built with TypeScript and Astro to master coding fundamentals.

This repository contains a collection of practical programming exercises, migrated to a modern component-based architecture.

## 🚀 Technologies

- **Framework:** [Astro 5.0](https://astro.build/) (Islands Architecture and Server-First)
- **Language:** TypeScript (Strict logic separated from the DOM)
- **Styling:** Modern CSS3 with **BEM** methodology and CSS Variables.
- **Routing:** Astro ClientRouter (SPA feel with smooth transitions).

## 📂 Project Structure

The architecture follows the separation of concerns pattern:

```text
src/
├── components/      # Reusable UI components (ProjectCard, etc.)
├── layouts/         # Base templates (MainLayout)
├── pages/           # Project routes and views
│   ├── index.astro  # Home page
│   └── projects/    # Individual mini-applications
├── scripts/         # 🧠 Pure business logic in TypeScript (No DOM)
└── styles/          # Design system
    ├── global.css   # Reset and variables (:root)
    └── bem-ui.css   # BEM blocks and elements

```

## 🛠️ Installation and Usage

1. **Clone the repository:**

```bash
git clone [https://github.com/your-username/PROG-101-VOL-1.git](https://github.com/your-username/PROG-101-VOL-1.git)
cd PROG-101-VOL-1

```

2. **Install dependencies:**

```bash
npm install

```

3. **Start development server:**

```bash
npm run dev

```

Visit `http://localhost:4321` in your browser.

## 📦 Available Scripts

| Command           | Description                                              |
| ----------------- | -------------------------------------------------------- |
| `npm run dev`     | Starts the local development server.                     |
| `npm run build`   | Compiles the project for production (static generation). |
| `npm run preview` | Local preview of the production build.                   |
| `npm run astro`   | Runs Astro CLI commands (add, check, etc).               |

## 📝 Included Exercises

1. **Km to Miles Converter:** Unit converter with type validation and error handling.
2. **Triangle Area Calculator:** Interactive geometric calculator.

## 🤝 Contribution Standard

Commits follow the project's established convention:

- `[FEAT]`: New features.
- `[FIX]`: Bug fixes.
- `[REFACTOR]`: Code changes that do not alter functionality.
- `[STYLE]`: Format or CSS style changes.

---

Made with 🚀 and TypeScript.
