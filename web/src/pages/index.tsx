import clsx from "clsx";
import { Fira_Code, Noto_Sans } from "@next/font/google";

const FiraCodeFont = Fira_Code({ weight: "400" });
const NotoSansFont = Noto_Sans({ weight: "700" });

export default function Home() {
  return (
    <>
      <main className="flex flex-col px-8 md:px-24 lg:px-36">
        <section className="items-start mx-auto">
          <h1
            className={clsx(
              "text-xl font-bold text-left text-green-400 py-2",
              FiraCodeFont.className
            )}
          >
            Hello, my name is
          </h1>
          <h2
            className={clsx(
              "text-left text-6xl text-gray-200 py-2 tracking-wide leading-tight",
              NotoSansFont.className
            )}
          >
            SÁRFFY GERGŐ
          </h2>
          <h2 className="font-semibold text-left text-4xl text-gray-400 py-2 max-w-3xl">
            From concept to launch, delivering innovative solutions with
            precision and efficiency.
          </h2>
        </section>
        <section className="tech"></section>
        <section className="references"></section>
        <section className="about"></section>
        <section className="contact"></section>
      </main>
    </>
  );
}
