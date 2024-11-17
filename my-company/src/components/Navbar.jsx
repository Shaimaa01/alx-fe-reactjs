// src/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        display: "flex",
        justifyContent: "space-around",
        padding: "10px",
        color: "white",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
        About
      </Link>
      <Link to="/services" style={{ color: "white", textDecoration: "none" }}>
        Services
      </Link>
      <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
