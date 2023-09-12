import { CreatePost } from "@/components/CreatePost";
import LoginModal from "@/components/LoginModal";
import { Post } from "@/components/PostComponent";
import SignUpModal from "@/components/SignUpModal";
import { Box, Text, VStack } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import { useState } from "react";

export default function HomeFeed() {
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);

  const handleSignUpOpen = () => {
    setSignUpOpen(true);
  };

  const handleSignUpClose = () => {
    setSignUpOpen(false);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleSignUpToLogin = () => {
    setSignUpOpen(false);
    setLoginOpen(true);
  };

  const handleRegisterClick = () => {
    setLoginOpen(false); 
    setSignUpOpen(true); 
  };

  return (
    <>
    <Global
    styles={css`
      body {
        background-color: #131319;
      }
    `}
  />
    <Box
      w="100vw"
      h="100vh"
      bg="#131319"
      px="370px"
      py="50px"
      onClick={handleSignUpOpen}
    >
      <SignUpModal isOpen={isSignUpOpen} onClose={handleSignUpClose}  onLoginClick={handleSignUpToLogin} />
      <LoginModal isOpen={isLoginOpen} onClose={handleLoginClose} onRegisterClick={handleRegisterClick} />
      <Text color="#C5C7CA" fontSize="28px" fontWeight="500" mb="5">
        Hello Jane
      </Text>
      <Text color="#7F8084" fontSize="16px" fontWeight="400" w="580px" mb="5">
        How are you doing today? Would you like to share something with the
        community 🤗
      </Text>
      <CreatePost />
      <VStack spacing={4} align="start" mt="5">
        <Post
          imgSrc="/User1.png"
          name="Theresa Webb"
          time="5mins ago"
          commentCount={24}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Post>
        <Post
          imgSrc="/User2.png"
          name="Marvin McKinney"
          time="8mins ago • Edited"
          commentCount={24}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Post>
      </VStack>
    </Box>
    </>
  );
}
