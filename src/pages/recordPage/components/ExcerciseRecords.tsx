import { clsx } from "clsx";
import { TableList } from "../../../components/table/TableList";

export interface ExcerciseRecordsProps {
  excercies: Record<string, any>[];
}

export const ExcerciseRecords = ({ excercies }: ExcerciseRecordsProps) => (
  <section
    id="excercise-records"
    className={clsx("w-[960px] h-[264px] mx-auto my-14", "bg-dark-500")}
  >
    <TableList label="MY EXCERCISE" subLabel="2021.05.21" data={excercies} />
  </section>
);
