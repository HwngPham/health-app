import { useEffect, useState } from "react";
import { useClient } from "../../services";
import { BodyFatChart } from "./components/BodyFatChart";
import { Diaries } from "./components/Diaries";
import { ExcerciseRecords } from "./components/ExcerciseRecords";
import { RecordCategories } from "./components/RecordCategories";

export const RecordPage = () => {
  const { getExcercises, getCategories, getDiaries, getBodyRecords } =
    useClient();
  const [excercies, setExcercises] = useState<Record<string, any>[]>([]);
  const [categories, setCategories] = useState<Record<string, any>[]>([]);
  const [diaries, setDiaries] = useState<Record<string, any>[]>([]);
  const [bodyRecords, setBodyRecords] = useState<Record<any, any>>({});

  useEffect(() => {
    getExcercises().then((data) => setExcercises(data));
    getCategories().then((data) => setCategories(data));
    getDiaries().then((data) => setDiaries(data));
    getBodyRecords().then((data) => setBodyRecords(data));
  }, []);

  return (
    <>
      <RecordCategories categories={categories} />
      <BodyFatChart records={bodyRecords} />
      <ExcerciseRecords excercies={excercies} />
      <Diaries diaries={diaries} />
    </>
  );
};
