import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Awareness from "./components/Awareness.jsx";
import Contact from "./components/Contact.jsx";
import "./App.css";
function App() {
  const [messages, setMessages] = useState([]);
  return (
    <BrowserRouter>
      <header>
        <h1>Mental Health Awareness</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/awareness">Awareness</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/awareness"
            element={
              <Awareness messages={messages} setMessages={setMessages} />
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

