import { Heading, Center, Text } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

export const Homepage = () => {
  return (
    <>
      <ChakraProvider>
        <Center m="6" w="full" flexDirection="column">
          <Heading as="h1" color="blue.400">
            SandBox test for Chakra UI Tree Shaking
          </Heading>
          <Text fontSize="xl" color="green.200">
            In love with React & Next
          </Text>
        </Center>
      </ChakraProvider>
    </>
  );
};

export default Homepage;
