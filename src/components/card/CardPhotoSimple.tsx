import { clsx } from "clsx";

export interface CardPhotoSimpleProps {
  src: string;
  label: string;
  aspectSquare?: boolean;
}

export const CardPhotoSimple = ({ src, label }: CardPhotoSimpleProps) => {
  return (
    <div
      className={clsx(
        "relative overflow-hidden",
        "w-[234px] h-[234px]",
        "text-center",
      )}
    >
      <img
        src={src}
        alt="A Meal Photo"
        className={clsx("absolute", "object-cover h-[105%]")}
      />
      <p
        className={clsx(
          "absolute bottom-0 bg-primary-300",
          "px-2 py-[7px] h-8",
          "font-secondary text-white text-[15px] letter-spacing-[0.15px] text-left leading-[18px]",
        )}
      >
        {label}
      </p>
    </div>
  );
};
