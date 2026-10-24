# Quizora — DevCamp 2.0 Task 2

A responsive interactive quiz app built with React, JavaScript, and CSS. This project is frontend-only and does not need a backend or database.

## Features

- Home screen with quiz introduction and question count
- 12 multiple-choice questions across HTML, CSS, JavaScript, and React
- One question at a time, with four answer options
- Selected-answer state, correctness feedback, and explanations
- Progress bar and question counter
- Results screen with score percentage and correct/incorrect counts
- Review screen with answers and explanations
- Restart quiz and shuffled question order
- Responsive layout for desktop and mobile
- Accessible labels and keyboard focus styles

## React concepts demonstrated

- Functional components: `Header`, `HomeScreen`, `QuizScreen`, `Question`, `Option`, `QuizProgress`, `Result`, `ReviewScreen`
- Props: question data, selections, handlers, and results are passed into child components
- State: `useState` manages quiz stage, current question, selected answers, and results
- Event handling: start, select, check, next, review, and restart actions
- Conditional rendering: home, quiz, result, and review stages
- Lists: `.map()` renders questions' answer options and review items
- Arrays and objects: questions are stored in a structured JavaScript array

## Run locally

Install Node.js (LTS), then open a terminal in this project folder and run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

To test a production build:

```bash
npm run build
npm run preview
```

## Deploy to GitHub and Vercel

1. Create a GitHub repository, for example `devcamp-interactive-quiz`.
2. Upload the contents of this folder to the repository root. Make sure `package.json`, `index.html`, and `src/` are at the root level (not nested inside another project folder).
3. Import the repository into Vercel.
4. Vercel should detect Vite automatically. Build command: `npm run build`; output directory: `dist`.
5. Deploy and test the live link on mobile and desktop.

## Project structure

```text
devcamp-interactive-quiz/
├── index.html
├── package.json
├── README.md
└── src/
    ├── main.jsx
    └── styles.css
```

## Customization

Edit the `questions` array near the top of `src/main.jsx` to change questions. The `answer` value is the zero-based index of the correct option: `0` is the first option, `1` is the second, and so on.
