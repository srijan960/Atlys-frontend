import {
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";
import { LoginComponent } from "./LoginComponent";

function LoginModal({ isOpen, onClose, onRegisterClick }: any) {
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="#27292D" border="1px #969696 solid">
        <LoginComponent
          showCloseButton={true}
          onClose={onClose}
          onRegisterClick={onRegisterClick}
        />
      </ModalContent>
    </Modal>
  );
}

export default LoginModal;
