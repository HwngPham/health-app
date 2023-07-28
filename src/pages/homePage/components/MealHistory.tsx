import { CardPhoto } from "../../../components/card/CardPhoto";

const dailyMeals = {
  "05.20": {
    morning: "/images/column-1.jpg",
    lunch: "/images/l03.jpg",
    dinner: "/images/d01.jpg",
    snack: "/images/l01.jpg",
  },
  "05.21": {
    morning: "/images/m01.jpg",
    lunch: "/images/l02.jpg",
    dinner: "/images/d02.jpg",
    snack: "/images/s01.jpg",
  },
};

export const MealHistory = () => (
  <section className="meal-history flex items-center flex-col">
    {Object.entries(dailyMeals).map(([day, meals]) => (
      <Row day={day} meals={meals} />
    ))}
  </section>
);

interface RowProps {
  day: string;
  meals: Record<string, string>;
}
const Row = ({ day, meals }: RowProps) => (
  <div key={day} className="flex gap-2 mb-2">
    {Object.entries(meals).map(([moment, src]) => (
      <div key={String(src)} className="overflow-hidden w-[234px] h-[234px]">
        <CardPhoto label={`${day}.${moment}`} src={src} />
      </div>
    ))}
  </div>
);
