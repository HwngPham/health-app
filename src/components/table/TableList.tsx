import { clsx } from "clsx";

export interface TableListProps {
  label: string;
  subLabel: string;
  data: Record<string, any>[];
}

export const TableList = ({ label, subLabel, data }: TableListProps) => {
  return (
    <>
      <div
        className={clsx("flex items-center", "pl-6 pt-4 pb-1", "text-white")}
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

      <div className="px-6 pb-6">
        <div className="overflow-x-hidden overflow-y-scroll pr-8 h-48">
          <ul className="columns-2 gap-x-10">
            {data.map(({ activity, calories, timeSpent }) => (
              <li
                className={clsx(
                  "h-[40px] mb-2 pb-[2px] flex pr-3",
                  "border-b-[1px] border-gray-400 rounded-none",
                  "before:content-['●'] before:text-white before:text-[5px] before:font-light",
                  "before:pr-2 before:pt-2 before:leading-[7px]",
                )}
              >
                <div className="flex flex-col">
                  <p
                    className={clsx(
                      "text-[15px] text-white leading-[22px] tracking-[0.075px]",
                      "font-primary font-light",
                    )}
                  >
                    {activity}
                  </p>
                  <p
                    className={clsx(
                      "font-secondary text-primary-300",
                      "tracking-[0.075px] leading-[18px]",
                    )}
                  >
                    {calories}kcal
                  </p>
                </div>
                <p
                  className={clsx(
                    "font-secondary font-light",
                    "text-primary-300 text-[15px] text-right",
                    "tracking-[0.075px] leading-[22px]",
                    "flex-grow",
                  )}
                >
                  {timeSpent} min
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
