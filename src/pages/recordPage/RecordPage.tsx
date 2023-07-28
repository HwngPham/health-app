import { BodyFatChart } from "./components/BodyFatChart";
import { Diaries } from "./components/Diaries";
import { ExcerciseRecords } from "./components/ExcerciseRecords";
import { RecordCategories } from "./components/RecordCategories";

export const RecordPage = () => (
  <>
    <RecordCategories />
    <BodyFatChart />
    <ExcerciseRecords />
    <Diaries />
  </>
);
