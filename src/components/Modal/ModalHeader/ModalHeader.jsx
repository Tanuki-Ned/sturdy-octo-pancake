import Button from "../../common/Button/Button";
import Typography from "../../common/Typography/Typography";
import "./ModalHeader.scss";

//Define the ModalHeader component. This component renders a title and a close button.
const ModalHeader = ({ title, subtitle, onClose }) => (
  <div className="modal-header">
    <Typography variant="h4" className="modal-title">
      {title}
    </Typography>
    <Typography variant="subheading1" className="modal-subtitle">
      {subtitle}
    </Typography>
    {/* onClick event triggers the onClose function when the close button is clicked */}
    <Button className="modal-close" onClick={onClose}>
      &times;
    </Button>
  </div>
);

export default ModalHeader;
