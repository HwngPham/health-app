import { useEffect, useState } from "react";
import { MealCategory } from "./components/MealCategory";
import { MealHistory } from "./components/MealHistory";
import { MealRecord } from "./components/MealRecord";
import { useClient } from "../../services";

export const HomePage = () => {
  const { getBodyRecords, getMealHistories } = useClient();
  const [records, setRecords] = useState<Record<"year", any>>({ year: [] });
  const [meals, setMealHistories] = useState<Record<string, any>>({});

  useEffect(() => {
    getBodyRecords().then((data) => setRecords(data));
    getMealHistories().then((data) => setMealHistories(data));
  }, []);

  return (
    <>
      <MealRecord data={records} />
      <MealCategory />
      <MealHistory meals={meals} />
    </>
  );
};
