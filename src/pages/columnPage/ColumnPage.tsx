import { useEffect, useState } from "react";
import { ColumnCategoryList } from "./components/ColumnCategoryList";
import { ColumnItemType, ColumnList } from "./components/ColumnList";
import { useClient } from "../../services";

export const ColumnPage = () => {
  const { getColumnItems } = useClient();
  const [columnItems, setColumnItems] = useState<Record<ColumnItemType, any>[]>(
    [],
  );

  useEffect(() => {
    getColumnItems().then((data) => setColumnItems(data));
  }, []);

  return (
    <>
      <ColumnCategoryList />
      <ColumnList items={columnItems} />
    </>
  );
};
