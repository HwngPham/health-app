import { CardRecordCategory } from "../../../components/card/CardRecordCategory";

const categories = [
  {
    label: "body reccord",
    info: "自分のカラダの記録",
    coverImg: "/images/MyRecommend-1.jpg",
  },
  {
    label: "my excercise",
    info: "自分の運動の記録",
    coverImg: "/images/MyRecommend-2.jpg",
  },
  {
    label: "my diary",
    info: "自分の日記",
    coverImg: "/images/MyRecommend-3.jpg",
  },
];

export const RecordCategories = () => (
  <section id="record-categories" className="my-14 flex justify-center gap-12">
    {categories.map((category) => (
      <CardRecordCategory key={category.label} {...category} />
    ))}
  </section>
);
