import { motion } from "framer-motion";
import "./DropDownMenu.scss";

const DropDownMenu = ({ isOpen, children }) => {
  const menuVariants = {
    open: {
       // Set the clipPath property to create a rounded rectangle/border
      clipPath: "inset(0% 0% 0% 0% round 10px)",
      opacity: 1,
      height: "auto", // Allows the dropdown to expand to full height
    },
    closed: {
      clipPath: "inset(10% 50% 90% 50% round 10px)",
      opacity: 0,
      height: 0,
    },
  };

  return (
    <motion.ul
      className={`dropdown-menu ${isOpen ? "is-open" : ""}`}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      exit="closed"
      variants={menuVariants}
      transition={{
        type: "tween",
        duration: 0.3
        
      }}
    >
      {children}
    </motion.ul>
  );
};

export default DropDownMenu;
