import { motion } from "framer-motion";
import Typography from "../../common/Typography/Typography";
import Dropdown from "../DropDown/DropDown";
import "./NavItem.scss";

const NavItem = ({ href, children, dropdownItems, isActive, onToggle }) => {
   // Define variants for the dropdown menu items
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <li className={`nav-item ${isActive ? "is-active" : ""}`}>
      {dropdownItems ? (
        <Dropdown
          label={<Typography variant="body1">{children}</Typography>}
          isOpen={isActive}
          onToggle={onToggle}
        >
          {dropdownItems.map((item, index) => (
             // Map through the dropdownItems array and render a motion.li element for each item
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

export default NavItem;
