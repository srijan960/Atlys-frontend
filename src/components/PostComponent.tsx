import { Box, Text, Image, HStack, Flex } from "@chakra-ui/react";

interface PostProps {
  imgSrc: string;
  name: string;
  time: string;
  commentCount: number;
  children: React.ReactNode;
}

export function Post({
  imgSrc,
  name,
  time,
  commentCount,
  children,
}: PostProps) {

  return (
    <Box
      w="700px"
      h="250px"
      bg="#27292D"
      borderRadius="8px"
      border="1px #35373B solid"
      p="20px"
      cursor="pointer"
      position="relative"
   
    >
      <HStack spacing="20px" justifyContent="space-between">
        <Flex>
          <Image w="44px" h="44px" borderRadius="9999" src={imgSrc} />
          <Box ml="20px">
            <Text color="#C5C7CA" fontSize="16px" fontWeight="500">
              {name}
            </Text>
            <Text color="#7F8084" fontSize="14px" fontWeight="500">
              {time}
            </Text>
          </Box>
        </Flex>
      </HStack>
      <Box mt="18px" p="20px" bg="#191920" borderRadius="8px">
        <Text color="#7F8084" fontSize="16px" fontWeight="400">
          {children}
        </Text>
      </Box>
      <HStack mt="18px" spacing="10px">
        <Image src="/chatBubble.png" />
        <Text color="#7F8084" fontSize="14px" fontWeight="500">
          {commentCount} comments
        </Text>
      </HStack>

    </Box>
  );
}
