
import { useEffect, useMemo, useState } from "react";
import { skills } from "./lessons";
import { questions } from "../quiz-page/src/data/questions";
import "./App.css";

const defaultUser = {
  name: "Rural Learner",
  email: "student@learningbsc.com",
};

function App() {
  const [page, setPage] = useState("home");
  const [selectedSkillId, setSelectedSkillId] = useState(skills[0]?.id ?? "computer");
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);

  const [authScreen, setAuthScreen] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("learningbsc-user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [authError, setAuthError] = useState("");
  const [authSuccess, setAuthSuccess] = useState("");

  const [quizScreen, setQuizScreen] = useState("setup");
  const [topic, setTopic] = useState(Object.keys(questions)[0]);
  const [difficulty, setDifficulty] = useState("Easy");
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600);
  const [attempt, setAttempt] = useState(0);

  const selectedSkill = useMemo(
    () => skills.find((skill) => skill.id === selectedSkillId) ?? skills[0],
    [selectedSkillId]
  );

  useEffect(() => {
    if (!user) return;
    localStorage.setItem("learningbsc-user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    if (quizScreen !== "quiz" || !quiz || !quiz.timerEnabled) return;

    const interval = setInterval(() => {
      setTimeLeft((previous) => Math.max(previous - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [quizScreen, quiz]);

  useEffect(() => {
    if (quizScreen === "quiz" && quiz && quiz.timerEnabled && timeLeft === 0) {
      handleQuizSubmit(answers);
    }
  }, [timeLeft, quizScreen, quiz, answers]);

  function openSkill(skillId, lessonIndex = 0) {
    setSelectedSkillId(skillId);
    setSelectedLessonIndex(lessonIndex);
    setPage("skill");
  }

  function handleAuthTab(nextScreen) {
    setAuthScreen(nextScreen);
    setAuthError("");
    setAuthSuccess("");
    setPassword("");
  }

  function handleAuthSubmit(event) {
    event.preventDefault();
    setAuthError("");
    setAuthSuccess("");

    if (!email.trim() || !password.trim()) {
      setAuthError("Please enter your email and password.");
      return;
    }

    if (authScreen === "register" && !name.trim()) {
      setAuthError("Please enter your full name.");
      return;
    }

    if (authScreen === "register" && password.length < 8) {
      setAuthError("Password must be at least 8 characters long.");
      return;
    }

    const nextUser = {
      name: authScreen === "register" ? name.trim() : user?.name || defaultUser.name,
      email: email.trim(),
    };

    setUser(nextUser);
    setName("");
    setEmail("");
    setPassword("");
    setAuthScreen("dashboard");
    setAuthSuccess("Signed in successfully.");
    setPage("login");
  }

  function handleLogout() {
    localStorage.removeItem("learningbsc-user");
    setUser(null);
    setAuthScreen("login");
    setAuthError("");
    setAuthSuccess("You have logged out successfully.");
  }

  function handleQuizStart() {
    const selectedQuestions = questions[topic]?.[difficulty];

    if (!selectedQuestions || selectedQuestions.length !== 10) {
      alert("This quiz must contain exactly 10 questions.");
      return;
    }

    setQuiz({
      topic,
      difficulty,
      timerEnabled,
      questions: selectedQuestions,
    });
    setAnswers({});
    setTimeLeft(600);
    setQuizScreen("quiz");
  }

  function handleQuizSubmit(submittedAnswers) {
    if (!quiz) return;
    setAnswers(submittedAnswers);
    setQuizScreen("results");
  }

  function handleQuizRetry() {
    setAnswers({});
    setTimeLeft(600);
    setAttempt((previous) => previous + 1);
    setQuizScreen("quiz");
  }

  function handleQuizHome() {
    setQuiz(null);
    setAnswers({});
    setQuizScreen("setup");
    setPage("home");
  }

  const selectedLesson = selectedSkill?.lessons?.[selectedLessonIndex] ?? selectedSkill?.lessons?.[0];

  return (
    <div className="site-app">
      <nav className="navbar">
        <button type="button" className="logo-button" onClick={() => setPage("home")}>
          LearningBsc
        </button>

        <div className="nav-links">
          <button type="button" onClick={() => setPage("home")}>Home</button>
          <button type="button" onClick={() => setPage("skill")}>Skills</button>
          <button type="button" onClick={() => setPage("quiz")}>Quiz</button>
          <button type="button" onClick={() => setPage("login")}>Login</button>
        </div>

        <button type="button" className="profile-button" onClick={() => setPage("login")} aria-label="Profile">
          {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
        </button>
      </nav>

      {page === "home" && (
        <>
          <header className="hero" id="home">
            <p className="tagline">LEARN. EXPLORE. GROW.</p>
            <h1>Basic Computer Skills for Rural School Students</h1>
            <p className="hero-text">
              Learn essential digital skills in a simple, friendly, and practical way.
            </p>
            <div className="hero-actions">
              <button type="button" className="main-button" onClick={() => setPage("skill")}>
                Start Learning
              </button>
              <button type="button" className="secondary-button" onClick={() => setPage("quiz")}>
                Take a Quiz
              </button>
            </div>
          </header>

          <section className="about-section" id="about">
            <h2>About Our Website</h2>
            <p>
              Our website helps rural school students build confidence with computers, internet tools,
              basic digital communication, and online safety.
            </p>
          </section>

          <main className="skills-section" id="skills">
            <h2>Explore Computer Skills</h2>
            <p className="section-text">
              Choose a topic and begin your learning journey with practical lessons and activities.
            </p>

            <div className="skill-grid">
              {skills.map((skill) => (
                <article className="skill-card" key={skill.id}>
                  <span className="skill-icon">{skill.icon}</span>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                  <button type="button" onClick={() => openSkill(skill.id, 0)}>
                    Learn Now
                  </button>
                </article>
              ))}
            </div>
          </main>
        </>
      )}

      {page === "skill" && selectedSkill && (
        <main className="learning-page">
          <section className="lesson-sidebar">
            <div className="sidebar-header">
              <p>Learning Topics</p>
              <h2>{selectedSkill.title}</h2>
            </div>
            <div className="lesson-list">
              {selectedSkill.lessons.map((lesson, index) => (
                <button
                  key={lesson.title}
                  type="button"
                  className={selectedLessonIndex === index ? "lesson-tab active" : "lesson-tab"}
                  onClick={() => {
                    setSelectedLessonIndex(index);
                  }}
                >
                  {lesson.title}
                </button>
              ))}
            </div>
          </section>

          <section className="lesson-content">
            <div className="lesson-topbar">
              <div>
                <p className="eyebrow">Featured lesson</p>
                <h1>{selectedLesson?.title}</h1>
              </div>
              <button type="button" className="main-button" onClick={() => setPage("quiz")}>
                Practice Quiz
              </button>
            </div>

            <article
              className="lesson-body"
              dangerouslySetInnerHTML={{ __html: selectedLesson?.content ?? "" }}
            />

            <div className="lesson-footer">
              <p>
                <strong>Quick question:</strong> {selectedLesson?.question}
              </p>
              <div className="lesson-options">
                {selectedLesson?.options.map((option, index) => (
                  <span key={option} className="quiz-chip">
                    {String.fromCharCode(65 + index)}. {option}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}

      {page === "quiz" && (
        <main className="quiz-shell">
          <header className="app-header">
            <div>
              <h2>RuralTech</h2>
              <p>Learn • Practice • Improve</p>
            </div>
            <button type="button" className="secondary-button" onClick={() => setPage("home")}>
              Back Home
            </button>
          </header>

          <div className="app-content">
            {quizScreen === "setup" && (
              <div className="quiz-setup">
                <h1>Test Your Knowledge</h1>
                <p>Select a topic and difficulty to begin your quiz.</p>

                <label htmlFor="quiz-topic">Choose Topic</label>
                <select id="quiz-topic" value={topic} onChange={(event) => setTopic(event.target.value)}>
                  {Object.keys(questions).map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>

                <h3>Select Difficulty</h3>
                <div className="difficulty-options">
                  {Object.keys({ Easy: 1, Medium: 1, Hard: 1 }).map((level) => (
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
                    onChange={(event) => setTimerEnabled(event.target.checked)}
                  />
                  Enable 10-minute timer
                </label>

                <p>10 Questions | 1 Mark Each | No Negative Marking</p>
                <button type="button" onClick={handleQuizStart}>Start Quiz</button>
              </div>
            )}

            {quizScreen === "quiz" && quiz && (
              <div className="quiz-form">
                <h1>{quiz.topic} Quiz</h1>
                <p>Difficulty: {quiz.difficulty}</p>

                <div className="quiz-info">
                  <span>10 Questions</span>
                  <span>Answered: {Object.keys(answers).length}/10</span>
                  {quiz.timerEnabled && (
                    <span className="quiz-timer">
                      Time Left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
                    </span>
                  )}
                </div>

                <div className="questions-container">
                  {quiz.questions.map((question, index) => (
                    <div key={question.id ?? index} className="question-card">
                      <h3>
                        {index + 1}. {question.question}
                      </h3>
                      <div className="answer-options">
                        {question.options.map((option, optionIndex) => (
                          <label className="answer-option" key={option}>
                            <input
                              type="radio"
                              name={`question-${index}`}
                              checked={answers[index] === optionIndex}
                              onChange={() =>
                                setAnswers((previous) => ({
                                  ...previous,
                                  [index]: optionIndex,
                                }))
                              }
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <button type="button" className="submit-quiz-btn" onClick={() => handleQuizSubmit(answers)}>
                  Submit Quiz
                </button>
              </div>
            )}

            {quizScreen === "results" && quiz && (
              <div className="quiz-results">
                <h1>Quiz Completed!</h1>
                <p>
                  {quiz.topic} | {quiz.difficulty}
                </p>

                <div className="result-summary">
                  {(() => {
                    let correct = 0;
                    let incorrect = 0;
                    let unanswered = 0;

                    quiz.questions.forEach((question, index) => {
                      const answer = answers[index];

                      if (answer === undefined) {
                        unanswered += 1;
                      } else if (answer === question.correctAnswer) {
                        correct += 1;
                      } else {
                        incorrect += 1;
                      }
                    });

                    const percentage = Math.round((correct / quiz.questions.length) * 100);

                    return (
                      <>
                        <h2>
                          Your Score: {correct}/{quiz.questions.length}
                        </h2>
                        <h3>Accuracy: {percentage}%</h3>
                        <div className="score-progress">
                          <div className="score-progress-fill" style={{ width: `${percentage}%` }} />
                        </div>
                        <div className="result-stats">
                          <p>Correct: {correct}</p>
                          <p>Incorrect: {incorrect}</p>
                          <p>Unanswered: {unanswered}</p>
                        </div>
                      </>
                    );
                  })()}
                </div>

                <h2>Review Your Answers</h2>
                <div className="review-container">
                  {quiz.questions.map((question, index) => {
                    const answer = answers[index];
                    const isCorrect = answer === question.correctAnswer;

                    return (
                      <div
                        key={question.id ?? index}
                        className={`review-card ${
                          answer === undefined ? "unanswered" : isCorrect ? "correct" : "incorrect"
                        }`}
                      >
                        <h3>
                          Question {index + 1}: {question.question}
                        </h3>
                        <p>
                          <strong>Your Answer: </strong>
                          {answer === undefined ? "Not Answered" : question.options[answer]}
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
                  <button type="button" onClick={handleQuizRetry}>Retry Quiz</button>
                  <button type="button" onClick={handleQuizHome}>Choose Another Topic</button>
                </div>
              </div>
            )}
          </div>
        </main>
      )}

      {page === "login" && (
        <main className="auth-page">
          <section className="auth-panel">
            <div className="brand" onClick={() => setPage("home")} role="button" tabIndex={0} onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") setPage("home");
            }}>
              <span className="brand-mark">M.</span>
              MONOSPACE
            </div>

            <div className="auth-content">
              {user && authScreen === "dashboard" ? (
                <>
                  <div className="dashboard-eyebrow">
                    <span className="status-dot"></span>
                    YOUR PRIVATE WORKSPACE
                  </div>
                  <h1>
                    Good to have
                    <br />
                    you here, <span>{user.name.split(" ")[0]}.</span>
                  </h1>
                  <p className="dashboard-description">
                    You are signed in. This is your personal learning dashboard.
                  </p>

                  <div className="dashboard-grid">
                    <article className="welcome-card">
                      <span className="card-label">YOUR ACCOUNT</span>
                      <div className="avatar">{user.name.trim().charAt(0).toUpperCase()}</div>
                      <h2>{user.name}</h2>
                      <p>{user.email}</p>
                      <div className="account-status">
                        <span className="status-dot"></span>
                        Authenticated session
                      </div>
                    </article>

                    <article className="info-card">
                      <span className="card-label">WORKSPACE OVERVIEW</span>
                      <div className="info-number">01</div>
                      <h3>Your space starts here.</h3>
                      <p>
                        Continue learning, take the quiz, or review lessons from your account dashboard.
                      </p>
                      <div className="info-footer">
                        <span>ACCOUNT ACCESS</span>
                        <span>ACTIVE ↗</span>
                      </div>
                    </article>
                  </div>

                  <div className="dashboard-actions">
                    <button type="button" className="main-button" onClick={() => setPage("skill")}>
                      Continue Learning
                    </button>
                    <button type="button" className="secondary-button" onClick={handleLogout}>
                      Log out
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="auth-eyebrow">
                    <span className="status-dot"></span>
                    {authScreen === "register" ? "CREATE YOUR ACCOUNT" : "WELCOME BACK"}
                  </div>

                  <h1>
                    {authScreen === "register" ? (
                      <>
                        Your next
                        <br />
                        <span>chapter.</span>
                      </>
                    ) : (
                      <>
                        Good to see
                        <br />
                        <span>you again.</span>
                      </>
                    )}
                  </h1>

                  <p className="auth-description">
                    {authScreen === "register"
                      ? "Create an account and make this learning space yours."
                      : "Sign in to continue where you left off."}
                  </p>

                  <div className="auth-tabs">
                    <button
                      type="button"
                      className={authScreen === "login" ? "active" : ""}
                      onClick={() => handleAuthTab("login")}
                    >
                      Sign in
                    </button>
                    <button
                      type="button"
                      className={authScreen === "register" ? "active" : ""}
                      onClick={() => handleAuthTab("register")}
                    >
                      Create account
                    </button>
                  </div>

                  {authSuccess && <div className="message success-message">{authSuccess}</div>}
                  {authError && <div className="message error-message">{authError}</div>}

                  <form className="auth-form" onSubmit={handleAuthSubmit}>
                    {authScreen === "register" && (
                      <label>
                        FULL NAME
                        <input
                          type="text"
                          placeholder="Your name"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                          maxLength={100}
                          autoComplete="name"
                          required
                        />
                      </label>
                    )}

                    <label>
                      EMAIL ADDRESS
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        maxLength={255}
                        autoComplete="email"
                        required
                      />
                    </label>

                    <label>
                      PASSWORD
                      <div className="password-wrap">
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder={authScreen === "register" ? "At least 8 characters" : "Enter your password"}
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                          minLength={8}
                          autoComplete={authScreen === "register" ? "new-password" : "current-password"}
                          required
                        />
                        <button
                          type="button"
                          className="show-password"
                          onClick={() => setShowPassword((previous) => !previous)}
                        >
                          {showPassword ? "HIDE" : "SHOW"}
                        </button>
                      </div>
                    </label>

                    <div className="form-options">
                      <label>
                        <input type="checkbox" /> Remember me
                      </label>
                    </div>

                    <button type="submit" className="submit-button">
                      {authScreen === "register" ? "CREATE ACCOUNT" : "SIGN IN"}
                      <span>→</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </section>
        </main>
      )}

      <footer className="footer" id="contact">
        <div className="footer-content">
          <div className="contact-box">
            <h3>Contact Us</h3>
            <p>Phone: 9326537968</p>
            <p>Email: learningBsc.gmail.com</p>
          </div>

          <div className="quick-links">
            <h3>Quick Links</h3>
            <button type="button" onClick={() => setPage("home")}>Home</button>
            <button type="button" onClick={() => setPage("skill")}>Skills</button>
            <button type="button" onClick={() => setPage("quiz")}>Quiz</button>
            <button type="button" onClick={() => setPage("login")}>Login</button>
          </div>
        </div>

        <div className="copyright">© 2026 LearningBsc. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
