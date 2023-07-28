import { useState } from "react";
import { MealCategory } from "./components/MealCategory";
import { MealHistory } from "./components/MealHistory";

export const HomePage = () => {
  const [mealRecords, setMealRecords] = useState([]);

  return (
    <>
      <p>HomePage</p>
      <MealCategory />
      <MealHistory />
    </>
  );
};
