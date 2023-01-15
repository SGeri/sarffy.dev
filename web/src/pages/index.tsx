import clsx from "clsx";
import { Fira_Code } from "@next/font/google";

const FiraCodeFont = Fira_Code({ weight: "400" });

export default function Home() {
  return (
    <>
      <main className="px-8 md:px-16 lg:px-24">
        {/* section that has text that is centered in every aspect */}
        <section className="flex flex-col items-start justify-center">
          <h1
            className={clsx(
              "text-xl font-bold text-left text-green-400 py-2",
              FiraCodeFont.className
            )}
          >
            Hello, my name is
          </h1>
          <h2 className="font-semibold text-left text-6xl text-gray-200 py-2">
            Sárffy Gergő
          </h2>
          <h2 className="font-semibold text-left text-3xl text-gray-400 py-2">
            My passion is fullstack web development
          </h2>
        </section>
      </main>
    </>
  );
}
