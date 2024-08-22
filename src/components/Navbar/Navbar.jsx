import React, { useState } from "react";
import Image from "../common/Image/Image";
import NavItem from "./NavItem/NavItem";
import NavToggle from "./NavToggle/NavToggle";
import Logo from "../../img/logo.png";
import Menu from "../../img/menu.svg";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import "./navbar.scss";

const Navbar = ({ darkMode, setDarkMode }) => {
  // Accept darkMode and setDarkMode as props- passed down from App component to ensure consistent behaviour across all components
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = (itemKey) => {
    setActiveDropdown((prev) => (prev === itemKey ? null : itemKey));
  };

  return (
    <nav className={`navbar ${darkMode ? "dark-theme" : ""}`}>
      <div className="navbar-brand">
        <a href="/" className="navbar-logo">
          <Image src={Logo} alt="Logo" />
        </a>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <NavToggle src={Menu} alt="Menu" onClick={toggleMenu} />
      <div className={`navbar-menu ${isOpen ? "is-active" : ""}`}>
        <ul className="navbar-start">
          <NavItem
            href="#home"
            dropdownItems={[
              { href: "#analytics", label: "AI-Powered Analytics" },
              { href: "#maintenance", label: "Predictive Maintenance" },
              { href: "#automation", label: "Intelligent Automation" },
              {
                href: "#processing",
                label: "Natural Language Processing (NLP)",
              },
              { href: "#custom", label: "Custom AI Solutions" },
            ]}
            isActive={activeDropdown === "home"}
            onToggle={() => handleDropdownToggle("home")}
          >
            Solutions
          </NavItem>
          <NavItem
            href="#about"
            dropdownItems={[
              { href: "#events", label: "Events & Webinars" },
              { href: "#projects", label: "Community Projects" },
              { href: "#stories", label: "Success Stories" },
              { href: "#networking", label: "Networking" },
            ]}
            isActive={activeDropdown === "about"}
            onToggle={() => handleDropdownToggle("about")}
          >
            Community
          </NavItem>
          <NavItem
            href="#services"
            dropdownItems={[
              { href: "#documentation", label: "Documentation" },
              { href: "#casestudies", label: "Case Studies" },
              { href: "#whitepapers", label: "White Papers" },
              { href: "/component-library", label: "Component Library" },
            ]}
            isActive={activeDropdown === "services"}
            onToggle={() => handleDropdownToggle("services")}
          >
            Resources
          </NavItem>
          <NavItem
            href="#pricing"
            dropdownItems={[
              { href: "#consulting", label: "Consulting" },
              { href: "#development", label: "Development" },
            ]}
            isActive={activeDropdown === "pricing"}
            onToggle={() => handleDropdownToggle("pricing")}
          >
            Pricing
          </NavItem>
          <NavItem
            href="#contact"
            dropdownItems={[
              { href: "#email", label: "Email" },
              { href: "#call", label: "Call" },
              { href: "#chat", label: "Chat" },
            ]}
            isActive={activeDropdown === "contact"}
            onToggle={() => handleDropdownToggle("contact")}
          >
            Contact
          </NavItem>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
