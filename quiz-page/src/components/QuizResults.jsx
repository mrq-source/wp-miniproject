
function QuizResults({ quiz, answers, onRetry, onHome }) {
  const { questions, topic, difficulty } = quiz;

  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;

  questions.forEach((question, index) => {
    const answer = answers[index];

    if (answer === undefined) {
      unanswered++;
    } else if (answer === question.correctAnswer) {
      correct++;
    } else {
      incorrect++;
    }
  });

  const percentage = Math.round((correct / questions.length) * 100);

  return (
    <div className="quiz-results">
      <h1>Quiz Completed!</h1>
      <p>
        {topic} | {difficulty}
      </p>

      <div className="result-summary">
        <h2>Your Score: {correct}/{questions.length}</h2>
        <h3>Accuracy: {percentage}%</h3>

        <div className="score-progress">
          <div
            className="score-progress-fill"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <div className="result-stats">
          <p>Correct: {correct}</p>
          <p>Incorrect: {incorrect}</p>
          <p>Unanswered: {unanswered}</p>
        </div>
      </div>

      <h2>Review Your Answers</h2>

      <div className="review-container">
        {questions.map((question, index) => {
          const answer = answers[index];
          const isCorrect = answer === question.correctAnswer;

          return (
            <div
              key={question.id ?? index}
              className={`review-card ${
                answer === undefined
                  ? "unanswered"
                  : isCorrect
                  ? "correct"
                  : "incorrect"
              }`}
            >
              <h3>
                Question {index + 1}: {question.question}
              </h3>

              <p>
                <strong>Your Answer: </strong>
                {answer === undefined
                  ? "Not Answered"
                  : question.options[answer]}
              </p>

              <p>
                <strong>Correct Answer: </strong>
                {question.options[question.correctAnswer]}
              </p>

              <p>
                <strong>Explanation: </strong>
                {question.explanation}
              </p>
            </div>
          );
        })}
      </div>

      <div className="result-actions">
        <button type="button" onClick={onRetry}>
          Retry Quiz
        </button>

        <button type="button" onClick={onHome}>
          Choose Another Topic
        </button>
      </div>
    </div>
  );
}

export default QuizResults;
