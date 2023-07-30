import { clsx } from "clsx";

export interface CardPhotoProps {
  src: string;
  label: string;
  info: string;
  tags: string[];
}

export const CardPhoto = ({ src, label, info, tags }: CardPhotoProps) => (
  <div
    className={clsx(
      "relative overflow-hidden",
      "w-[234px] h-[234px] mb-[10px]",
      "text-center",
    )}
  >
    <img src={src} alt="A Meal Photo" className="h-36 w-full" />
    <p
      className={clsx(
        "absolute top-[120px] bg-primary-300",
        "pl-2 py-1 h-6 w-36",
        "font-secondary text-white text-[15px] letter-spacing-[0.15px] text-left leading-[18px]",
      )}
    >
      {label}
    </p>

    <p
      className={clsx(
        "mt-2 h-12",
        "text-left text-primary text-primary-500 text-[15px]",
        "font-light leading-[22px] tracking-[0.075px]",
      )}
    >
      {info}
    </p>

    <p
      className={clsx(
        "text-yellow text-left",
        "font-secondary font-light leading-[22px] tracking-[0.06px]",
      )}
    >
      {tags.map((tag) => (
        <span key={tag} className="mr-2">
          #{tag}
        </span>
      ))}
    </p>
  </div>
);
