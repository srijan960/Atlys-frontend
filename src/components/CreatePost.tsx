import { Box, Text, Flex } from "@chakra-ui/react";

export function CreatePost() {
  return (
    <Box 
      w="700px" 
      h="223px" 
      bg="#27292D" 
      borderRadius="8px" 
      border="1px #35373B solid" 
      p="20px"
      cursor="pointer"
    >
      <Text color="#C5C7CA" fontSize="18px" fontWeight="500">
        Create post
      </Text>
      <Flex 
        mt="18px" 
        p="20px" 
        bg="#191920" 
        borderRadius="8px" 
        alignItems="center"
      >
        <Flex 
          w="48px" 
          h="48px" 
          bg="#27292D" 
          borderRadius="9999" 
          alignItems="center" 
          justifyContent="center" 
          mr="20px"
        >
          💬
        </Flex>
        <Text color="#7F8084" fontSize="16px" fontWeight="400">
          How are you feeling today?
        </Text>
      </Flex>
      <Box 
        mt="20px" 
        w="111px" 
        h="43px" 
        bg="#4A96FF" 
        borderRadius="4px" 
        textAlign="center" 
        lineHeight="43px"
      >
        <Text color="white" fontSize="16px" fontWeight="500">
          Post
        </Text>
      </Box>
    </Box>
  );
}
