import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {
  // State to track the active link
  const [activeLink, setActiveLink] = useState(null);

  // Navigation links data
  const navLinks = [
    { name: "Rentabilidad", href: "#rentabilidad" },
    { name: "Recursos", href: "#recursos" },
    { name: "Herramientas", href: "#herramientas" },
  ];

  // Handle link click to set active state
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <nav className="container-nav" aria-label="Main navigation">
      <ul className="nav">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className={activeLink === index ? "nav-link active" : "nav-link"}
              onClick={() => handleLinkClick(index)}
              aria-current={activeLink === index ? "page" : undefined}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;