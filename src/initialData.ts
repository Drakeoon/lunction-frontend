export interface Meal {
  id: number;
  name: string;
  ingredients: object;
  calories: number;
  macro: {
    carbs: number;
    protein: number;
    fat: number;
  };
  tags: Array<string>;
  imageUrl: string;
}

export const meals: Array<Meal> = [
  {
    id: 1,
    name: "Carbonara",
    ingredients: {
      milk: {
        unit: "ml",
        amount: 200,
      },
      pasta: {
        unit: "grams",
        amount: 150,
      },
    },
    calories: 800,
    macro: {
      carbs: 100,
      protein: 80,
      fat: 30,
    },
    tags: ["food", "healthy", "yummy"],
    imageUrl: "http://placeimg.com/640/360/carbonara",
  },
  {
    id: 2,
    name: "Chicken",
    ingredients: {
      milk: {
        unit: "ml",
        amount: 200,
      },
      pasta: {
        unit: "grams",
        amount: 150,
      },
    },
    calories: 800,
    macro: {
      carbs: 100,
      protein: 80,
      fat: 10,
    },
    tags: ["tasty"],
    imageUrl: "http://placeimg.com/640/360/chicken",
  },
];

export const days = [
  {
    name: "monday",
    meals: [1, 1],
  },
  {
    name: "tuesday",
    meals: [],
  },
  {
    name: "wednesday",
    meals: [1],
  },
  {
    name: "thursday",
    meals: [],
  },
  {
    name: "friday",
    meals: [2],
  },
  {
    name: "saturday",
    meals: [],
  },
  {
    name: "sunday",
    meals: [],
  },
];
