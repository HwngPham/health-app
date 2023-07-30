import { clsx } from "clsx";
import { CardCategorySimple } from "../../../components/card/CardCategorySimple";

const columnCategories = [
  {
    label: "RECOMMENDED COLUMN",
    info: "オススメ",
  },
  {
    label: "RECOMMENDED DIET",
    info: "ダイエット",
  },
  {
    label: "RECOMMENDED BEAUTY",
    info: "美容",
  },
  {
    label: "RECOMMENDED HEALTH",
    info: "健康",
  },
];

export const ColumnCategoryList = () => (
  <section
    id="column-category-list"
    className={clsx("flex gap-8", "w-[960px] mx-auto my-14")}
  >
    {columnCategories.map((category) => (
      <CardCategorySimple {...category} />
    ))}
  </section>
);
