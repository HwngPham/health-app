import { BodyFatChart } from "./components/BodyFatChart";
import { Diary } from "./components/Diary";
import { ExcerciseRecords } from "./components/ExcerciseRecords";
import { RecordCategories } from "./components/RecordCategories";

export const RecordPage = () => (
  <>
    <RecordCategories />
    <BodyFatChart />
    <ExcerciseRecords />
    <Diary />
  </>
);
