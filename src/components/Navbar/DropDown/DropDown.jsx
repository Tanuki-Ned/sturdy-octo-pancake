import DropDownToggle from "../DropDown/DropDownToggle/DropDownToggle";
import DropDownMenu from "../DropDown/DropDownMenu/DropDownMenu";
import "./DropDown.scss";

//
const Dropdown = ({ label, isOpen, onToggle, children }) => {
  return (
    <div className="dropdown">
      <DropDownToggle onClick={onToggle}>{label}</DropDownToggle>
      <DropDownMenu isOpen={isOpen}>{children}</DropDownMenu>
    </div>
  );
};

export default Dropdown;
