import { clsx } from "clsx";
import { IconRing } from "../../../components/icons/iconRing";
import { TableChart } from "../../../components/table/TableChart";
import { GradientMask } from "../../../components/masks/GradientMask";

const dataSets = {
  year: [
    { name: "6月", uv: 2400, pv: 2400 },
    { name: "7月", uv: 2200, pv: 2300 },
    { name: "8月", uv: 2000, pv: 1800 },
    { name: "9月", uv: 1800, pv: 2200 },
    { name: "10月", uv: 1600, pv: 2000 },
    { name: "11月", uv: 1200, pv: 1800 },
    { name: "12月", uv: 1000, pv: 1400 },
    { name: "1月", uv: 1000, pv: 1700 },
    { name: "2月", uv: 900, pv: 1000 },
    { name: "3月", uv: 700, pv: 800 },
    { name: "4月", uv: 400, pv: 600 },
    { name: "5月", uv: 400, pv: 600 },
  ],
};

export const MealRecord = () => {
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
          dataSets={dataSets}
          width={590}
          height={294}
          currentDataSet="year"
        />
      </div>
    </section>
  );
};
