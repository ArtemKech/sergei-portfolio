// Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">Сергей Фотограф</Link>
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <Link to="/about">ОБО МНЕ</Link>
            </li>
            <li>
              <Link to="/contact">СВЯЗАТЬСЯ</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
