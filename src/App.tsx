import { useState } from "react";

import Logo from "./Logo";

import { Badge, Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";

import { meals, days as initialDays, Meal } from "./initialData";
import "./styles/main.sass";

const MealCard = ({ meal, mt }: { meal: Meal; mt?: number }) => {
  return (
    <Box mx={2} p={1} bg="teal.300" borderRadius="4" pos="relative" mt={mt}>
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
  );
};

function App() {
  const [days, setDays] = useState(initialDays);

  const addMealToDay = (dayName: string, mealId: number) => {
    const newDays = [...days];

    const dayIndex = days.findIndex((day) => day.name === dayName);

    newDays[dayIndex].meals.push(mealId);

    setDays(newDays);
  };

  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
    if (!result.destination) {
      return;
    }

    addMealToDay(result.destination.droppableId, parseInt(result.draggableId));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Flex className="main__wrapper" direction="column" h="100%">
        <Box p={3}>
          <Logo />
        </Box>

        <Droppable
          isDropDisabled
          direction="horizontal"
          droppableId="we will never use you"
        >
          {(provided) => (
            <div ref={provided.innerRef}>
              <Grid
                templateColumns="repeat(5, 1fr)"
                p={4}
                bg="whiteAlpha.500"
                mx={6}
                borderRadius={8}
              >
                {meals.map((meal, index) => (
                  <Draggable
                    key={meal.id}
                    draggableId={`${meal.id}`}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <>
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <MealCard meal={meal} />
                        </div>

                        {snapshot.isDragging && <MealCard meal={meal} />}
                      </>
                    )}
                  </Draggable>
                ))}
              </Grid>
            </div>
          )}
        </Droppable>

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
              <Droppable droppableId={day.name}>
                {(provided) => (
                  <>
                    <div ref={provided.innerRef}>
                      {day.meals.map((mealId) => {
                        const meal = meals.find((meal) => meal.id === mealId);

                        if (!meal) {
                          return null;
                        }

                        return <MealCard meal={meal} mt={6} />;
                      })}
                    </div>

                    {provided.placeholder}
                  </>
                )}
              </Droppable>
            </Box>
          ))}
        </Grid>
      </Flex>
    </DragDropContext>
  );
}

export default App;
