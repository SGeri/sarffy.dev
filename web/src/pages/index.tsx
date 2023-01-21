import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { FaHammer } from "react-icons/fa";
import { BsDisplay, BsServer } from "react-icons/bs";
import {
  FiraCodeFont,
  FiraCodeBoldFont,
  NotoSansFont,
  NotoSansBoldFont,
} from "@fonts";
import { Card, Button, useTools, ToolTypes, Projects, Tool } from "@components";

// todo: better font for title
// todo: adjust font sizes for mobile

export default function Home() {
  const [tools, toolsType, changeTools] = useTools();

  return (
    <>
      <main className="flex flex-col px-8 md:px-24 lg:px-36 min-h-[75vh] items-center justify-center">
        <section className="flex items-center mx-auto min-h-[75vh]">
          <HeroSection />
        </section>

        <section id="blog" className="min-h-min mx-auto">
          <SectionHeader
            title="Recent posts"
            text="In my blog posts you will find information about my personal projects and experiences, as well as my toolset and development environment. I may also share insights and reflections on other areas of interest in the future."
          />

          <BlogsSection />
        </section>

        <section id="tech" className="min-h-min pt-24">
          <SectionHeader
            title="Technology Stack"
            text="As a full stack developer, my role is to build, test and deploy web applications from start to finish. I work on both front-end and back-end aspects of the application. I handle the deployment and maintenance of the application, making sure it runs smoothly and efficiently. I also communicate with clients to understandtheir requirements, and provide solutions and support throughout the development process. I am also familiar with DevOps methodologies to ensure efficient and robust application delivery."
          />

          <ToolsSection tools={tools} />

          <div className="flex flex-row justify-center gap-6">
            <Button
              rounded="2xl"
              bg={toolsType === ToolTypes.Frontend ? "bg-green-600" : undefined}
              tooltip={ToolTypes.Frontend}
              onClick={() => changeTools(ToolTypes.Frontend)}
            >
              <BsDisplay size={32} color="#cbd5e1" />
            </Button>
            <Button
              rounded="2xl"
              bg={toolsType === ToolTypes.Backend ? "bg-green-600" : undefined}
              tooltip={ToolTypes.Backend}
              onClick={() => changeTools(ToolTypes.Backend)}
            >
              <BsServer size={32} color="#cbd5e1" />
            </Button>
            <Button
              rounded="2xl"
              bg={toolsType === ToolTypes.Devops ? "bg-green-600" : undefined}
              tooltip={ToolTypes.Devops}
              onClick={() => changeTools(ToolTypes.Devops)}
            >
              <FaHammer size={32} color="#cbd5e1" />
            </Button>
          </div>
        </section>

        <section id="references" className="min-h-min pt-24">
          <SectionHeader
            title="Projects"
            text="As a Fullstack Web and DevOps developer, I have experience working with a variety of technologies, but most commonly using the React ecosystem. Some of my past projects include building and maintaining web applications using React with Typescript, as well as implementing continuous integration and deployment pipeline using technologies like Docker, Serverless and AWS Services. I have experience in different project methodologies such as Agile, and have a strong understanding of software development best practices, including version control systems and testing. Additionally, I am experienced in optimizing and scaling web applications to handle different amounts of traffic and data."
          />

          <ProjectsSection />
        </section>

        <section id="about" className=""></section>

        <section id="contact" className=""></section>
      </main>
    </>
  );
}

const SectionHeader = ({ title, text }: { title: string; text: string }) => (
  <>
    <h3
      className={clsx(
        "text-center text-3xl text-green-500 mb-1 font-bold tracking-widest leading-tight",
        FiraCodeBoldFont.className
      )}
    >
      {title}
    </h3>
    <div className="max-w-4xl mx-auto">
      <p
        className={clsx(
          "text-center text-lg text-gray-400 my-5",
          NotoSansFont.className
        )}
      >
        {text}
      </p>
    </div>
  </>
);

const HeroSection = () => (
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
      From concept to launch, delivering innovative solutions with precision and
      efficiency.
    </h2>
  </div>
);

const BlogsSection = () => (
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
);

const ToolsSection = ({ tools }: { tools: Tool[] }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-5">
    {tools.map(({ name, link, icon: Icon }) => (
      <div key={name} className="w-44 h-44 mx-auto">
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
  </div>
);

const ProjectsSection = () => (
  <>
    {Projects.map(
      ({ name, link, project, image, imageAlt, description }, index) => (
        <div key={index} className="grid grid-cols-1 lg:grid-cols-2">
          <Link
            className="transition-all hover:scale-105 cursor-pointer m-10"
            href={link}
          >
            <Image
              src={image}
              alt={imageAlt}
              className="w-full aspect-video border-2 border-cyan-200 rounded"
              width={1920}
              height={1080}
            />
          </Link>

          <div
            className={clsx("flex flex-col justify-center", {
              "lg:-order-1": index % 2 == 1,
            })}
          >
            <Link href={project}>
              <h1
                className={clsx(
                  "text-white text-center text-xl mb-2",
                  FiraCodeBoldFont.className
                )}
              >
                {name}
              </h1>
            </Link>
            <p
              className={clsx(
                "text-gray-400 text-justify text-md lg:text-lg max-w-2xl mx-auto",
                NotoSansFont.className
              )}
            >
              {description}
            </p>
          </div>
        </div>
      )
    )}
  </>
);
