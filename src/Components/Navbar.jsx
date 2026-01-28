import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        padding: "12px",
        textAlign: "center"
      }}
    >
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/awareness" style={linkStyle}>Awareness</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  margin: "0 15px",
  textDecoration: "none",
  fontWeight: "bold"
};

export default Navbar;
