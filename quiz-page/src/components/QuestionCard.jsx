
function QuestionCard({ question, questionNumber, selectedAnswer, onAnswerChange }) {
  return (
    <div className="question-card">
      <h3>
        Question {questionNumber}: {question.question}
      </h3>

      <div className="answer-options">
        {question.options.map((option, index) => (
          <label key={index} className="answer-option">
            <input
              type="radio"
              name={`question-${questionNumber}`}
              value={index}
              checked={selectedAnswer === index}
              onChange={() => onAnswerChange(index)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
