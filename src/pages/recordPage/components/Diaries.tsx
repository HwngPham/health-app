import { clsx } from "clsx";
import { ButtonGradient } from "../../../components/button/ButtonGradient";
import { CardCalendar } from "../../../components/card/CardCalendar";

const diaries = Array(8).fill({
  time: new Date("2021-05-12 23:25"),
  content: `私の日記の記録が一部表示されます。
  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`,
});

export const Diaries = () => (
  <section
    id="diary"
    className="flex justify-center flex-col max-w-[960px] mx-auto"
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
      <div className="flex flex-wrap gap-3 mb-[30px] mx-auto">
        {diaries.map((diary, idx) => (
          <CardCalendar key={idx} {...diary} />
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
