import { clsx } from "clsx";
import { TableList } from "../../../components/table/TableList";

const data = Array(20).fill({
  activity: "家事全般（立位・軽い）",
  calories: 26,
  timeSpent: 10,
});

export const ExcerciseRecords = () => (
  <section
    id="excercise-records"
    className={clsx("w-[960px] h-[264px] mx-auto my-14", "bg-dark-500")}
  >
    <TableList label="MY EXCERCISE" subLabel="2021.05.21" data={data} />
  </section>
);
