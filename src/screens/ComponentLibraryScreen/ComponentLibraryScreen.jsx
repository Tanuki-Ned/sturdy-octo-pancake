import React, { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/common/Button/Button";
import Typography from "../../components/common/Typography/Typography";
import Image from "../../components/common/Image/Image";
import Link from "../../components/common/Link/Link";
import Input from "../../components/common/Input/Input";
import DarkModeToggle from "../../components/DarkModeToggle/DarkModeToggle";
import FooterSection from "../../components/Footer/FooterSection/FooterSection";
import LinkList from "../../components/Footer/LinkList/LinkList";
import Footer from "../../components/Footer/Footer";
import Logo from "../../img/logo.png";
import Modal from "../../components/Modal/Modal";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import FormField from "../../components/SignUpForm/FormField/FormField";
import NavItem from "../../components/Navbar/NavItem/NavItem";
import DropDownToggle from "../../components/Navbar/DropDown/DropDownToggle/DropDownToggle";
import DropDownMenu from "../../components/Navbar/DropDown/DropDownMenu/DropDownMenu";
import NavToggle from "../../components/Navbar/NavToggle/NavToggle";
import Label from "../../components/common/Label/Label";
import "./ComponentLibraryScreen.scss";

const exampleLinks = [
  { href: "/home", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/services", text: "Services" },
  { href: "/contact", text: "Contact" },
];

// Example data for the Footer component
const navLinksAbout = [
  { href: "/news", text: "News" },
  { href: "/values", text: "Our Values" },
  { href: "/security", text: "Security" },
  { href: "/careers", text: "Careers" },
  { href: "/residency", text: "Residency" },
];

const navLinksResearch = [
  { href: "/overview", text: "Overview" },
  { href: "/index", text: "Index" },
  { href: "/uxdesign", text: "UX Design" },
  { href: "/articles", text: "Articles" },
];

const navLinksResources = [
  { href: "/apioverview", text: "API Overview" },
  { href: "/pricing", text: "Pricing" },
  { href: "/documentation", text: "Documentation" },
  { href: "/apilogin", text: "API Login" },
];

const navLinksTerms = [
  { href: "/terms-of-use", text: "Terms of Use" },
  { href: "/privacy-policy", text: "Privacy Policy" },
  { href: "/brand-guidelines", text: "Brand Guidelines" },
  { href: "/other-policies", text: "Other Policies" },
];

const socialPlatforms = [
  { href: "https://twitter.com", icon: "twitter" },
  { href: "https://facebook.com", icon: "facebook" },
  { href: "https://instagram.com", icon: "instagram" },
  { href: "https://youtube.com", icon: "youtube" },
];

const ComponentLibraryScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="component-library-page">
      <h1>Component Library</h1>

      <section className="component-section">
        <h2>Button Component</h2>
        {/* Description */}
        <p>
          The Button component applies variant-based styling with a default
          primary style using the classnames library.
        </p>

        {/* Usage Example */}

        <h3>Usage Example</h3>
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="danger">Warning Button</Button>
        <pre>
          <code>
            {`import classnames from 'classnames';
import './Button.scss';

const Button = ({ variant = 'primary', children, ...props }) => (
  <button
    className={classnames('button', {
      \`button--\${variant}\`: variant,
    })}
    {...props}
  >
    {children}
  </button>
);

export default Button;`}
          </code>
        </pre>
      </section>

      <section className="component-section">
        <h2>Typography Component</h2>
        {/* Description */}
        <p>
          The Typography component dynamically renders various HTML tags like
          h1, h2, and p based on the provided variant, applying appropriate
          styles through the classnames library to ensure consistent and custom
          text presentation.
        </p>

        {/* Usage Example */}

        <h3>Usage Example</h3>
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="subheading1">Subheading </Typography>
        <Typography variant="body1">Body Text</Typography>
        <pre>
          <code>
            {`// Usage example
const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subheading1: "h6",
  subheading2: "h6",
  body1: "p",
  body2: "p",
}

  return (
    <Component
      className={classnames({
        \`variant-\${variant}\`: variant,
      })}
    >
      {children}
    </Component>
  );
};
export default Typography;`}
          </code>
        </pre>
      </section>

      <section className="component-section">
        <h2>Image Component</h2>
        {/* Description */}
        <p>
          The Image component renders an HTML img element and spreads any passed
          props onto it, allowing for flexible customization and styling.
        </p>

        {/* Usage Example */}

        <h3>Usage Example</h3>
        <Image src={Logo} alt="Example" className="logo-library" />
        <pre>
          <code>
            {`import Logo from "../../img/logo.png";
import "../Image/Image.scss";

// Define Image Component
function Image({ ...props }) {
  return (
    <>
      <img {...props} />
    </>
  );
}

export default Image;

// Usage example

<Image src={Logo} alt="Example" className="logo-library" />`}
          </code>
        </pre>
      </section>

      <section className="component-section">
        <h2>Link Component</h2>
        {/* Description */}
        <p>
          The Link component renders an HTML a element with a href attribute and
          custom className, providing a simple way to create styled links with
          dynamic content.
        </p>

        {/* Usage Example */}

        <h3>Usage Example</h3>
        <Link href="#Solutions">Solutions</Link>
        <pre>
          <code>
            {`import './Link.scss';

const Link = ({ href, children }) => (
  <a href={href} className="link">
    {children}
  </a>
);

export default Link;

// Usage example

<Link href="https://example.com">Visit Example.com</Link>`}
          </code>
        </pre>
      </section>

      <section className="component-section">
        <h2>Input Component</h2>
        {/* Description */}
        <p>
          The Input component renders an HTML input element with customizable
          type, value, onChange, placeholder, and className attributes, allowing
          for flexible input field configurations.
        </p>

        {/* Usage Example */}

        <h3>Usage Example</h3>
        <Input
          type="text"
          value=""
          onChange={() => {}}
          placeholder="Enter text"
          className="input-field"
        />
        <pre>
          <code>
            {`const Input = ({ type, value, onChange, placeholder, className }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={className}
  />
);

export default Input;

// Usage example

<Input
  type="text"
  value=""
  onChange={() => {}}
  placeholder="Enter text"
  className="input-field"
/>`}
          </code>
        </pre>
      </section>

      <section className="component-section">
        <h2>Label Component</h2>

        {/* Description */}
        <p>
          The `Label` component is used to render a label element with an
          associated `htmlFor` attribute that links the label to a specific form
          element. You can pass children to display the text or elements within
          the label.
        </p>

        {/* Usage Example */}
        <h3>Usage Example</h3>
        <div className="label-example">
          <Label htmlFor="example-input" className="example-label">
            Example Label
          </Label>
          <input
            id="example-input"
            type="text"
            placeholder="Type something..."
          />
        </div>

        {/* Code Display */}
        <pre>
          <code>
            {`import React from 'react';
import './Label.scss';

const Label = ({ htmlFor, children, className }) => (
  <label htmlFor={htmlFor} className={className}>
    {children}
  </label>
);

export default Label;`}
          </code>
        </pre>
      </section>
      <section className="component-section">
        <h2>DarkModeToggle Component</h2>

        {/* Description */}
        <p>
          The DarkModeToggle component provides a button for toggling between
          light and dark themes, utilizing Framer Motion for smooth SVG
          animations and updating the document's theme based on user
          interaction.
        </p>

        {/* Usage Example */}

        <h3>Usage Example</h3>
        <DarkModeToggle />
        <pre>
          <code>
            {`import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Define icon and svg variants for animations
const iconVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1 },
};

const svgVariants = {
  initial: { rotate: 0, scale: 1 },
  animate: {
    rotate: 360,
    scale: 1.2,
    transition: { duration: 0.9 },
  },
};

// DarkModeToggle component
function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <button
      onClick={toggleDarkMode}
      style={{ background: "none", border: "none" }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width="60"
        height="30"
        initial="initial"
        animate="animate"
        variants={svgVariants}
        key={darkMode ? "dark" : "light"}
      >
        {darkMode ? (
          <motion.path
            d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0l-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
          />
        ) : (
          <motion.path
            d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
          />
        )}
      </motion.svg>
    </button>
  );
}

export default DarkModeToggle;`}
          </code>
        </pre>
      </section>

      <section className="component-section">
        <h2>DropDownMenu Component</h2>
        {/* Description */}
        <p>
          The DropDownMenu component uses Framer Motion to animate its
          appearance and disappearance, transitioning between an open and closed
          state with smooth spring effects, and adjusts its visibility and
          height based on the isOpen prop.
        </p>

        {/* Usage Example */}

        <h3>Usage Example</h3>
        <DropDownMenu isOpen={true}>
          <li>Dropdown Item 1</li>
          <li>Dropdown Item 2</li>
        </DropDownMenu>

        <pre>
          <code>
            {`import { motion } from "framer-motion";
import "./DropDownMenu.scss";

const DropDownMenu = ({ isOpen, children }) => {
  const menuVariants = {
    open: {
      clipPath: "inset(0% 0% 0% 0% round 10px)",
      opacity: 1,
      height: "auto",
    },
    closed: {
      clipPath: "inset(10% 50% 90% 50% round 10px)",
      opacity: 0,
      height: 0,
    },
  };

  return (
    <motion.ul
      className={\`dropdown-menu \${isOpen ? "is-open" : ""}\`}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      exit="closed"
      variants={menuVariants}
      transition={{
        type: "spring",
        bounce: 0,
      }}
    >
      {children}
    </motion.ul>
  );
};

export default DropDownMenu;`}
          </code>
        </pre>
      </section>

      <section className="component-section">
        <h2>NavItem Component</h2>
        {/* Description */}
        <p>
          The NavItem component renders a navigation item with optional dropdown
          functionality, utilizing Framer Motion to animate the appearance of
          dropdown items and a Typography component for consistent text styling.
          It dynamically displays dropdown content based on the dropdownItems
          prop and manages active states with the isActive prop.
        </p>

        {/* Usage Example */}

        <h3>Usage Example</h3>
        <NavItem href="#example" dropdownItems={[]} isActive={false}>
          Example Item
        </NavItem>

        <pre>
          <code>
            {`import { motion } from "framer-motion";
import Typography from "../../common/Typography/Typography";
import Dropdown from "../DropDown/DropDown";
import "./NavItem.scss";

const NavItem = ({ href, children, dropdownItems, isActive, onToggle }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <li className={\`nav-item \${isActive ? "is-active" : ""}\`}>
      {dropdownItems ? (
        <Dropdown
          label={<Typography variant="body1">{children}</Typography>}
          isOpen={isActive}
          onToggle={onToggle}
        >
          {dropdownItems.map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.8 }}
            >
              <Typography variant="body1">
                <a href={item.href}>{item.label}</a>
              </Typography>
            </motion.li>
          ))}
        </Dropdown>
      ) : (
        <Typography variant="body1">
          <a href={href}>{children}</a>
        </Typography>
      )}
    </li>
  );
};

export default NavItem;`}
          </code>
        </pre>
      </section>
      <section className="component-section">
        <h2>DropDownToggle Component</h2>
        {/* Description */}
        <p>
          The DropDownToggle component is a button that triggers a dropdown menu
          when clicked, allowing customization of its appearance and content
          through the children prop.
        </p>

        {/* Usage Example */}

        <h3>Usage Example</h3>
        <DropDownToggle onClick={() => {}}>Toggle Dropdown</DropDownToggle>

        <pre>
          <code>
            {`import './DropDownToggle.scss';

const DropDownToggle = ({ onClick, children }) => {
  return (
    <button className="dropdown-toggle" onClick={onClick}>
      {children}
    </button>
  );
};

export default DropDownToggle;`}
          </code>
        </pre>
      </section>

      <section className="component-section">
        <h2>NavToggle Component</h2>
        {/* Description */}
        <p>
          The NavToggle component is a button that displays an image and
          triggers a click event, allowing for interactive toggling of
          navigation elements.
        </p>

        {/* Usage Example */}

        <h3>Usage Example</h3>
        <NavToggle
          src="src/img/menu.svg"
          alt="Menu Toggle"
          onClick={() => {}}
        />

        <pre>
          <code>
            {`import Image from "../../common/Image/Image";
import './NavToggle.scss';

const NavToggle = ({ src, alt, onClick }) => {
  return (
    <button className="nav-toggle" onClick={onClick}>
      <Image src={src} alt={alt} />
    </button>
  );
};

export default NavToggle;`}
          </code>
        </pre>
      </section>

      <section className="component-section">
        <h2>Complete Navbar</h2>

        {/* Description */}
        <p>
          The Navbar component provides a responsive navigation bar with support
          for dark mode. It includes a brand logo, a dark mode toggle button,
          and a menu toggle button for mobile view. The navigation items feature
          dropdown menus that expand and collapse based on user interaction,
          with animations handled by Framer Motion. The component uses state to
          manage menu visibility and active dropdowns, adapting the theme based
          on the theme prop.
        </p>

        {/* Usage Example */}
        <h3>Usage Example</h3>
        <Navbar darkMode={false} setDarkMode={() => {}} />

        <pre>
          <code>
            {`import React, { useState } from "react";
import Image from "../common/Image/Image";
import NavItem from "./NavItem/NavItem";
import NavToggle from "./NavToggle/NavToggle";
import Logo from "../../img/logo.png";
import Menu from "../../img/menu.svg";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import "./navbar.scss";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = (itemKey) => {
    setActiveDropdown((prev) => (prev === itemKey ? null : itemKey));
  };

  return (
    <nav className={\`navbar \${darkMode ? 'dark-theme' : ''}\`}>
      <div className="navbar-brand">
        <a href="/" className="navbar-logo">
          <Image src={Logo} alt="Logo" />
        </a>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <NavToggle src={Menu} alt="Menu" onClick={toggleMenu} />
      <div className={\`navbar-menu \${isOpen ? "is-active" : ""}\`}>
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

export default Navbar;`}
          </code>
        </pre>
      </section>

      <section className="component-section">
        <h2>Form Field Component</h2>
        {/* Description */}
        <p>
          The FormField component is used to create a form input field with a
          label. It takes in various props to configure the input element,
          including label, type, value, onChange, placeholder, className, and
          id.
        </p>

        {/* Usage Example */}

        <h3>Usage Example</h3>
        <FormField />
        <pre>
          <code>
            {`import Label from "../../common/Label/Label";
import Input from "../../common/Input/Input";
import "./FormField.scss";

// Define FormField component that renders a form field with a label, input, and optional className
const FormField = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  className,
  id,
}) => (
  <div className="form-field">
    <Label htmlFor={id} className="form-label">
      {label}
    </Label>
    <Input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      id={id}
    />
  </div>
);

export default FormField;

// Usage example
<FormField
  label="Name"
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Enter your name"
  className="input-field"
  id="name"
/>`}
          </code>
        </pre>
      </section>

      <section className="component-section">
        <h2>Sign Up Form Component</h2>
        {/* Description */}
        <p>
          The SignUpForm component utilizes the FormField component to create a
          user registration form. It manages the form state using useState and
          handles form submission with a handleSubmit function. The form
          includes fields for user name and email, rendered using FormField, and
          a submit button to complete the registration process.
        </p>

        {/* Usage Example */}

        <h3>Usage Example</h3>
        <SignUpForm />
        <pre>
          <code>
            {`import React, { useState } from "react";
import FormField from "./FormField/FormField";
import Button from "../common/Button/Button";

const SignUpForm = () => {
  // Define the initial variables for the form fields.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Define a function to handle the form submission event
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log data to the console upon form submission.
    console.log("User Details:", { name, email });
  };

  // Render the sign-up form component with form fields and a submit button
  return (
    <div>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormField
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="input-field"
          id="name"
        />
        <FormField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="input-field"
          id="email"
        />
        <Button variant="primary">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;

// Usage example
<SignUpForm />`}
          </code>
        </pre>
      </section>

      <section className="component-section">
        <h2>Modal Component</h2>
        {/* Description */}
        <p>
          The Modal component is a reusable modal dialog box that includes a
          header, content area, and a close functionality
        </p>

        {/* Usage Example */}

        <h3>Usage Example</h3>

        <div className="modal-example">
          {/* Button to open the Modal */}
          <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

          {/* Modal Component */}
          {isModalOpen && (
            <Modal
              title="Sign Up"
              subtitle="Join us now"
              onClose={() => setIsModalOpen(false)}
              theme="dark"
            >
              <SignUpForm
                onSubmit={(data) => console.log("User Details:", data)}
              />
            </Modal>
          )}
        </div>

        <pre>
          <code>
            {`
import { motion } from 'framer-motion';
import Typography from '../common/Typography/Typography';
import ModalHeader from './ModalHeader/ModalHeader';
import ModalContent from './ModalContent/ModalContent';
import SignUpForm from '../SignUpForm/SignUpForm';
import './Modal.scss';

const Modal = ({ title, subtitle, onClose }) => {
  const handleFormSubmit = (formData) => {
    console.log("User Details:", formData);
    onClose(); // Close the modal after submission
  };

  return (
    <motion.div 
      className="modal"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <div className="modal-overlay" onClick={onClose}></div>
      <motion.div
        className="modal-body"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ type: "tween", duration: 0.5 }}
      >
        <ModalHeader title={title} subtitle={subtitle} onClose={onClose} />
        <Typography variant="body1">
          <ModalContent>
            <SignUpForm onSubmit={handleFormSubmit} />
          </ModalContent>
        </Typography>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
`}
          </code>
        </pre>

        <h2>Modal Header Component</h2>
        <p>
          The ModalHeader component provides the header section of the modal,
          including: Title and Subtitle: Displays a title and optional subtitle
          using the Typography component for consistent text styling.
        </p>
        <pre>
          <code>
            {`// ModalHeader.js
import Button from "../../common/Button/Button";
import Typography from "../../common/Typography/Typography";
import "./ModalHeader.scss";

const ModalHeader = ({ title, subtitle, onClose }) => (
  <div className="modal-header">
    <Typography variant="h4" className="modal-title">
      {title}
    </Typography>
    <Typography variant="subheading1" className="modal-subtitle">
      {subtitle}
    </Typography>
    <Button className="modal-close" onClick={onClose}>
      &times;
    </Button>
  </div>
);

export default ModalHeader;`}
          </code>
        </pre>
        <h2>Modal Content Component</h2>
        <p>
          he ModalContent component serves as a container for the main content
          of the modal. It allows for flexible content insertion, such as forms
          or other interactive elements.
        </p>
        <pre>
          <code>
            {`// ModalContent.js
import Typography from "../../common/Typography/Typography";

const ModalContent = ({ children }) => (
  <div className="modal-content">{children}</div>
);

export default ModalContent;`}
          </code>
        </pre>
      </section>

      <section className="component-section">
        <h2>FooterSection Component</h2>
        {/* Description */}
        <p>
          The FooterSection component is designed to create a section within the
          footer of a webpage. It accepts a title and a list of links as props.
        </p>

        {/* Usage Example */}

        <h3>Usage Example</h3>
        <FooterSection title="About Us" links={exampleLinks} />
        <pre>
          <code>
            {`import Typography from "../../common/Typography/Typography";
import LinkList from "../LinkList/LinkList";
import '../FooterSection/FooterSection.scss';

//Define-Creates a FooterSection component that will house the footer links and titles.

const FooterSection = ({ title, links}) => (
  <div className="footer-section">
    <Typography variant="h6">{title}</Typography>
    <LinkList links={links} />
  </div>
);

export default FooterSection;

// Usage example
<FooterSection title="About Us" links={exampleLinks} />`}
          </code>
        </pre>
      </section>

      <section className="component-section">
        <h2>LinkList Component</h2>
        {/* Description */}
        <p>
          The LinkList component is designed to render a list of navigation
          links. It accepts a links prop, which is an array of link objects.
          Each object should contain an href for the link destination and a text
          for the link label.This component is useful for displaying collections
          of links in a clean and organized manner.
        </p>

        {/* Usage Example */}

        <h3>Usage Example</h3>
        <LinkList links={exampleLinks} />
        <pre>
          <code>
            {`import Link from '../../common/Link/Link';
import Typography from '../../common/Typography/Typography';

//Define a LinkList component that renders a list of links.
const LinkList = ({ links }) => (
  <ul className="link-list">
    {links.map((link, index) => (
      <li key={index}>
        <Link href={link.href}>
          <Typography variant="body1">{link.text}</Typography>
        </Link>
      </li>
    ))}
  </ul>
);

export default LinkList;

// Usage example

<LinkList links={exampleLinks} />`}
          </code>
        </pre>
      </section>

      <section className="component-section">
        <h3>Combined Footer Example</h3>
        {/* Description */}
        <p>
          The Footer component is designed to provide a comprehensive footer
          section for a website.Each section is rendered with the FooterSection
          component, which displays a title and a list of links. This layout
          ensures that users can easily navigate to important sections of the
          website and find relevant information.
        </p>

        {/* Usage Example */}

        <h3>Usage Example</h3>
        <Footer />
        <pre>
          <code>
            {`import FooterSection from "./FooterSection/FooterSection";
import "./Footer.scss";
import SocialMediaIcons from "./SocialMediaIcons/SocialMediaicons";
import Image from "../common/Image/Image";
import Logo from "../../img/logo.png";

//Define a Footer component that renders the footer section, Social Medial Icons and Logo components
const Footer = () => {
  const navLinksAbout = [
    { href: "/news", text: "News" },
    { href: "/values", text: "Our Values" },
    { href: "/security", text: "Security" },
    { href: "/careers", text: "Careers" },
    { href: "/residency", text: "Residency" },
  ];

  const navLinksResearch = [
    { href: "/overview", text: "Overview" },
    { href: "/index", text: "Index" },
    { href: "/uxdesign", text: "UX Design" },
    { href: "/articles", text: "Articles" },
  ];

  const navLinksResources = [
    { href: "/apioverview", text: "API Overview" },
    { href: "/pricing", text: "Pricing" },
    { href: "/documentation", text: "Documentation" },
    { href: "/apilogin", text: "API Login" },
  ];

  const navLinksTerms = [
    { href: "/terms-of-use", text: "Terms of Use" },
    { href: "/privacy-policy", text: "Privacy Policy" },
    { href: "/brand-guidelines", text: "Brand Guidelines" },
    { href: "/other-policies", text: "Other Policies" },
  ];

  const socialPlatforms = [
    { href: "https://twitter.com", icon: "twitter" },
    { href: "https://facebook.com", icon: "facebook" },
    { href: "https://instagram.com", icon: "instagram" },
    { href: "https://youtube.com", icon: "youtube" },
  ];

  return (
    <footer className="footer">
      <div className="logo-and-social">
        <a href="/" className="footer-logo">
          <Image src={Logo} alt="Logo" />
        </a>
        <SocialMediaIcons platforms={socialPlatforms} />
      </div>
      <div className="footer-sections">
        <FooterSection title="About Us" links={navLinksAbout} />
        <FooterSection title="Research" links={navLinksResearch} />
        <FooterSection title="Resources" links={navLinksResources} />
        <FooterSection title="Terms & Policies" links={navLinksTerms} />
      </div>
    </footer>
  );
};

export default Footer;`}
          </code>
        </pre>
      </section>
    </div>
  );
};

export default ComponentLibraryScreen;
