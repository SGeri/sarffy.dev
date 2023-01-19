import clsx from "clsx";
import { Fira_Code, Noto_Sans } from "@next/font/google";
import Link from "next/link";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiReactrouter,
  SiTailwindcss,
  SiMaterialui,
  SiCss3,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { Card } from "@components";

// todo: better font for title
// todo: adjust font sizes for mobile
// todo: divide into smaller components for sections

const FiraCodeFont = Fira_Code({ weight: "400" });
const FiraCodeBoldFont = Fira_Code({ weight: "600" });
const NotoSansFont = Noto_Sans({ weight: "400" });
const NotoSansBoldFont = Noto_Sans({ weight: "700" });

const Tools = [
  {
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
    icon: SiTypescript,
  },
  {
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: SiJavascript,
  },
  {
    name: "Next.js",
    link: "https://nextjs.org/",
    icon: SiNextdotjs,
  },
  {
    name: "React",
    link: "https://reactjs.org/",
    icon: SiReact,
  },
  {
    name: "React Native",
    link: "https://reactnative.dev/",
    icon: TbBrandReactNative,
  },
  {
    name: "Redux",
    link: "https://redux.js.org/",
    icon: SiRedux,
  },
  {
    name: "Redux Router",
    link: "https://reactrouter.com/",
    icon: SiReactrouter,
  },
  {
    name: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: SiCss3,
  },
  {
    name: "Tailwind CSS",
    link: "https://tailwindcss.com/",
    icon: SiTailwindcss,
  },
  {
    name: "Material UI",
    link: "https://material-ui.com/",
    icon: SiMaterialui,
  },
];

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
                NotoSansBoldFont.className
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

        <section id="blog" className="min-h-min mx-auto mb-24">
          <h3
            className={clsx(
              "text-center text-3xl text-green-500 mb-1 font-bold tracking-widest leading-tight",
              FiraCodeBoldFont.className
            )}
          >
            Recent posts
          </h3>
          <div className="max-w-4xl mx-auto">
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

        <section id="tech" className="min-h-min mb-24">
          <h3
            className={clsx(
              "text-center text-3xl text-green-500 mb-1 font-bold tracking-widest leading-tight",
              FiraCodeBoldFont.className
            )}
          >
            Technology Stack
          </h3>
          <div className="max-w-4xl mx-auto">
            <p
              className={clsx(
                "text-center text-lg text-gray-400 my-5",
                NotoSansFont.className
              )}
            >
              As a full stack developer, my role is to build, test and deploy
              web applications from start to finish. I work on both front-end
              and back-end aspects of the application. I handle the deployment
              and maintenance of the application, making sure it runs smoothly
              and efficiently. I also communicate with clients to understand
              their requirements, and provide solutions and support throughout
              the development process. I am also familiar with DevOps
              methodologies to ensure efficient and robust application delivery.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-5">
            {Tools.map(({ name, link, icon: Icon }) => (
              <div key={name} className="w-44 h-44">
                <Link
                  href={link}
                  className="w-full h-full flex flex-col justify-center items-center rounded-2xl navbar transition-all hover:scale-[1.15] cursor-pointer mx-auto"
                >
                  <Icon size={92} color="#64748b" />
                  <p
                    className={clsx(
                      "text-lg text-slate-500 m-2",
                      NotoSansFont.className
                    )}
                  >
                    {name}
                  </p>
                </Link>
              </div>
            ))}

            {/* Create Accordion component & add backend tools with devops category */}
          </div>
        </section>
        <section id="references" className=""></section>
        <section id="about" className=""></section>
        <section id="contact" className=""></section>
      </main>
    </>
  );
}
