import { IconCup } from "../../../components/icons/IconCup";
import { IconHex } from "../../../components/icons/IconHex";
import { IconKnife } from "../../../components/icons/IconKnife";

const categories = [
  {
    label: "morning",
    icon: IconKnife,
  },
  {
    label: "lunch",
    icon: IconKnife,
  },
  {
    label: "dinner",
    icon: IconKnife,
  },
  {
    label: "snack",
    icon: IconCup,
  },
];

export const MenuCategory = () => (
  <ul className="flex justify-center h-36 gap-[74px] mx-auto w-full">
    {categories.map((category) => (
      <li key={category.label} className="relative cursor-pointer w-[116px]">
        <IconHex className="absolute" />
        <category.icon className="absolute top-7 mx-auto text-center w-[116px]" />
        <p className="absolute capitalize top-20 mx-auto text-center w-[116px] font-secondary text-light">
          {category.label}
        </p>
      </li>
    ))}
  </ul>
);
