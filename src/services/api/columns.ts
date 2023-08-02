import { padZero } from "../../utils";

export const getColumnItems = () => [
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

const toDateString = (date: Date): string => {
  return `${date.getFullYear()}.${padZero(date.getUTCMonth())}.${padZero(
    date.getDate(),
  )} ${date.getHours()}.${date.getMinutes()}`;
};
