import { useState } from "react";
function Signup({ goToLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }
    localStorage.setItem(
      "user",
      JSON.stringify({ username, password })
    );
    alert("✅ Signup successful! Please login.");
    goToLogin();
  };
  return (
    <div className="login-bg">
      <div className="login-overlay"></div>
      <form className="login-card" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <p>Create your account</p>
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
        <button type="submit">Create Account</button>
        <p className="hint">
          Already have an account?
          <br />
          <span
            style={{ cursor: "pointer", color: "#00ffcc" }}
            onClick={goToLogin}
          >
            Login here
          </span>
        </p>
      </form>
    </div>
  );
}
export default Signup;
