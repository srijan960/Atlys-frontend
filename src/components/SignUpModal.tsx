import {
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
  CloseButton,
} from "@chakra-ui/react";

function SignUpModal({ isOpen, onClose, onLoginClick }: any) {
  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
      <ModalOverlay />
      <ModalContent bg="#27292D" borderRadius={8} border="1px #969696 solid">
        <ModalHeader textAlign="center" color="#6B6C70">
          SIGN UP
        </ModalHeader>
        <ModalBody textAlign="center">
          <Text color="white" fontSize="18px" fontWeight="600">
            Create an account to continue
          </Text>
          <Box mt={4}>
            <CloseButton
              onClick={onClose}
              position="absolute"
              top="5px"
              right="5px"
              zIndex="1"
              bg="#131319"
              color="white"
              borderRadius="50%"
              _hover={{ bg: "#1d1e21" }}
            />
            <Text textAlign="start" color="#C5C7CA">
              Email
            </Text>
            <Input
              placeholder="Enter your email"
              variant="outline"
              borderColor="#35373B"
              borderRadius={4}
            />
          </Box>
          <Box mt={4}>
            <Text textAlign="start" color="#C5C7CA">
              Username
            </Text>
            <Input
              placeholder="Choose a preferred username"
              variant="outline"
              borderColor="#35373B"
              borderRadius={4}
            />
          </Box>
          <Box mt={4}>
            <Text textAlign="start" color="#C5C7CA">
              Password
            </Text>
            <Input
              placeholder="Choose a strong password"
              type="password"
              variant="outline"
              borderColor="#35373B"
              borderRadius={4}
            />
          </Box>
          <Button
            w="100%"
            mt={4}
            bgColor="#4A96FF"
            colorScheme="blue"
            color="white"
          >
            Continue
          </Button>
          <Box textAlign="start" mt={4}>
            <Text color="#7F8084" display="inline-block">
              Already have an account?{" "}
            </Text>
            <Text
              as="span"
              color="#C5C7CA"
              fontSize="14px"
              fontWeight="500"
              cursor="pointer"
              onClick={onLoginClick}
            >
              Login →
            </Text>
          </Box>
        </ModalBody>
        <ModalFooter justifyContent="center"></ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default SignUpModal;
