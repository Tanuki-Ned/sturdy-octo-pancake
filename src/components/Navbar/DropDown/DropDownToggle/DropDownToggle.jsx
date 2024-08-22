import "./DropDownToggle.scss";

const DropDownToggle = ({ onClick, children }) => {
  return (
    <button className="dropdown-toggle" onClick={onClick}>
      {children}
    </button>
  );
};

export default DropDownToggle;
