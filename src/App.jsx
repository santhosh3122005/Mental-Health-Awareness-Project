import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Awareness from "./Components/Awareness.jsx";
import Contact from "./Components/Contact.jsx";
import Navbar from "./Components/Navbar.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import "./App.css";
function App() {
  const [messages, setMessages] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState("login"); 
  const [role, setRole] = useState("user");
  const handleLogin = (username, password) => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (
      savedUser &&
      username === savedUser.username &&
      password === savedUser.password
    ) {
      setIsLoggedIn(true);
      setRole("user");
    } else {
      alert("❌ Invalid Credentials");
    }
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setPage("login");
    setRole("");
  };
  if (!isLoggedIn) {
    return page === "login" ? (
      <Login
        onLogin={handleLogin}
        goToSignup={() => setPage("signup")}
      />
    ) : (
      <Signup goToLogin={() => setPage("login")} />
    );
  }
  return (
    <BrowserRouter>
      <header className="app-header">
        <h1 className="app-title">Mental Health Awareness</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <Navbar role={role} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/awareness"
            element={
              <Awareness
                messages={messages}
                setMessages={setMessages}
                role={role}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
