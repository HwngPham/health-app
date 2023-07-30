import clsx from "clsx";
import { CardPhoto } from "../../../components/card/CardPhoto";
import { ButtonGradient } from "../../../components/button/ButtonGradient";

const toDateString = (date: Date): string => {
  return `${date.getFullYear()}.${String(date.getUTCMonth()).padStart(
    2,
    "0",
  )}.${String(date.getDate()).padStart(
    2,
    "0",
  )} ${date.getHours()}.${date.getMinutes()}`;
};

const columnItems = [
  {
    src: "/images/column-1.jpg",
    label: toDateString(new Date("2021-05-17 23:25")),
    info: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    src: "/images/column-2.jpg",
    label: toDateString(new Date("2021-05-17 23:25")),
    info: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    src: "/images/column-3.jpg",
    label: toDateString(new Date("2021-05-17 23:25")),
    info: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    src: "/images/column-4.jpg",
    label: toDateString(new Date("2021-05-17 23:25")),
    info: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    src: "/images/column-5.jpg",
    label: toDateString(new Date("2021-05-17 23:25")),
    info: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    src: "/images/column-6.jpg",
    label: toDateString(new Date("2021-05-17 23:25")),
    info: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    src: "/images/column-7.jpg",
    label: toDateString(new Date("2021-05-17 23:25")),
    info: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    src: "/images/column-8.jpg",
    label: toDateString(new Date("2021-05-17 23:25")),
    info: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["魚料理", "和食", "DHA"],
  },
];

export const ColumnList = () => (
  <section
    id="column-list"
    className={clsx("flex flex-wrap gap-2", "mx-auto w-[960px]")}
  >
    {columnItems.map((item) => (
      <CardPhoto key={item.src} {...item} />
    ))}

    <div className="flex justify-center w-full mt-2">
      <ButtonGradient className="w-[288px]">コラムをもっと見る</ButtonGradient>
    </div>
  </section>
);
