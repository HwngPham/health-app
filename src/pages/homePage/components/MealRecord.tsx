import { clsx } from "clsx";
import { IconRing } from "../../../components/icons/iconRing";
import { TableChart } from "../../../components/table/TableChart";
import { GradientMask } from "../../../components/masks/GradientMask";

export interface MealRecordProps {
  data: {
    year: Record<string, any>[];
  };
}

export const MealRecord = ({ data }: MealRecordProps) => {
  return (
    <section
      id="meal-record"
      className="bg-dark-500 flex rounded-none w-[1280px] h-[312px] mx-auto mb-6 relative"
    >
      <img
        src="/images/d01.jpg"
        alt="Top Meal"
        className="w-[540px] object-cover"
      />

      <GradientMask className="absolute" />

      <IconRing className="absolute top-[67px] left-[180px]" />
      <div className="absolute top-[143px] left-[214px] text-white">
        <span className={clsx("text-[18px]", "leading-[22px] font-secondary")}>
          05/21
        </span>
        <span
          className={clsx(
            "font-secondary",
            "text-[25px] text-center",
            "leading-[30px]",
            "pr-[2px]",
          )}
        >
          75%
        </span>
      </div>
      <div className="flex-grow  pt-[12px] pb-[6px]">
        <TableChart
          dataSets={data}
          width={590}
          height={294}
          currentDataSet="year"
        />
      </div>
    </section>
  );
};
