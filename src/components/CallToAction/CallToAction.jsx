import React, { useState } from "react";
import CTASection from "./CallToActionSection/CallToActionSection";
import Modal from "../Modal/Modal";

const CallToAction = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <CTASection
        title="Want to be on the front-paw of AI innovation?"
        description={[]}
        onButtonClick={handleButtonClick}
      />
      {isModalOpen && (
        <Modal
          title="Join the Fetch Community today!"
          subtitle="Keep up to date with the latest AI news."
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default CallToAction;
