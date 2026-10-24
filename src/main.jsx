import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const questions = [
  {
    id: 1,
    category: "React",
    difficulty: "Easy",
    question: "Which React hook is used to manage component state?",
    options: ["useFetch", "useState", "useStyle", "useRender"],
    answer: 1,
    explanation: "useState adds a state variable to a functional component."
  },
  {
    id: 2,
    category: "JavaScript",
    difficulty: "Easy",
    question: "Which keyword declares a block-scoped variable that can be reassigned?",
    options: ["const", "static", "let", "define"],
    answer: 2,
    explanation: "let declares a block-scoped variable that can be reassigned."
  },
  {
    id: 3,
    category: "HTML",
    difficulty: "Easy",
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "High Transfer Machine Language",
      "Hyperlink Text Management Language",
      "Home Tool Markup Language"
    ],
    answer: 0,
    explanation: "HTML stands for HyperText Markup Language."
  },
  {
    id: 4,
    category: "CSS",
    difficulty: "Easy",
    question: "Which CSS property changes the text colour?",
    options: ["font-style", "text-color", "foreground", "color"],
    answer: 3,
    explanation: "The color property sets the foreground colour of text."
  },
  {
    id: 5,
    category: "React",
    difficulty: "Medium",
    question: "Why do React list items usually need a key prop?",
    options: [
      "To add CSS automatically",
      "To help React identify items between renders",
      "To make every item clickable",
      "To store component state"
    ],
    answer: 1,
    explanation: "Keys help React match list items when items are added, removed, or reordered."
  },
  {
    id: 6,
    category: "JavaScript",
    difficulty: "Medium",
    question: "What does Array.prototype.map() return?",
    options: [
      "A new array containing transformed items",
      "Only the first item",
      "A boolean value",
      "The original array's length"
    ],
    answer: 0,
    explanation: "map() creates a new array from the return value for each item."
  },
  {
    id: 7,
    category: "CSS",
    difficulty: "Medium",
    question: "Which layout system is designed for arranging items in rows or columns?",
    options: ["Local Storage", "Fetch API", "Flexbox", "JSON"],
    answer: 2,
    explanation: "CSS Flexbox is a one-dimensional layout system for rows or columns."
  },
  {
    id: 8,
    category: "JavaScript",
    difficulty: "Medium",
    question: "Which operator checks equality without type coercion?",
    options: ["=", "==", "===", "!="],
    answer: 2,
    explanation: "The strict equality operator === compares value and type."
  },
  {
    id: 9,
    category: "React",
    difficulty: "Hard",
    question: "What is the purpose of props in React?",
    options: [
      "To define CSS media queries",
      "To pass data from a parent component to a child",
      "To replace HTML",
      "To install packages"
    ],
    answer: 1,
    explanation: "Props let parent components pass values to child components."
  },
  {
    id: 10,
    category: "JavaScript",
    difficulty: "Hard",
    question: "What does the await keyword do inside an async function?",
    options: [
      "Stops the browser permanently",
      "Converts any value to a string",
      "Waits for a promise to settle before continuing that function",
      "Creates a new promise automatically in every case"
    ],
    answer: 2,
    explanation: "await pauses the surrounding async function until the promise settles."
  },
  {
    id: 11,
    category: "HTML",
    difficulty: "Medium",
    question: "Which HTML element is most appropriate for the main content of a page?",
    options: ["<aside>", "<main>", "<footer>", "<small>"],
    answer: 1,
    explanation: "The main element identifies the dominant content of the document."
  },
  {
    id: 12,
    category: "React",
    difficulty: "Hard",
    question: "What is conditional rendering in React?",
    options: [
      "Showing UI based on a condition",
      "Writing all components in CSS",
      "Rendering every screen at once",
      "Automatically saving data to a database"
    ],
    answer: 0,
    explanation: "Conditional rendering displays different UI depending on a condition or state."
  }
];

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function Icon({ name, size = 20 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true
  };

  const paths = {
    spark: <><path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" /><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" /></>,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
    refresh: <><path d="M20 7v5h-5" /><path d="M4 17v-5h5" /><path d="M6.2 9A7 7 0 0 1 18 6l2 6" /><path d="M17.8 15A7 7 0 0 1 6 18l-2-6" /></>,
    trophy: <><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z" /><path d="M7 6H4v2a4 4 0 0 0 4 4M17 6h3v2a4 4 0 0 1-4 4" /></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21V5.5Z" /><path d="M4 17a2.5 2.5 0 0 1 2.5-2.5H20" /></>,
    bolt: <path d="m13 2-9 12h7l-1 8 10-13h-7l1-7Z" />
  };

  return <svg {...common}>{paths[name] || paths.spark}</svg>;
}

function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Quizora home">
        <span className="brand-mark"><Icon name="spark" size={21} /></span>
        <span>quizora<span className="brand-dot">.</span></span>
      </a>
      <div className="topbar-right">
        <span className="status-dot" />
        <span>Learning mode</span>
      </div>
    </header>
  );
}

function HomeScreen({ onStart, totalQuestions }) {
  return (
    <main className="hero-layout" id="home">
      <section className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-icon"><Icon name="spark" size={15} /></span> YOUR NEXT LEVEL STARTS HERE</div>
        <h1>Small steps.<br /><span>Big brain energy.</span></h1>
        <p className="hero-description">
          A little challenge can go a long way. Test your web development knowledge, learn something new, and see how far you've come.
        </p>
        <div className="hero-actions">
          <button className="button button-primary" onClick={onStart}>
            Start the quiz <Icon name="arrow" size={18} />
          </button>
          <div className="no-pressure"><span className="mini-check"><Icon name="check" size={13} /></span> No sign-up needed</div>
        </div>
        <div className="hero-stats">
          <div className="stat"><span className="stat-icon lavender"><Icon name="book" size={19} /></span><div><strong>{totalQuestions} questions</strong><small>Curated for practice</small></div></div>
          <div className="stat"><span className="stat-icon peach"><Icon name="clock" size={19} /></span><div><strong>~5 minutes</strong><small>Go at your own pace</small></div></div>
          <div className="stat"><span className="stat-icon mint"><Icon name="target" size={19} /></span><div><strong>4 topics</strong><small>HTML, CSS, JS & React</small></div></div>
        </div>
      </section>

      <section className="preview-wrap" aria-label="Quiz preview">
        <div className="floating-pill pill-top"><span className="pill-emoji">✦</span> Your daily brain boost</div>
        <div className="quiz-preview">
          <div className="preview-top"><span className="preview-tag">QUICK CHALLENGE</span><span className="preview-count">01 <span>/ 12</span></span></div>
          <div className="preview-progress"><span /></div>
          <div className="preview-label">QUESTION 01</div>
          <h2>Which React hook helps you manage state?</h2>
          <div className="preview-option"><span className="option-letter">A</span> useEffect</div>
          <div className="preview-option selected"><span className="option-letter">B</span> useState <span className="selected-check"><Icon name="check" size={14} /></span></div>
          <div className="preview-option"><span className="option-letter">C</span> useFetch</div>
          <div className="preview-option"><span className="option-letter">D</span> useRender</div>
          <div className="preview-bottom"><span>You're doing great already.</span><span className="preview-next">Next <Icon name="arrow" size={15} /></span></div>
        </div>
        <div className="floating-pill pill-bottom"><span className="streak-icon">✧</span> Learn by doing</div>
        <div className="decor decor-one" /><div className="decor decor-two" /><div className="decor decor-three" />
      </section>
    </main>
  );
}

function QuizProgress({ current, total }) {
  const percent = (current / total) * 100;
  return (
    <div className="progress-block">
      <div className="progress-meta"><span>YOUR PROGRESS</span><strong>{current} <span>/ {total}</span></strong></div>
      <div className="progress-track" role="progressbar" aria-valuenow={current} aria-valuemin={0} aria-valuemax={total} aria-label="Quiz progress">
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

function Option({ letter, text, selected, correct, showFeedback, onClick, disabled }) {
  let className = "answer-option";
  if (selected) className += " is-selected";
  if (showFeedback && correct) className += " is-correct";
  if (showFeedback && selected && !correct) className += " is-wrong";

  return (
    <button type="button" className={className} onClick={onClick} disabled={disabled} aria-pressed={selected}>
      <span className="answer-letter">{letter}</span>
      <span className="answer-text">{text}</span>
      <span className="answer-indicator">
        {showFeedback && correct ? <Icon name="check" size={17} /> : showFeedback && selected ? "×" : selected ? <span className="radio-dot" /> : null}
      </span>
    </button>
  );
}

function Question({ question, questionIndex, selectedAnswer, onSelect, showFeedback }) {
  const letters = ["A", "B", "C", "D"];
  return (
    <section className="question-card">
      <div className="question-meta">
        <span className="category-chip">{question.category}</span>
        <span className={`difficulty difficulty-${question.difficulty.toLowerCase()}`}>{question.difficulty}</span>
      </div>
      <div className="question-number">QUESTION {String(questionIndex + 1).padStart(2, "0")}</div>
      <h2 className="question-title">{question.question}</h2>
      <p className="select-hint">Choose one answer below</p>
      <div className="options-list">
        {question.options.map((option, index) => (
          <Option
            key={`${question.id}-${option}`}
            letter={letters[index]}
            text={option}
            selected={selectedAnswer === index}
            correct={question.answer === index}
            showFeedback={showFeedback}
            disabled={showFeedback}
            onClick={() => onSelect(index)}
          />
        ))}
      </div>
      {showFeedback && (
        <div className={`explanation ${selectedAnswer === question.answer ? "explanation-good" : "explanation-note"}`}>
          <span className="explanation-icon"><Icon name={selectedAnswer === question.answer ? "check" : "spark"} size={16} /></span>
          <div><strong>{selectedAnswer === question.answer ? "That's right!" : "Here's the answer"}</strong><p>{question.explanation}</p></div>
        </div>
      )}
    </section>
  );
}

function QuizScreen({ quizQuestions, onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);
  const question = quizQuestions[currentIndex];
  const selectedAnswer = answers[question.id];
  const isLast = currentIndex === quizQuestions.length - 1;

  function selectAnswer(index) {
    if (showFeedback) return;
    setAnswers(previous => ({ ...previous, [question.id]: index }));
  }

  function handleNext() {
    if (selectedAnswer === undefined) return;
    if (!showFeedback) {
      setShowFeedback(true);
      return;
    }
    if (isLast) {
      onFinish(answers, quizQuestions);
      return;
    }
    setCurrentIndex(index => index + 1);
    setShowFeedback(false);
  }

  return (
    <main className="quiz-layout">
      <div className="quiz-heading">
        <div><div className="eyebrow">A LITTLE PROGRESS EVERY DAY</div><h1>You've got this<span>.</span></h1><p>Trust what you know. Learn what you don't.</p></div>
        <div className="quiz-mini-badge"><Icon name="bolt" size={18} /> Quiz in progress</div>
      </div>
      <QuizProgress current={currentIndex + 1} total={quizQuestions.length} />
      <Question question={question} questionIndex={currentIndex} selectedAnswer={selectedAnswer} onSelect={selectAnswer} showFeedback={showFeedback} />
      <div className="quiz-footer">
        <span className="keyboard-hint"><span className="keycap">TIP</span> Take your time — accuracy over speed.</span>
        <button className="button button-primary next-button" onClick={handleNext} disabled={selectedAnswer === undefined}>
          {!showFeedback ? "Check answer" : isLast ? "See my results" : "Next question"} <Icon name="arrow" size={18} />
        </button>
      </div>
    </main>
  );
}

function Result({ answers, quizQuestions, onRestart, onReview }) {
  const correctCount = quizQuestions.reduce((count, question) => count + (answers[question.id] === question.answer ? 1 : 0), 0);
  const incorrectCount = quizQuestions.length - correctCount;
  const percentage = Math.round((correctCount / quizQuestions.length) * 100);
  let message = "Every expert started somewhere. Keep going!";
  let subtitle = "You've taken a step forward, and that counts.";
  if (percentage >= 90) {
    message = "You're on fire!";
    subtitle = "That's an excellent result. Your practice is paying off.";
  } else if (percentage >= 70) {
    message = "Look at you go!";
    subtitle = "A strong result. A little more practice and you'll be unstoppable.";
  } else if (percentage >= 50) {
    message = "You're finding your rhythm.";
    subtitle = "You've got a foundation. Review a few concepts and try again.";
  }

  return (
    <main className="result-layout">
      <section className="result-card">
        <div className="result-icon"><Icon name="trophy" size={30} /></div>
        <div className="eyebrow centered">QUIZ COMPLETE</div>
        <h1>{message}</h1>
        <p className="result-subtitle">{subtitle}</p>
        <div className="score-ring" style={{ "--score-angle": `${percentage * 3.6}deg` }}>
          <div className="score-ring-inner"><strong>{percentage}<span>%</span></strong><small>YOUR SCORE</small></div>
        </div>
        <div className="result-stats">
          <div className="result-stat correct-stat"><span className="result-stat-icon"><Icon name="check" size={17} /></span><div><strong>{correctCount}</strong><small>Correct</small></div></div>
          <div className="result-stat incorrect-stat"><span className="result-stat-icon">×</span><div><strong>{incorrectCount}</strong><small>Incorrect</small></div></div>
          <div className="result-stat total-stat"><span className="result-stat-icon"><Icon name="book" size={17} /></span><div><strong>{quizQuestions.length}</strong><small>Total</small></div></div>
        </div>
        <div className="result-actions">
          <button className="button button-primary" onClick={onRestart}><Icon name="refresh" size={17} /> Try again</button>
          <button className="button button-secondary" onClick={onReview}>Review answers</button>
        </div>
      </section>
      <div className="result-footnote"><span className="footnote-spark">✦</span> Progress isn't always perfect. It's showing up that matters.</div>
    </main>
  );
}

function ReviewScreen({ answers, quizQuestions, onBack, onRestart }) {
  return (
    <main className="review-layout">
      <div className="review-heading">
        <button className="back-button" onClick={onBack}>← Back to results</button>
        <div className="eyebrow">YOUR LEARNING RECAP</div>
        <h1>Review your answers<span>.</span></h1>
        <p>See what you got right and revisit the explanations.</p>
      </div>
      <div className="review-list">
        {quizQuestions.map((question, index) => {
          const correct = answers[question.id] === question.answer;
          return (
            <article className="review-item" key={question.id}>
              <div className="review-item-top"><span>QUESTION {String(index + 1).padStart(2, "0")}</span><span className={correct ? "review-status status-correct" : "review-status status-wrong"}>{correct ? "✓ Correct" : "× Incorrect"}</span></div>
              <h3>{question.question}</h3>
              <p className="review-answer"><strong>Your answer:</strong> {answers[question.id] === undefined ? "Not answered" : question.options[answers[question.id]]}</p>
              {!correct && <p className="review-answer right-answer"><strong>Correct answer:</strong> {question.options[question.answer]}</p>}
              <p className="review-explanation">{question.explanation}</p>
            </article>
          );
        })}
      </div>
      <div className="review-actions"><button className="button button-primary" onClick={onRestart}><Icon name="refresh" size={17} /> Retake quiz</button></div>
    </main>
  );
}

function App() {
  const [stage, setStage] = useState("home");
  const [quizQuestions, setQuizQuestions] = useState(questions);
  const [finalAnswers, setFinalAnswers] = useState({});

  function startQuiz() {
    setQuizQuestions(shuffle(questions));
    setFinalAnswers({});
    setStage("quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function finishQuiz(answers, activeQuestions) {
    setFinalAnswers(answers);
    setQuizQuestions(activeQuestions);
    setStage("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function restartQuiz() {
    startQuiz();
  }

  return (
    <div className="app-shell">
      <Header />
      {stage === "home" && <HomeScreen onStart={startQuiz} totalQuestions={questions.length} />}
      {stage === "quiz" && <QuizScreen quizQuestions={quizQuestions} onFinish={finishQuiz} />}
      {stage === "results" && <Result answers={finalAnswers} quizQuestions={quizQuestions} onRestart={restartQuiz} onReview={() => setStage("review")} />}
      {stage === "review" && <ReviewScreen answers={finalAnswers} quizQuestions={quizQuestions} onBack={() => setStage("results")} onRestart={restartQuiz} />}
      <footer className="site-footer"><span>© 2026 Quizora</span><span>Built with curiosity <span className="footer-heart">♥</span> and React</span><span>DEVCAMP 2.0 · TASK 2</span></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);
