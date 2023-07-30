import { clsx } from "clsx";

export interface CardCategoryProps {
  label: string;
  info: string;
  coverImg: string;
}

export const CardCategory = ({ label, info, coverImg }: CardCategoryProps) => (
  <div className="bg-primary-300 w-[288px] h-[288px] p-6 cursor-pointer">
    <div className="bg-black h-full">
      <div
        className="h-full relative flex flex-col gap-2 justify-center items-center"
        style={{
          backgroundImage: `url(${coverImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute w-full h-full bg-black bg-opacity-75" />
        <p
          className={clsx(
            "text-opacity-100",
            "font-secondary uppercase",
            "text-2xl leading-[30px] text-primary-300",
            "z-10",
          )}
        >
          {label}
        </p>
        <p
          className={clsx(
            "w-40 h-6 z-10",
            "font-primary font-light leading-5",
            "text-center text-light text-sm",
            "bg-yellow",
          )}
        >
          {info}
        </p>
      </div>
    </div>
  </div>
);
