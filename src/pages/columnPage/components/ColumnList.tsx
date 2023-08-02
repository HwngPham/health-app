import clsx from "clsx";
import { CardPhoto } from "../../../components/card/CardPhoto";
import { ButtonGradient } from "../../../components/button/ButtonGradient";

export type ColumnItemType = "src" | "label" | "info" | "tags";

export interface ColumnListProps {
  items: Record<ColumnItemType, any>[];
}

export const ColumnList = ({ items }: ColumnListProps) => (
  <section
    id="column-list"
    className={clsx("flex flex-wrap gap-2", "mx-auto w-[960px]")}
  >
    {items.map((item) => (
      <CardPhoto key={item.src} {...item} />
    ))}

    <div className="flex justify-center w-full mt-2">
      <ButtonGradient className="w-[288px]">コラムをもっと見る</ButtonGradient>
    </div>
  </section>
);
