import { useState } from "react";
import { MenuCategory } from "./components/MealCategory";

export const HomePage = () => {
  const [mealRecords, setMealRecords] = useState([]);
  return (
    <>
      <p>HomePage</p>
      <MenuCategory />
    </>
  );
};
