
import { useState } from "react";
import { questions } from "../data/questions";

function QuizSetup({ onStart }) {
  const topics = Object.keys(questions);

  const [topic, setTopic] = useState(topics[0] || "");
  const [difficulty, setDifficulty] = useState("Easy");
  const [timerEnabled, setTimerEnabled] = useState(false);

  function handleStart() {
    const selectedQuestions = questions[topic]?.[difficulty];

    if (!selectedQuestions || selectedQuestions.length !== 10) {
      alert("This quiz must contain exactly 10 questions.");
      return;
    }

    onStart({
      topic,
      difficulty,
      timerEnabled,
      questions: selectedQuestions,
    });
  }

  return (
    <div className="quiz-setup">
      <h1>Test Your Knowledge</h1>
      <p>Select a topic and difficulty to begin your quiz.</p>

      <label htmlFor="quiz-topic">Choose Topic</label>
      <select
        id="quiz-topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      >
        {topics.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <h3>Select Difficulty</h3>
      <div className="difficulty-options">
        {["Easy", "Medium", "Hard"].map((level) => (
          <button
            key={level}
            type="button"
            className={difficulty === level ? "selected" : ""}
            onClick={() => setDifficulty(level)}
          >
            {level}
          </button>
        ))}
      </div>

      <label className="timer-option">
        <input
          type="checkbox"
          checked={timerEnabled}
          onChange={(e) => setTimerEnabled(e.target.checked)}
        />
        Enable 10-minute timer
      </label>

      <p>10 Questions | 1 Mark Each | No Negative Marking</p>

      <button type="button" onClick={handleStart}>
        Start Quiz
      </button>
    </div>
  );
}

export default QuizSetup;
