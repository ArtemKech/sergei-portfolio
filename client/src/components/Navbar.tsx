// Navbar.tsx
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const [isTop, setIsTop] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const at_top = window.scrollY === 0;
      setIsTop(at_top);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isTopClass = isTop ? "navbar_top" : "";
  const isTopLogoClass = isTop && location.pathname === "/" ? "logo-top" : "";
  const isTopNavElementsClass =
    isTop && location.pathname === "/" ? "nav-elements-top" : "";

  return (
    <nav className={`navbar ${isTopClass}`}>
      <div className="container">
        <div className={`logo ${isTopLogoClass}`}>
          <Link to="/">Сергей Фотограф</Link>
        </div>
        <div className={`nav-elements ${isTopNavElementsClass}`}>
          <ul>
            <li>
              <Link to="/about">ОБО МНЕ</Link>
            </li>
            <li>
              <Link to="/portfolio">ПОРТФОЛИО</Link>
            </li>
            <li>
              <Link to="/price">ПРАЙС</Link>
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
