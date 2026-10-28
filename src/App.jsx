import { useState, useEffect } from "react";
import "./App.css";
import { skills } from "./lessons.js";

const STORAGE_KEY = "ruralTechProgress";

// Load saved progress safely (same checks as the original script).
function loadProgress() {
    try {
        const saved = JSON.parse(
            localStorage.getItem(STORAGE_KEY) ||
            '{"completed":[],"points":0}'
        );

        if (
            !saved ||
            !Array.isArray(saved.completed) ||
            typeof saved.points !== "number"
        ) {
            return { completed: [], points: 0 };
        }

        return saved;
    } catch {
        return { completed: [], points: 0 };
    }
}

function saveProgressToStorage(progress) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
        console.error("Could not save progress:", error);
    }
}

function lessonKey(skill, index) {
    return `${skill.id}-${index}`;
}

// ------------------------------------------------------------
// One topic card in the "Explore Your Skills" section
// ------------------------------------------------------------
function SkillCard({ skill, completed, onStart }) {
    const total = skill.lessons.length;
    const percentage = Math.round((completed / total) * 100);

    return (
        <article className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>

            <button className="learn-button" onClick={() => onStart(skill.id)}>
                {completed === total ? "Review Lessons" : "Learn Now"} →
            </button>

            <div className="progress-bar" style={{ marginTop: "15px" }}>
                <div
                    style={{
                        width: `${percentage}%`,
                        height: "100%",
                        background: "#4f46ff",
                        transition: "width .3s"
                    }}
                ></div>
            </div>

            <small>
                {completed}/{total} lessons completed ({percentage}%)
            </small>
        </article>
    );
}

// ------------------------------------------------------------
// Lesson pop-up with the quick quiz.
// It is re-created (via "key") for every lesson, so the quiz
// starts fresh and the pop-up starts at the top each time.
// ------------------------------------------------------------
function LessonModal({ skill, lessonIndex, onClose, onNext, onCorrectAnswer }) {
    const lesson = skill.lessons[lessonIndex];

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [feedback, setFeedback] = useState({ text: "", type: "" });
    const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

    function handleOverlayClick(event) {
        if (event.target === event.currentTarget) {
            onClose();
        }
    }

    function handleSelectOption(index) {
        setSelectedAnswer(index);
        setFeedback({ text: "", type: "" });
    }

    function handleCheckAnswer() {
        if (selectedAnswer === null) {
            setFeedback({ text: "Please select an answer first.", type: "error" });
            return;
        }

        if (selectedAnswer === lesson.answer) {
            // Returns true only the first time this lesson is completed.
            const firstTime = onCorrectAnswer(skill, lessonIndex);

            setFeedback({
                text: firstTime
                    ? "Correct! Great job! +10 points"
                    : "Correct! Great job!",
                type: "success"
            });
            setAnsweredCorrectly(true);
        } else {
            setFeedback({
                text: "Not quite. Read the lesson and try again.",
                type: "error"
            });
        }
    }

    return (
        <div className="lesson-modal" onClick={handleOverlayClick}>
            <div className="lesson-box">
                <button
                    className="close-button"
                    onClick={onClose}
                    aria-label="Close lesson"
                >
                    ×
                </button>

                <p className="lesson-count">
                    {skill.title} · Lesson {lessonIndex + 1} of {skill.lessons.length}
                </p>

                <h2>
                    {skill.icon} {lesson.title}
                </h2>

                {/* The lesson text is your own HTML from lessons.js */}
                <div
                    className="lesson-content"
                    dangerouslySetInnerHTML={{ __html: lesson.content }}
                />

                <hr />

                <h3>Quick Quiz</h3>
                <p>{lesson.question}</p>

                <div className="quiz-options">
                    {lesson.options.map((option, index) => (
                        <button
                            key={index}
                            className={
                                "quiz-option" +
                                (selectedAnswer === index ? " selected" : "")
                            }
                            aria-pressed={selectedAnswer === index}
                            disabled={answeredCorrectly}
                            onClick={() => handleSelectOption(index)}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                <p
                    className={"quiz-feedback" + (feedback.type ? " " + feedback.type : "")}
                    aria-live="polite"
                >
                    {feedback.text}
                </p>

                <button
                    className="main-button"
                    onClick={handleCheckAnswer}
                    disabled={answeredCorrectly}
                >
                    Check Answer
                </button>

                {answeredCorrectly && (
                    <button
                        className="main-button next-button"
                        onClick={onNext}
                    >
                        Next Lesson →
                    </button>
                )}
            </div>
        </div>
    );
}

// ------------------------------------------------------------
// Main application
// ------------------------------------------------------------
export default function App() {
    const [progress, setProgress] = useState(loadProgress);
    const [currentSkillId, setCurrentSkillId] = useState(null);
    const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);

    const currentSkill = skills.find(skill => skill.id === currentSkillId) || null;

    // Press Escape to close the lesson.
    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === "Escape") {
                setModalOpen(false);
            }
        }

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Stop the page behind the pop-up from scrolling.
    useEffect(() => {
        document.body.style.overflow = modalOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [modalOpen]);

    function isCompleted(skill, index) {
        return progress.completed.includes(lessonKey(skill, index));
    }

    // ---------- Dashboard numbers ----------
    const totalLessons = skills.reduce(
        (total, skill) => total + skill.lessons.length,
        0
    );

    const completedCount = progress.completed.filter(key =>
        skills.some(skill =>
            skill.lessons.some((_, index) => key === lessonKey(skill, index))
        )
    ).length;

    const percentage = totalLessons
        ? Math.round((completedCount / totalLessons) * 100)
        : 0;

    // ---------- Achievements ----------
    const achievements = [
        {
            title: "🌱 First Step",
            description: "Complete your first lesson",
            unlocked: progress.completed.length >= 1
        },
        {
            title: "⭐ Quick Learner",
            description: "Earn 20 points",
            unlocked: progress.points >= 20
        },
        {
            title: "🏆 Skill Builder",
            description: "Complete all lessons in a topic",
            unlocked: skills.some(skill =>
                skill.lessons.every((_, index) => isCompleted(skill, index))
            )
        }
    ];

    // ---------- Event handlers ----------
    function startSkill(skillId) {
        const skill = skills.find(item => item.id === skillId);

        if (!skill) {
            return;
        }

        // Open the first lesson that is not finished yet (or the first one).
        let index = skill.lessons.findIndex(
            (_, lessonIndex) => !isCompleted(skill, lessonIndex)
        );

        if (index === -1) {
            index = 0;
        }

        setCurrentSkillId(skill.id);
        setCurrentLessonIndex(index);
        setModalOpen(true);
    }

    function closeLesson() {
        setModalOpen(false);
    }

    // Called by the quiz when the right answer is chosen.
    // Returns true only if this lesson was completed for the first time.
    function handleCorrectAnswer(skill, index) {
        const key = lessonKey(skill, index);

        if (progress.completed.includes(key)) {
            return false;
        }

        const updated = {
            completed: [...progress.completed, key],
            points: progress.points + 10
        };

        setProgress(updated);
        saveProgressToStorage(updated);

        return true;
    }

    function goToNextLesson() {
        if (!currentSkill) {
            return;
        }

        if (currentLessonIndex < currentSkill.lessons.length - 1) {
            setCurrentLessonIndex(currentLessonIndex + 1);
        } else {
            setModalOpen(false);

            // Small delay so the pop-up disappears before the message shows.
            setTimeout(() => {
                alert("Great work! You've finished this topic's lessons.");
            }, 100);
        }
    }

    function resetProgress() {
        const sure = window.confirm(
            "Are you sure you want to reset all your progress?\n\n" +
            "Your points, completed lessons, and badges will be erased."
        );

        if (!sure) {
            return;
        }

        setProgress({ completed: [], points: 0 });

        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch (error) {
            console.error("Could not clear saved progress:", error);
        }

        setCurrentSkillId(null);
        setCurrentLessonIndex(0);
        setModalOpen(false);

        setTimeout(() => {
            alert("Your progress has been reset. You can start again!");
        }, 100);
    }

    return (
        <div className="app">
            <header>
                <h2>🌱 RuralTech</h2>

                <nav>
                    <a href="#skills">Skills</a>
                    <a href="#progress">My Progress</a>
                    <a href="#achievements">Achievements</a>
                </nav>
            </header>

            <main>
                <section className="hero">
                    <h1>Build Your Digital Skills</h1>

                    <p>
                        Learn computer skills for free. Start learning today and
                        track your progress!
                    </p>

                    <a href="#skills" className="main-button">
                        Explore Skills →
                    </a>
                </section>

                <section id="progress">
                    <h2>My Progress</h2>

                    <div className="progress-container">
                        <div className="progress-card">
                            <h3>Overall Progress</h3>

                            <h2>{percentage}%</h2>

                            <div className="progress-bar">
                                <div
                                    className="overall-bar"
                                    style={{ width: `${percentage}%` }}
                                ></div>
                            </div>

                            <p>
                                {completedCount} of {totalLessons} lessons completed
                            </p>
                        </div>

                        <div className="progress-card">
                            <h3>Lessons Completed</h3>
                            <h2>{completedCount}</h2>
                        </div>

                        <div className="progress-card">
                            <h3>⭐ Points Earned</h3>
                            <h2>{progress.points}</h2>
                        </div>
                    </div>

                    <div className="reset-area">
                        <button
                            className="reset-button"
                            type="button"
                            onClick={resetProgress}
                        >
                            🔄 Reset Progress
                        </button>
                    </div>
                </section>

                <section id="skills">
                    <h2>Explore Your Skills</h2>

                    <p>Choose a topic and start learning!</p>

                    <div className="skills-grid">
                        {skills.map(skill => (
                            <SkillCard
                                key={skill.id}
                                skill={skill}
                                completed={
                                    skill.lessons.filter((_, index) =>
                                        isCompleted(skill, index)
                                    ).length
                                }
                                onStart={startSkill}
                            />
                        ))}
                    </div>
                </section>

                <section id="achievements">
                    <h2>My Achievements</h2>

                    <div className="badge-grid">
                        {achievements.map(badge => (
                            <div
                                key={badge.title}
                                className={
                                    "badge-card" + (badge.unlocked ? "" : " locked")
                                }
                            >
                                <h3>
                                    {badge.title} {badge.unlocked ? "✓" : "🔒"}
                                </h3>
                                <p>{badge.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer>
                <h3>RuralTech</h3>

                <p>Computer education for rural students.</p>

                <small>Learn today. Grow tomorrow.</small>
            </footer>

            {modalOpen && currentSkill && (
                <LessonModal
                    key={`${currentSkill.id}-${currentLessonIndex}`}
                    skill={currentSkill}
                    lessonIndex={currentLessonIndex}
                    onClose={closeLesson}
                    onNext={goToNextLesson}
                    onCorrectAnswer={handleCorrectAnswer}
                />
            )}
        </div>
    );
}