import { clsx } from "clsx";

export interface CardCategorySimpleProps {
  label: string;
  info: string;
}

export const CardCategorySimple = ({
  label,
  info,
}: CardCategorySimpleProps) => (
  <div
    className={clsx(
      "bg-dark-600 w-[216px] h-36",
      "px-2 pt-6 pb-[22px]",
      "flex flex-col items-center",
      "cursor-pointer",
    )}
  >
    <p
      className={clsx(
        "text-center text-primary-300",
        "font-secondary text-[22px] leading-[27px] tracking-[0.11px]",
      )}
    >
      {label}
    </p>
    <hr className="w-14 mt-[10px] mb-2" />
    <p
      className={clsx(
        "text-center text-lg text-white",
        "font-primary font-thin leading-[26px]",
      )}
    >
      {info}
    </p>
  </div>
);
