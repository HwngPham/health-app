import { clsx } from "clsx";
import { TableChart } from "../../../components/table/TableChart";
import { ButtonBadge } from "../../../components/button/ButtonBadge";

export const BodyFatChart = () => (
  <section
    id="bodyfat-chart"
    className={clsx("w-[960px] h-[304px] mx-auto", "bg-dark-500")}
  >
    <TableChart label="BODY RECORD" subLabel="2021.05.21" />
    <div className="flex gap-4 ml-8">
      <ButtonBadge>日</ButtonBadge>
      <ButtonBadge>週</ButtonBadge>
      <ButtonBadge>月</ButtonBadge>
      <ButtonBadge isActive>年</ButtonBadge>
    </div>
  </section>
);
