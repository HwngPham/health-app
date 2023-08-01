import { useState } from "react";
import { MealCategory } from "./components/MealCategory";
import { MealHistory } from "./components/MealHistory";
import { MealRecord } from "./components/MealRecord";

export const HomePage = () => {
  const [mealRecords, setMealRecords] = useState([]);

  return (
    <>
      <MealRecord />
      <MealCategory />
      <MealHistory />
    </>
  );
};
