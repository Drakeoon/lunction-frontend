import Logo from "./Logo";

import "./styles/main.sass";

import { Box, Flex } from "@chakra-ui/react";

function App() {
  return (
    <Flex className="main__wrapper" direction="column" h="100%">
      <Box p={3}>
        <Logo />
      </Box>

      <Box p={4} bg="whiteAlpha.500" mx={6} h={20} borderRadius={8}>
        Meals will land here
      </Box>

      <Box px={4} py={6} bg="whiteAlpha.500" m={6} flex="1" borderRadius={8}>
        Calendar goes here
      </Box>
    </Flex>
  );
}

export default App;
