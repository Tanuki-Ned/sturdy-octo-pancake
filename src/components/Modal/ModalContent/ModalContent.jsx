import Typography from "../../common/Typography/Typography";

//Define the ModalContent component. Any children passed to this component will be rendered inside the modal.
const ModalContent = ({ children }) => (
  <div className="modal-content">{children}</div>
);

export default ModalContent;
