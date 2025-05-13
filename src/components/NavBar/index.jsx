import "./NavBar.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Operaciones", path: "/operaciones" },
    { name: "Registrar", path: "/registrar" },
  ];

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <div className="container-nav" aria-label="Main navigation">
      <ul className="nav">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className={
                location.pathname === link.path || activeLink === index
                  ? "nav-clicled"
                  : "nav-incliked"
              }
              onClick={() => handleLinkClick(index)}
              aria-current={
                location.pathname === link.path || activeLink === index
                  ? "page"
                  : undefined
              }
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
