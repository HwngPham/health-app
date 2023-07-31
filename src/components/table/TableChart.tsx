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

const data = [
  { name: "6月", uv: 2400, pv: 2400, top: 3000, bottom: 100 },
  { name: "7月", uv: 2200, pv: 2300, top: 3000, bottom: 0 },
  { name: "8月", uv: 2000, pv: 1800, top: 3000, bottom: 0 },
  { name: "9月", uv: 1800, pv: 2200, top: 3000, bottom: 0 },
  { name: "10月", uv: 1600, pv: 2000, top: 3000, bottom: 0 },
  { name: "11月", uv: 1200, pv: 1800, top: 3000, bottom: 0 },
  { name: "12月", uv: 1000, pv: 1400, top: 3000, bottom: 0 },
  { name: "1月", uv: 1000, pv: 1700, top: 3000, bottom: 0 },
  { name: "2月", uv: 900, pv: 1000, top: 3000, bottom: 0 },
  { name: "3月", uv: 700, pv: 800, top: 3000, bottom: 0 },
  { name: "4月", uv: 400, pv: 600, top: 3000, bottom: 0 },
  { name: "5月", uv: 400, pv: 600, top: 3000, bottom: 0 },
];

export interface TableChartProps {
  label: string;
  subLabel: string;
}
export const TableChart = ({ label, subLabel }: TableChartProps) => (
  <>
    <div
      className={clsx("flex items-center", "pl-6 pt-4 pb-[2px]", "text-white")}
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

    <div className="flex justify-center">
      <ResponsiveContainer width={880} height={210}>
        <LineChart data={data} margin={{ bottom: 8, right: 10, left: 10 }}>
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
