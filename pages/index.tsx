import { Heading, Stack, Text } from "@chakra-ui/react";
import { PanelTabs } from "../src/components/PanelsTabs";

export const Homepage = () => {
  return (
    <>
      <Heading bg={"pink"} as="h1">
        SandBox test for Chakra UI Tree Shaking
      </Heading>
      <Stack spacing={3}>
        <Text fontSize="6xl">(6xl) In love with React & Next</Text>
        <Text fontSize="6xl">(6xl) In love with React & Next</Text>
      </Stack>
      <PanelTabs />
      <h2>Je suis là</h2>
    </>
  );
};

export default Homepage;
