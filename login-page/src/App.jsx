
import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    alert("Login UI submitted! Connect a backend to authenticate users.");
  }

  return (
    <main className="page">
      <section className="login-card">
        <div className="brand">
          <div className="brand-icon">✦</div>
          <span>MONO<span className="brand-light">SPACE</span></span>
        </div>

        <div className="heading">
          <p className="eyebrow">WELCOME BACK</p>
          <h1>Sign in to<br /><span>your account.</span></h1>
          <p className="subtitle">Enter your details to continue.</p>
        </div>

        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />

          <div className="password-heading">
            <label htmlFor="password">Password</label>
            <a href="#forgot" onClick={(e) => {
              e.preventDefault();
              alert("Connect a password reset flow here.");
            }}>Forgot password?</a>
          </div>

          <div className="password-field">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <label className="remember">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            <span>Remember me</span>
          </label>

          <button className="login-button" type="submit">
            Sign in <span>→</span>
          </button>
        </form>

        <div className="separator"><span>NEW HERE?</span></div>

        <p className="signup">
          Don't have an account? <a href="#signup" onClick={(e) => {
            e.preventDefault();
            alert("Create a registration page next.");
          }}>Create account</a>
        </p>

        <footer>© 2026 MONOSPACE. MADE FOR YOU.</footer>
      </section>

      <aside className="visual-panel">
        <div className="visual-top">
          <span>YOUR SPACE. YOUR RULES.</span>
          <span className="online"><i /> ONLINE</span>
        </div>

        <div className="visual-center">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="center-symbol">M.</div>
          <div className="floating-card card-one">
            <span>✳</span>
            <div><strong>One space.</strong><small>Everything connected.</small></div>
          </div>
          <div className="floating-card card-two">
            <span>↗</span>
            <div><strong>Pick up where</strong><small>you left off.</small></div>
          </div>
        </div>

        <div className="visual-bottom">
          <p>GOOD TO SEE<br />YOU <em>AGAIN.</em></p>
          <span>A BETTER SPACE TO BEGIN.</span>
        </div>
      </aside>
    </main>
  );
}

export default App;
