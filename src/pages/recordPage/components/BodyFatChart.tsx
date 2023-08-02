import { useState } from "react";
import { clsx } from "clsx";
import { TableChart } from "../../../components/table/TableChart";
import { ButtonBadge } from "../../../components/button/ButtonBadge";

export type DataSetType = "year" | "month" | "week" | "day";

const dataSetTypes = {
  day: "日",
  week: "週",
  month: "月",
  year: "年",
};

export interface BodyFatCharProps {
  records: Record<DataSetType, any>;
}

export const BodyFatChart = ({ records }: BodyFatCharProps) => {
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
        dataSets={records}
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
