import { clsx } from "clsx";
import { ButtonGradient } from "../../../components/button/ButtonGradient";

const diaries = Array(8).fill({
  time: new Date("2021-05-12 23:25"),
  content: `私の日記の記録が一部表示されます。
  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
});

export const Diaries = () => (
  <section
    id="diary"
    className="flex justify-center flex-col max-w-5xl mx-auto"
  >
    <div>
      <h3
        className={clsx(
          "mx-auto w-full h-8",
          "font-secondary leading-[27px]",
          "text-primary-400 text-left text-[22px] tracking-[0.11px] ",
        )}
      >
        MY DIARY
      </h3>
      <div className="grid grid-cols-4 gap-3 mb-[30px] mx-auto">
        {diaries.map((diary) => (
          <Diary key={String(diary.time)} {...diary} />
        ))}
      </div>

      <div className="mb-48 flex justify-center">
        <ButtonGradient className="w-[296px]">
          自分の日記をもっと見る
        </ButtonGradient>
      </div>
    </div>
  </section>
);

// TODO: move to card calendar
interface DiaryProps {
  time: Date;
  content: string;
}
const Diary = ({ time, content }: DiaryProps) => {
  return (
    <div
      className={clsx(
        "w-[231px] h-[231px]",
        "p-4",
        "border border-2 border-gray-500",
      )}
    >
      <div className="mb-2 h-12 text-lg font-secondary leading-[22px] tracking-[0.09px]">
        <p>{`${time.getFullYear()}.${String(time.getUTCMonth()).padStart(
          2,
          "0",
        )}.${String(time.getDate()).padStart(2, "0")}`}</p>
        <p>{`${time.getHours()}.${time.getMinutes()}`}</p>
      </div>
      <div className="font-primary text-xs tracking-[0.06px] text-primary-400 leading-[17px]">
        {content}
      </div>
    </div>
  );
};
