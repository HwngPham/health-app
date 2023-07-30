import { ButtonGradient } from "../../components/button/ButtonGradient";
import { ColumnCategoryList } from "./components/ColumnCategoryList";
import { ColumnList } from "./components/ColumnList";

export const ColumnPage = () => (
  <>
    <ColumnCategoryList />
    <ColumnList />
    <ButtonGradient className="w-[288px]">コラムをもっと見る</ButtonGradient>
  </>
);
