
import { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";

function QuizForm({ quiz, onSubmit }) {
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600);

  const { questions, timerEnabled, topic, difficulty } = quiz;

  // Update the answer for a specific question
  function handleAnswerChange(questionIndex, answerIndex) {
    setAnswers((previous) => ({
      ...previous,
      [questionIndex]: answerIndex,
    }));
  }

  // Submit the quiz
  function handleSubmit() {
    onSubmit(answers);
  }

  // Countdown timer
  useEffect(() => {
    if (!timerEnabled) return;

    const interval = setInterval(() => {
      setTimeLeft((previous) => Math.max(previous - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timerEnabled]);

  // Automatically submit when time runs out
  useEffect(() => {
    if (timerEnabled && timeLeft === 0) {
      onSubmit(answers);
    }
  }, [timeLeft, timerEnabled, answers, onSubmit]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="quiz-form">
      <h1>{topic} Quiz</h1>
      <p>Difficulty: {difficulty}</p>

      <div className="quiz-info">
        <span>10 Questions</span>
        <span>
          Answered: {Object.keys(answers).length}/10
        </span>

        {timerEnabled && (
          <span className="quiz-timer">
            Time Left: {minutes}:{String(seconds).padStart(2, "0")}
          </span>
        )}
      </div>

      <div className="questions-container">
        {questions.map((question, index) => (
          <QuestionCard
            key={question.id ?? index}
            question={question}
            questionNumber={index + 1}
            selectedAnswer={answers[index]}
            onAnswerChange={(answerIndex) =>
              handleAnswerChange(index, answerIndex)
            }
          />
        ))}
      </div>

      <button
        type="button"
        className="submit-quiz-btn"
        onClick={handleSubmit}
      >
        Submit Quiz
      </button>
    </div>
  );
}

export default QuizForm;
