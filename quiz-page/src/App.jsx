
import { useState } from "react";
import QuizSetup from "./components/QuizSetup";
import QuizForm from "./components/QuizForm";
import QuizResults from "./components/QuizResults";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("setup");
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [attempt, setAttempt] = useState(0);

  function handleStart(selectedQuiz) {
    setQuiz(selectedQuiz);
    setAnswers({});
    setScreen("quiz");
  }

  function handleSubmit(submittedAnswers) {
    setAnswers(submittedAnswers);
    setScreen("results");
  }

  function handleRetry() {
  setAnswers({});
  setAttempt((previous) => previous + 1);
  setScreen("quiz");
}

  function handleHome() {
    setQuiz(null);
    setAnswers({});
    setScreen("setup");
  }

  return (
    <div className="app">
      <header className="app-header">
        <h2>RuralTech</h2>
        <p>Learn • Practice • Improve</p>
      </header>

      <main className="app-content">
        {screen === "setup" && (
          <QuizSetup onStart={handleStart} />
        )}

        {screen === "quiz" && quiz && (
          <QuizForm
           key={attempt}
            quiz={quiz}
            onSubmit={handleSubmit}
          />
        )}

        {screen === "results" && quiz && (
          <QuizResults
            quiz={quiz}
            answers={answers}
            onRetry={handleRetry}
            onHome={handleHome}
          />
        )}
      </main>

      <footer className="app-footer">
        <p>RuralTech | Digital Learning for Everyone</p>
      </footer>
    </div>
  );
}

export default App;
