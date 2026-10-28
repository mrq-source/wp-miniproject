import { useEffect, useMemo, useState } from 'react';
import { skills } from './skills.js';

const STORAGE_KEY = 'ruralTechProgress';
const emptyProgress = { completed: [], points: 0 };

function readProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{"completed":[],"points":0}');
    if (!saved || !Array.isArray(saved.completed) || typeof saved.points !== 'number') {
      return { ...emptyProgress };
    }
    return saved;
  } catch {
    return { ...emptyProgress };
  }
}

function isLessonCompleted(progress, skill, index) {
  return progress.completed.includes(`${skill.id}-${index}`);
}

function Header() {
  return (
    <header>
      <h2>🌱 RuralTech</h2>
      <nav>
        <a href="#skills">Skills</a>
        <a href="#progress">My Progress</a>
        <a href="#achievements">Achievements</a>
      </nav>
    </header>
  );
}

function ProgressSection({ progress, totalLessons, completedCount, onReset }) {
  const percentage = totalLessons ? Math.round((completedCount / totalLessons) * 100) : 0;
  return (
    <section id="progress">
      <h2>My Progress</h2>
      <div className="progress-container">
        <div className="progress-card">
          <h3>Overall Progress</h3>
          <h2 id="overallPercent">{percentage}%</h2>
          <div className="progress-bar">
            <div id="overallBar" style={{ width: `${percentage}%` }} />
          </div>
          <p id="lessonSummary">{completedCount} of {totalLessons} lessons completed</p>
        </div>
        <div className="progress-card">
          <h3>Lessons Completed</h3>
          <h2 id="lessonsDone">{completedCount}</h2>
        </div>
        <div className="progress-card">
          <h3>⭐ Points Earned</h3>
          <h2 id="points">{progress.points}</h2>
        </div>
      </div>
      <div className="reset-area">
        <button id="resetButton" className="reset-button" type="button" onClick={onReset}>🔄 Reset Progress</button>
      </div>
    </section>
  );
}

function SkillsSection({ progress, onStart }) {
  return (
    <section id="skills">
      <h2>Explore Your Skills</h2>
      <p>Choose a topic and start learning!</p>
      <div id="skillsGrid" className="skills-grid">
        {skills.map((skill) => {
          const completed = skill.lessons.filter((_, index) => isLessonCompleted(progress, skill, index)).length;
          const percentage = Math.round((completed / skill.lessons.length) * 100);
          return (
            <article className="skill-card" key={skill.id}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <button className="learn-button" type="button" onClick={() => onStart(skill.id)}>
                {completed === skill.lessons.length ? 'Review Lessons' : 'Learn Now'} →
              </button>
              <div className="progress-bar" style={{ marginTop: 15 }}>
                <div style={{ width: `${percentage}%`, height: '100%', background: '#4f46ff', transition: 'width .3s' }} />
              </div>
              <small>{completed}/{skill.lessons.length} lessons completed ({percentage}%)</small>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function AchievementsSection({ progress }) {
  const achievements = [
    { title: '🌱 First Step', description: 'Complete your first lesson', unlocked: progress.completed.length >= 1 },
    { title: '⭐ Quick Learner', description: 'Earn 20 points', unlocked: progress.points >= 20 },
    {
      title: '🏆 Skill Builder',
      description: 'Complete all lessons in a topic',
      unlocked: skills.some((skill) => skill.lessons.every((_, index) => isLessonCompleted(progress, skill, index)))
    }
  ];
  return (
    <section id="achievements">
      <h2>My Achievements</h2>
      <div id="badgeGrid" className="badge-grid">
        {achievements.map((badge) => (
          <div className={`badge-card ${badge.unlocked ? '' : 'locked'}`} key={badge.title}>
            <h3>{badge.title} {badge.unlocked ? '✓' : '🔒'}</h3>
            <p>{badge.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function LessonModal({ skill, lessonIndex, progress, onClose, onComplete, onNext }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [feedbackColor, setFeedbackColor] = useState('');
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
  const lesson = skill?.lessons[lessonIndex];
  const completedBefore = skill && isLessonCompleted(progress, skill, lessonIndex);

  useEffect(() => {
    setSelectedAnswer(null);
    setFeedback('');
    setFeedbackColor('');
    setAnsweredCorrectly(false);
  }, [skill?.id, lessonIndex]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  useEffect(() => {
    const box = document.querySelector('.lesson-box');
    if (box) box.scrollTop = 0;
  }, [skill?.id, lessonIndex]);

  if (!skill || !lesson) return null;

  function checkAnswer() {
    if (selectedAnswer === null) {
      setFeedback('Please select an answer first.');
      setFeedbackColor('red');
      return;
    }
    if (selectedAnswer === lesson.answer) {
      const firstTime = !completedBefore;
      if (firstTime) onComplete(`${skill.id}-${lessonIndex}`);
      setFeedback(firstTime ? 'Correct! Great job! +10 points' : 'Correct! Great job!');
      setFeedbackColor('green');
      setAnsweredCorrectly(true);
    } else {
      setFeedback('Not quite. Read the lesson and try again.');
      setFeedbackColor('red');
    }
  }

  return (
    <div className="lesson-modal" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="lesson-box" role="dialog" aria-modal="true" aria-labelledby="lesson-title">
        <button className="close-button" onClick={onClose} aria-label="Close lesson">×</button>
        <p className="lesson-count">{skill.title} · Lesson {lessonIndex + 1} of {skill.lessons.length}</p>
        <h2 id="lesson-title">{skill.icon} {lesson.title}</h2>
        <div className="lesson-content" dangerouslySetInnerHTML={{ __html: lesson.content }} />
        <hr />
        <h3>Quick Quiz</h3>
        <p>{lesson.question}</p>
        <div id="quizOptions">
          {lesson.options.map((option, index) => {
            const selected = selectedAnswer === index;
            return (
              <button
                className="quiz-option"
                key={option}
                type="button"
                aria-pressed={selected}
                disabled={answeredCorrectly}
                onClick={() => { setSelectedAnswer(index); setFeedback(''); setFeedbackColor(''); }}
                style={{ background: selected ? '#e8e7ff' : 'white', borderColor: selected ? '#4f46ff' : '#dddddd' }}
              >{option}</button>
            );
          })}
        </div>
        <p id="quizFeedback" aria-live="polite" style={{ color: feedbackColor }}>{feedback}</p>
        <button className="main-button" id="checkAnswerButton" type="button" onClick={checkAnswer} disabled={answeredCorrectly}>Check Answer</button>
        {answeredCorrectly && (
          <button id="nextLessonButton" className="main-button next-lesson-button" type="button" onClick={onNext}>Next Lesson →</button>
        )}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <h3>RuralTech</h3>
      <p>Computer education for rural students.</p>
      <small>Learn today. Grow tomorrow.</small>
    </footer>
  );
}

export default function App() {
  const [progress, setProgress] = useState(readProgress);
  const [activeSkillId, setActiveSkillId] = useState(null);
  const [lessonIndex, setLessonIndex] = useState(0);
  const totalLessons = useMemo(() => skills.reduce((total, skill) => total + skill.lessons.length, 0), []);
  const validCompleted = progress.completed.filter((key) => skills.some((skill) => skill.lessons.some((_, index) => key === `${skill.id}-${index}`)));
  const activeSkill = skills.find((skill) => skill.id === activeSkillId) || null;

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
      console.error('Could not save progress:', error);
    }
  }, [progress]);

  function startSkill(skillId) {
    const skill = skills.find((item) => item.id === skillId);
    if (!skill) return;
    const firstIncomplete = skill.lessons.findIndex((_, index) => !isLessonCompleted(progress, skill, index));
    setLessonIndex(firstIncomplete === -1 ? 0 : firstIncomplete);
    setActiveSkillId(skillId);
  }

  function completeLesson(key) {
    setProgress((current) => {
      if (current.completed.includes(key)) return current;
      return { completed: [...current.completed, key], points: current.points + 10 };
    });
  }

  function closeLesson() {
    setActiveSkillId(null);
  }

  function nextLesson() {
    if (!activeSkill) return;
    if (lessonIndex < activeSkill.lessons.length - 1) {
      setLessonIndex((index) => index + 1);
    } else {
      closeLesson();
      window.alert("Great work! You've finished this topic's lessons.");
    }
  }

  function resetProgress() {
    const sure = window.confirm('Are you sure you want to reset all your progress?\n\nYour points, completed lessons, and badges will be erased.');
    if (!sure) return;
    setProgress({ ...emptyProgress });
    setActiveSkillId(null);
    setLessonIndex(0);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Could not clear saved progress:', error);
    }
    window.alert('Your progress has been reset. You can start again!');
  }

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <h1>Build Your Digital Skills</h1>
          <p>Learn computer skills for free.<br />Start learning today and track your progress!</p>
          <a href="#skills" className="main-button">Explore Skills →</a>
        </section>
        <ProgressSection progress={progress} totalLessons={totalLessons} completedCount={validCompleted.length} onReset={resetProgress} />
        <SkillsSection progress={progress} onStart={startSkill} />
        <AchievementsSection progress={progress} />
      </main>
      <Footer />
      {activeSkill && <LessonModal key={`${activeSkill.id}-${lessonIndex}`} skill={activeSkill} lessonIndex={lessonIndex} progress={progress} onClose={closeLesson} onComplete={completeLesson} onNext={nextLesson} />}
    </>
  );
}
