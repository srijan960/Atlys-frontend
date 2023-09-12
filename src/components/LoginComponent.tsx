import {
  Box,
  Text,
  Input,
  Button,
  Image,
  InputGroup,
  InputRightElement,
  CloseButton,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export function LoginComponent({
  showCloseButton,
  onClose,
  onRegisterClick,
}: any) {
  const router = useRouter();
  return (
    <Box w="463px" h="420px" position="relative">
      <Box
        w="463px"
        h="420px"
        left="0"
        top="0"
        position="absolute"
        bg="#27292D"
        borderRadius="8px"
        border="1px #969696 solid"
      />
      {showCloseButton && (
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
      )}
      <Text
        left="173px"
        top="40px"
        position="absolute"
        color="#6B6C70"
        fontSize="14px"
        fontWeight="500"
        letterSpacing="0.42px"
        isTruncated
      >
        WELCOME BACK
      </Text>
      <Text
        left="137px"
        top="65px"
        position="absolute"
        color="white"
        fontSize="18px"
        fontWeight="600"
        isTruncated
      >
        Log into your account
      </Text>
      <Box w="415px" h="70px" left="24px" top="132px" position="absolute">
        <Text
          left="0"
          top="0"
          position="absolute"
          color="#C5C7CA"
          fontSize="14px"
          fontWeight="500"
          isTruncated
        >
          Email or Username
        </Text>
        <Box w="415px" h="43px" left="0" top="27px" position="absolute">
          <Input
            border="1.5px solid #35373B"
            bg="transparent"
            padding="12px"
            placeholder="Enter your email or username"
            size="lg"
            w="100%"
          />
        </Box>
      </Box>
      <Box w="415px" h="70px" left="24px" top="218px" position="absolute">
        <Text
          left="0"
          top="0"
          position="absolute"
          color="#C5C7CA"
          fontSize="14px"
          fontWeight="500"
          isTruncated
        >
          Password
        </Text>
        <Text
          left="312px"
          top="2px"
          position="absolute"
          textAlign="right"
          color="#C5C7CA"
          fontSize="12px"
          fontWeight="500"
          isTruncated
        >
          Forgot password?
        </Text>
        <Box w="415px" h="43px" left="0" top="27px" position="absolute">
          <InputGroup>
            <Input
              border="1.5px solid #35373B"
              padding="12px"
              bg="transparent"
              placeholder="Enter your password"
              size="lg"
              w="100%"
            />
            <InputRightElement>
              <Image src="/eye.png" padding="12px" alt="show password logo" />
            </InputRightElement>
          </InputGroup>
        </Box>
      </Box>
      <Box w="415px" h="43px" left="24px" top="308px" position="absolute">
        <Button
          w="415px"
          h="43px"
          left="0"
          top="0"
          position="absolute"
          bg="#4A96FF"
          borderRadius="4px"
          onClick={() => router.push('/homeFeed')}
        >
          Login now
        </Button>
      </Box>
      <Text left="24px" top="363px" position="absolute">
        <Text
          as="span"
          color="#7F8084"
          fontSize="14px"
          fontWeight="500"
          isTruncated
        >
          Not registered yet?{" "}
        </Text>
        <Text
          as="span"
          color="#C5C7CA"
          fontSize="14px"
          fontWeight="500"
          cursor="pointer"
          onClick={onRegisterClick}
        >
          Register →
        </Text>
      </Text>
    </Box>
  );
}
