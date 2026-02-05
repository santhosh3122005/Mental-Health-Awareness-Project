import { useState } from "react";
function Login({ onLogin, goToSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const submit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };
  return (
    <div className="login-bg">
      <div className="login-overlay"></div>
      <form className="login-card" onSubmit={submit}>
        <h2>Login</h2>
        <p>Mental Health Awareness</p>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p className="hint">
          New user?
          <br />
          <span
            style={{ cursor: "pointer", color: "#00ffcc" }}
            onClick={goToSignup}
          >
            Create account
          </span>
        </p>
      </form>
    </div>
  );
}
export default Login;
