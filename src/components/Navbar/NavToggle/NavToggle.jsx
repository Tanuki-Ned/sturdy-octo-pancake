import Image from "../../common/Image/Image";
import './NavToggle.scss';

//Define the NavToggle component that renders a hamburger menu toggle button.
const NavToggle = ({ src, alt, onClick }) => {
  return (
    <button className="nav-toggle" onClick={onClick}>
      <Image src={src} alt={alt} />
    </button>
  );
};

export default NavToggle;