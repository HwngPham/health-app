import { getBodyRecords } from "./api/bodyRecords";
import { getCategories } from "./api/categories";
import { getColumnItems } from "./api/columns";
import { getDiaries } from "./api/diaries";
import { getExcercises } from "./api/exerciseRecords";
import { getMealHistories } from "./api/mealHistories";

// Rest client mock
export const useClient = () => {
  return {
    getExcercises: () => Promise.resolve(getExcercises()),
    getCategories: () => Promise.resolve(getCategories()),
    getDiaries: () => Promise.resolve(getDiaries()),
    getBodyRecords: () => Promise.resolve(getBodyRecords()),
    getColumnItems: () => Promise.resolve(getColumnItems()),
    getMealHistories: () => Promise.resolve(getMealHistories()),
  };
};
