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
