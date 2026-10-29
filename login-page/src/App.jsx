
import { useEffect, useState } from "react";
import "./App.css";

const API = "http://localhost:5000/api";

export default function App() {
  const [screen, setScreen] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    async function checkSession() {
      try {
        const response = await fetch(`${API}/auth/me`, {
          credentials: "include"
        });
        const data = await response.json();

        if (response.ok) {
          setUser(data.user);
          setScreen("dashboard");
        }
      } catch {
        setError("Cannot connect to the server.");
      } finally {
        setLoading(false);
      }
    }

    checkSession();
  }, []);

  function changeScreen(nextScreen) {
    setScreen(nextScreen);
    setError("");
    setSuccess("");
    setPassword("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setSubmitting(true);

    const endpoint = screen === "register" ? "register" : "login";
    const body = screen === "register"
      ? { name, email, password }
      : { email, password };

    try {
      const response = await fetch(`${API}/auth/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body)
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Something went wrong.");
        return;
      }

      setUser(data.user);
      setScreen("dashboard");
      setPassword("");
      setSuccess("");
    } catch {
      setError("Cannot connect to the server. Check that your backend is running.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleLogout() {
    setError("");

    try {
      const response = await fetch(`${API}/auth/logout`, {
        method: "POST",
        credentials: "include"
      });

      if (!response.ok) {
        setError("Logout failed. Please try again.");
        return;
      }

      setUser(null);
      setName("");
      setEmail("");
      setPassword("");
      setScreen("login");
      setSuccess("You have logged out successfully.");
    } catch {
      setError("Cannot connect to the server.");
    }
  }

  if (loading) {
    return <main className="loading-screen">Loading your workspace...</main>;
  }

  if (screen === "dashboard" && user) {
    return (
      <main className="dashboard-page">
        <nav className="dashboard-nav">
          <a className="brand" href="/" onClick={(e) => e.preventDefault()}>
            <span className="brand-mark">M.</span>
            MONOSPACE
          </a>
          <button className="logout-button" onClick={handleLogout}>
            Log out <span>↗</span>
          </button>
        </nav>

        <section className="dashboard-content">
          <div className="dashboard-eyebrow">
            <span className="status-dot"></span>
            YOUR PRIVATE WORKSPACE
          </div>

          <h1>Good to have<br />you here, <span>{user.name.split(" ")[0]}.</span></h1>
          <p className="dashboard-description">
            You're signed in. This is your personal dashboard, connected to your account.
          </p>

          <div className="dashboard-grid">
            <article className="welcome-card">
              <span className="card-label">YOUR ACCOUNT</span>
              <div className="avatar">
                {user.name.trim().charAt(0).toUpperCase()}
              </div>
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
                Your login system is connected. You can build profile settings,
                projects, or other features into this dashboard.
              </p>
              <div className="info-footer">
                <span>ACCOUNT ACCESS</span>
                <span>ACTIVE ↗</span>
              </div>
            </article>
          </div>

          <div className="dashboard-footer">
            <span>MONOSPACE / PERSONAL SPACE</span>
            <span>MADE FOR WHAT'S NEXT.</span>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="auth-page">
      <section className="auth-panel">
        <a className="brand" href="/" onClick={(e) => e.preventDefault()}>
          <span className="brand-mark">M.</span>
          MONOSPACE
        </a>

        <div className="auth-content">
          <div className="auth-eyebrow">
            <span className="status-dot"></span>
            {screen === "register" ? "CREATE YOUR ACCOUNT" : "WELCOME BACK"}
          </div>

          <h1>
            {screen === "register" ? (
              <>Your next<br /><span>chapter.</span></>
            ) : (
              <>Good to see<br /><span>you again.</span></>
            )}
          </h1>

          <p className="auth-description">
            {screen === "register"
              ? "Create an account and make this space yours."
              : "Sign in to pick up right where you left off."}
          </p>

          <div className="auth-tabs">
            <button
              type="button"
              className={screen === "login" ? "active" : ""}
              onClick={() => changeScreen("login")}
            >
              Sign in
            </button>
            <button
              type="button"
              className={screen === "register" ? "active" : ""}
              onClick={() => changeScreen("register")}
            >
              Create account
            </button>
          </div>

          {success && <div className="message success-message">{success}</div>}
          {error && <div className="message error-message">{error}</div>}

          <form className="auth-form" onSubmit={handleSubmit}>
            {screen === "register" && (
              <label>
                FULL NAME
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
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
                  placeholder={screen === "register" ? "At least 8 characters" : "Enter your password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={screen === "register" ? 8 : undefined}
                  autoComplete={screen === "register" ? "new-password" : "current-password"}
                  required
                />
                <button
                  type="button"
                  className="show-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>
            </label>

            {screen === "login" && (
              <div className="form-options">
                <span>Secure sign in</span>
                <span>Forgot password?</span>
              </div>
            )}

            {screen === "register" && (
              <p className="terms-note">
                Your password will be securely hashed before storage.
              </p>
            )}

            <button className="submit-button" type="submit" disabled={submitting}>
              {submitting
                ? "PLEASE WAIT..."
                : screen === "register"
                  ? "CREATE ACCOUNT"
                  : "SIGN IN"}
              {!submitting && <span>↗</span>}
            </button>
          </form>

          <p className="switch-prompt">
            {screen === "register" ? "Already have an account?" : "New around here?"}{" "}
            <button
              type="button"
              onClick={() => changeScreen(screen === "register" ? "login" : "register")}
            >
              {screen === "register" ? "Sign in" : "Create an account"}
            </button>
          </p>
        </div>

        <div className="auth-bottom">
          <span>© 2026 MONOSPACE</span>
          <span>BUILT FOR WHAT'S NEXT.</span>
        </div>
      </section>

      <aside className="visual-panel">
        <div className="visual-top">
          <span>YOUR SPACE. YOUR PACE.</span>
          <span>EST. 2026</span>
        </div>
        <div className="visual-art">
          <div className="art-circle circle-one"></div>
          <div className="art-circle circle-two"></div>
          <div className="art-line line-one"></div>
          <div className="art-line line-two"></div>
          <div className="art-center">M<span>.</span></div>
          <span className="art-coordinate coordinate-one">19°04' N</span>
          <span className="art-coordinate coordinate-two">72°52' E</span>
        </div>
        <div className="visual-bottom">
          <div>
            <span className="visual-caption">A LITTLE LESS NOISE.</span>
            <h2>A place to<br />begin again<span>.</span></h2>
          </div>
          <p>Sign in. Settle in.<br />Make it yours.</p>
        </div>
        <div className="visual-index">M / 001 — PERSONAL WORKSPACE</div>
      </aside>
    </main>
  );
}
