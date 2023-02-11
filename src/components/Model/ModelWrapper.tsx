import {
    Modal,
    ModalOverlay,
    ModalContent,
  } from "@chakra-ui/react";
  import React from "react";
  
  type ModalWrapperProps = {
    isOpen: boolean;
    onClose: () => void;
    children:any;
  };
  
  const ModalWrapper: React.FC<ModalWrapperProps> = ({
    isOpen,
    onClose,
    children
  }) => {
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
          <ModalOverlay />
          <ModalContent width={{ base: "sm", md: "xl" }}>{children}</ModalContent>
        </Modal>
      </>
    );
  };
  export default ModalWrapper;