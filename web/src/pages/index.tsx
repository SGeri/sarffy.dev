import clsx from "clsx";
import { Fira_Code, Noto_Sans } from "@next/font/google";
import { Card } from "@components";

// todo: better font for title
// todo: adjust font sizes for mobile

const FiraCodeFont = Fira_Code({ weight: "400" });
const FiraCodeBoldFont = Fira_Code({ weight: "600" });
const NotoSansFont = Noto_Sans({ weight: "700" });

export default function Home() {
  return (
    <>
      <main className="flex flex-col px-8 md:px-24 lg:px-36 min-h-[75vh] items-center justify-center">
        <section className="flex items-center mx-auto min-h-[75vh]">
          <div className="items-start justify-center">
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
          </div>
        </section>

        <section id="blog" className="min-h-min my-5 mx-auto">
          <h3
            className={clsx(
              "text-center text-3xl text-green-500 mb-1 font-bold tracking-widest leading-tight",
              FiraCodeBoldFont.className
            )}
          >
            Recent posts
          </h3>
          <div className="max-w-3xl mx-auto">
            <p
              className={clsx(
                "text-center text-lg text-gray-400 mb-5",
                NotoSansFont.className
              )}
            >
              In my blog posts you will find information about my personal
              projects and experiences, as well as my toolset and development
              environment. I may also share insights and reflections on other
              areas of interest in the future.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2">
              {Array(2)
                .fill(null)
                .map((_, index) => (
                  <Card
                    key={index}
                    title="The Coldest Sunset"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
                    image="/images/dummy.webp"
                    imageAlt="Dummy Picture"
                    tags={["#photography", "#travel", "#winter"]}
                    onClick={() => alert("Clicked")}
                  />
                ))}
            </div>
          </div>
        </section>

        <section id="tech" className="min-h-min my-5">
          <h2 className="font-semibold text-left text-4xl text-gray-400 py-2 max-w-3xl">
            From concept to launch, delivering innovative solutions with
            precision and efficiency.
          </h2>{" "}
          <h2 className="font-semibold text-left text-4xl text-gray-400 py-2 max-w-3xl">
            From concept to launch, delivering innovative solutions with
            precision and efficiency.
          </h2>{" "}
          <h2 className="font-semibold text-left text-4xl text-gray-400 py-2 max-w-3xl">
            From concept to launch, delivering innovative solutions with
            precision and efficiency.
          </h2>
        </section>
        <section id="references" className=""></section>
        <section id="about" className=""></section>
        <section id="contact" className=""></section>
      </main>
    </>
  );
}
