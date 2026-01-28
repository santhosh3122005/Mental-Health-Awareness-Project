import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Awareness from "./Components/Awareness.jsx";
import Contact from "./Components/Contact.jsx";
import Navbar from "./Components/Navbar.jsx";
import "./App.css";
function App() {
  const [messages, setMessages] = useState([]);

  return (
    <BrowserRouter>
      <header>
        <h1>Mental Health Awareness</h1>
      </header>

      <Navbar />

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

