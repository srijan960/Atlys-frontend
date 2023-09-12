import { LoginComponent } from "@/components/LoginComponent";
import { Box, Image } from "@chakra-ui/react";

export default function Login() {
  return (
    <Box
  w="100vw"
  h="100vh"
  pt="195px"
  pb="196px"
  pl="488px"
  pr="489px"
  bg="#131319"
  flexDirection="column"
  justifyContent="center"
  alignItems="center"
  gap="49px"
  display="flex"
>
      <Box
        w="40px"
        h="40px"
        position="relative"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        display="flex"
      >
        <Image w="31.70px" h="32.46px" src="/Logo.png" />
      </Box>
      <LoginComponent/>
    </Box>
  );
}
