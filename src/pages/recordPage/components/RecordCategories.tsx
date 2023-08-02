import { CardCategory } from "../../../components/card/CardCategory";

export interface RecordCategoriesProps {
  categories: Record<"label" | "info" | "coverImg", string>[];
}

export const RecordCategories = ({ categories }: RecordCategoriesProps) => (
  <section id="record-categories" className="my-14 flex justify-center gap-12">
    {categories.map((category) => (
      <CardCategory key={category.label} {...category} />
    ))}
  </section>
);
