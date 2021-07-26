import Logo from "./Logo";

import "./styles/main.sass";

import { Badge, Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

import { meals, days } from "./initialData";

function App() {
  return (
    <Flex className="main__wrapper" direction="column" h="100%">
      <Box p={3}>
        <Logo />
      </Box>

      <Grid
        templateColumns="repeat(5, 1fr)"
        p={4}
        bg="whiteAlpha.500"
        mx={6}
        borderRadius={8}
      >
        {meals.map((meal) => (
          <Box mx={2} p={1} bg="teal.300" borderRadius="4" pos="relative">
            <Image height={100} src={meal.imageUrl} alt={meal.name} />

            <Box>
              <Text>{meal.name}</Text>

              {meal.tags.map((tag) => (
                <Badge colorScheme="purple" m="1" fontSize="0.5em">
                  {tag}
                </Badge>
              ))}
            </Box>
          </Box>
        ))}
      </Grid>

      <Grid
        templateColumns="repeat(7, 1fr)"
        px={4}
        py={6}
        bg="whiteAlpha.500"
        m={6}
        flex="1"
        display="flex"
        borderRadius={8}
        gap={2}
      >
        {days.map((day) => (
          <Box p={2} bg="whiteAlpha.600" flex={1}>
            {day}
          </Box>
        ))}
      </Grid>
    </Flex>
  );
}

export default App;
