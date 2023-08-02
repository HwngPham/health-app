import { ButtonGradient } from "../../../components/button/ButtonGradient";
import { CardPhotoSimple } from "../../../components/card/CardPhotoSimple";

export interface MealHistoryProps {
  meals: Record<string, any>;
}

export const MealHistory = ({ meals }: MealHistoryProps) => (
  <section id="meal-history" className="flex items-center flex-col">
    {Object.entries(meals).map(([day, meals]) => (
      <Row key={day} day={day} meals={meals} />
    ))}

    <ButtonGradient className="w-[296px] mt-7 mb-48">
      記録をもっと見る
    </ButtonGradient>
  </section>
);

interface RowProps {
  day: string;
  meals: Record<string, string>;
}
const Row = ({ day, meals }: RowProps) => (
  <div className="flex gap-2 mb-2">
    {Object.entries(meals).map(([moment, src]) => (
      <div key={String(src)} className="overflow-hidden w-[234px] h-[234px]">
        <CardPhotoSimple label={`${day}.${moment}`} src={src} />
      </div>
    ))}
  </div>
);
