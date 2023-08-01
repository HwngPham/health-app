import { clsx } from "clsx";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export interface TableChartProps {
  showHeader?: boolean;
  label?: string;
  subLabel?: string;
  dataSets: any;
  currentDataSet: string;
  width?: number;
  height?: number;
}

export const TableChart = ({
  label,
  showHeader,
  subLabel,
  dataSets,
  currentDataSet,
  width,
  height,
}: TableChartProps) => (
  <>
    {showHeader && (
      <div
        className={clsx(
          "flex items-center",
          "pl-6 pt-4 pb-[2px]",
          "text-white",
        )}
      >
        <p
          className={clsx(
            "w-24",
            "text-secondary text-[15px]",
            "leading-[18px] tracking-[0.15px]",
          )}
        >
          {label}
        </p>
        <p
          className={clsx(
            "text-[22px] font-secondary",
            "leading-[27px] tracking-[0.11px]",
          )}
        >
          {subLabel}
        </p>
      </div>
    )}

    <div className="flex justify-center">
      <ResponsiveContainer width={width} height={height}>
        <LineChart
          data={dataSets[currentDataSet]}
          margin={{ bottom: 8, right: 10, left: 10 }}
        >
          <Tooltip />
          <CartesianGrid
            stroke="#777"
            strokeWidth={1}
            horizontal={false}
            strokeOpacity={1}
          />

          <XAxis
            dataKey="name"
            strokeWidth={0}
            interval="preserveStartEnd"
            tick={<CustomAxisTick />}
          />
          <YAxis padding={{ top: 21, bottom: 14 }} hide />

          <Line
            type="linear"
            dataKey="uv"
            stroke="#FFCC21"
            strokeWidth={3}
            strokeOpacity={1}
          />
          <Line
            type="linear"
            dataKey="pv"
            stroke="#8FE9D0"
            strokeWidth={3}
            strokeOpacity={1}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </>
);

const CustomAxisTick = ({ x, y, payload }: any) => {
  const num: number = parseInt(payload.value);
  const word: string = payload.value.replace(String(num), "");
  const isSingleDigit = String(num).length === 1;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={10} dx={isSingleDigit ? -12 : -20} fill="white">
        {num}
      </text>
      <text x={0} y={0} dy={16} fill="white" transform="scale(0.5)">
        {word}
      </text>
    </g>
  );
};
