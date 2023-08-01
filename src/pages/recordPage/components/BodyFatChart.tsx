import { useState } from "react";
import { clsx } from "clsx";
import { TableChart } from "../../../components/table/TableChart";
import { ButtonBadge } from "../../../components/button/ButtonBadge";

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
  month: [
    { name: "1週", uv: 2400, pv: 2400 },
    { name: "2週", uv: 2200, pv: 2300 },
    { name: "3週", uv: 2000, pv: 1800 },
    { name: "4週", uv: 1800, pv: 2200 },
  ],
  week: [
    { name: "1日", uv: 2400, pv: 2400 },
    { name: "2日", uv: 2200, pv: 2300 },
    { name: "3日", uv: 2000, pv: 1800 },
    { name: "4日", uv: 1800, pv: 2200 },
    { name: "5日", uv: 1800, pv: 2200 },
    { name: "6日", uv: 1800, pv: 2200 },
    { name: "7日", uv: 1800, pv: 2200 },
  ],
  day: [
    { name: "1時間", uv: 2000, pv: 2400 },
    { name: "3時間", uv: 1500, pv: 1800 },
    { name: "6時間", uv: 1200, pv: 400 },
    { name: "9時間", uv: 1000, pv: 1000 },
    { name: "12時間", uv: 800, pv: 800 },
    { name: "15時間", uv: 500, pv: 1200 },
    { name: "18時間", uv: 600, pv: 1600 },
    { name: "21時間", uv: 400, pv: 800 },
    { name: "24時間", uv: 100, pv: 400 },
  ],
};

export type DataSetType = "year" | "month" | "week" | "day";

const dataSetTypes = {
  day: "日",
  week: "週",
  month: "月",
  year: "年",
};

export const BodyFatChart = () => {
  const [currentDataSet, setCurrentDataSet] = useState<DataSetType>("year");

  return (
    <section
      id="bodyfat-chart"
      className={clsx("w-[960px] h-[304px] mx-auto", "bg-dark-500")}
    >
      <TableChart
        showHeader
        label="BODY RECORD"
        subLabel="2021.05.21"
        currentDataSet={currentDataSet}
        dataSets={dataSets}
        width={880}
        height={210}
      />
      <div className="flex gap-4 ml-8">
        {Object.entries(dataSetTypes).map(([key, value]) => (
          <ButtonBadge
            key={key}
            isActive={currentDataSet === key}
            onClick={() => setCurrentDataSet(key as DataSetType)}
          >
            {value}
          </ButtonBadge>
        ))}
      </div>
    </section>
  );
};
