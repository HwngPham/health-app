import { clsx } from "clsx";

export interface CardCalendarProps {
  time: Date;
  content: string;
}
export const CardCalendar = ({ time, content }: CardCalendarProps) => {
  return (
    <div
      className={clsx(
        "w-[231px] h-[231px]",
        "p-4",
        "border border-2 border-gray-500",
      )}
    >
      <div className="mb-2 h-12 text-lg font-secondary leading-[22px] tracking-[0.09px]">
        <p>{`${time.getFullYear()}.${String(time.getUTCMonth()).padStart(
          2,
          "0",
        )}.${String(time.getDate()).padStart(2, "0")}`}</p>
        <p>{`${time.getHours()}.${time.getMinutes()}`}</p>
      </div>
      <div className="font-primary text-xs tracking-[0.06px] text-primary-400 leading-[17px]">
        {content}
      </div>
    </div>
  );
};
