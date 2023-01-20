import { useState } from "react";
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
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGraphql,
  SiFirebase,
  SiRedis,
  SiLinux,
  SiNginx,
  SiDocker,
  SiPortainer,
  SiGithub,
  SiCloudflare,
  SiDigitalocean,
  SiVercel,
  SiWordpress,
  SiTrello,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { BsDisplay, BsServer } from "react-icons/bs";
import { FaHammer, FaAws } from "react-icons/fa";
import { Card, Button } from "@components";

// todo: better font for title
// todo: adjust font sizes for mobile
// todo: divide into smaller components for sections

const FiraCodeFont = Fira_Code({ weight: "400" });
const FiraCodeBoldFont = Fira_Code({ weight: "600" });
const NotoSansFont = Noto_Sans({ weight: "400" });
const NotoSansBoldFont = Noto_Sans({ weight: "700" });

const FrontendTools = [
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

const BackendTools = [
  {
    name: "NodeJS",
    link: "https://nodejs.org/en/",
    icon: SiNodedotjs,
  },
  {
    name: "NestJS",
    link: "https://nestjs.com/",
    icon: SiNestjs,
  },
  {
    name: "Express",
    link: "https://expressjs.com/",
    icon: SiExpress,
  },
  {
    name: "MongoDB",
    link: "https://www.mongodb.com/",
    icon: SiMongodb,
  },
  {
    name: "MySQL",
    link: "https://www.mysql.com/",
    icon: SiMysql,
  },
  {
    name: "PostgreSQL",
    link: "https://www.postgresql.org/",
    icon: SiPostgresql,
  },
  {
    name: "Redis",
    link: "https://redis.io/",
    icon: SiRedis,
  },
  {
    name: "GraphQL",
    link: "https://graphql.org/",
    icon: SiGraphql,
  },
  {
    name: "Firebase",
    link: "https://firebase.google.com/",
    icon: SiFirebase,
  },
  {
    name: "AWS Services",
    link: "https://aws.amazon.com/",
    icon: FaAws,
  },
];

const DevopsTools = [
  {
    name: "Linux",
    link: "https://www.linux.org/",
    icon: SiLinux,
  },
  {
    name: "Nginx",
    link: "https://www.nginx.com/",
    icon: SiNginx,
  },
  {
    name: "Docker",
    link: "https://www.docker.com/",
    icon: SiDocker,
  },
  {
    name: "Portainer",
    link: "https://www.portainer.io/",
    icon: SiPortainer,
  },
  {
    name: "GitHub",
    link: "https://github.com/",
    icon: SiGithub,
  },
  {
    name: "Cloudflare",
    link: "https://www.cloudflare.com/",
    icon: SiCloudflare,
  },
  {
    name: "Vercel",
    link: "https://vercel.com/",
    icon: SiVercel,
  },
  {
    name: "DigitalOcean",
    link: "https://www.digitalocean.com/",
    icon: SiDigitalocean,
  },
  {
    name: "Wordpress",
    link: "https://wordpress.com/",
    icon: SiWordpress,
  },
  {
    name: "Trello",
    link: "https://trello.com/",
    icon: SiTrello,
  },
];

const enum ToolTypes {
  Frontend = "Frontend",
  Backend = "Backend",
  Devops = "DevOps & Other",
}

export default function Home() {
  const [toolsSection, setToolsSection] = useState<ToolTypes>(
    ToolTypes.Frontend
  );

  let toolsToShow: typeof FrontendTools = [];

  switch (toolsSection) {
    case ToolTypes.Frontend:
      toolsToShow = FrontendTools;
      break;
    case ToolTypes.Backend:
      toolsToShow = BackendTools;
      break;
    case ToolTypes.Devops:
      toolsToShow = DevopsTools;
      break;
  }

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
            {toolsToShow.map(({ name, link, icon: Icon }) => (
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
          </div>

          <div className="flex flex-row justify-center gap-6">
            <Button
              rounded="2xl"
              bg={
                toolsSection === ToolTypes.Frontend ? "bg-green-600" : undefined
              }
              tooltip={ToolTypes.Frontend}
              onClick={() => setToolsSection(ToolTypes.Frontend)}
            >
              <BsDisplay size={32} color="#cbd5e1" />
            </Button>
            <Button
              rounded="2xl"
              bg={
                toolsSection === ToolTypes.Backend ? "bg-green-600" : undefined
              }
              tooltip={ToolTypes.Backend}
              onClick={() => setToolsSection(ToolTypes.Backend)}
            >
              <BsServer size={32} color="#cbd5e1" />
            </Button>
            <Button
              rounded="2xl"
              bg={
                toolsSection === ToolTypes.Devops ? "bg-green-600" : undefined
              }
              tooltip={ToolTypes.Devops}
              onClick={() => setToolsSection(ToolTypes.Devops)}
            >
              <FaHammer size={32} color="#cbd5e1" />
            </Button>
          </div>
        </section>

        <section id="references" className="">
          <h3
            className={clsx(
              "text-center text-3xl text-green-500 mb-1 font-bold tracking-widest leading-tight",
              FiraCodeBoldFont.className
            )}
          >
            Projects
          </h3>
          <div className="max-w-4xl mx-auto">
            <p
              className={clsx(
                "text-center text-lg text-gray-400 my-5",
                NotoSansFont.className
              )}
            >
              As a Fullstack Web and DevOps developer, I have experience working
              with a variety of technologies, but most commonly using the React
              ecosystem. Some of my past projects include building and
              maintaining web applications using React with Typescript, as well
              as implementing continuous integration and deployment pipeline
              using technologies like Docker, Serverless and AWS Services. I
              have experience in different project methodologies such as Agile,
              and have a strong understanding of software development best
              practices, including version control systems and testing.
              Additionally, I am experienced in optimizing and scaling web
              applications to handle different amounts of traffic and data.
            </p>
          </div>
        </section>
        <section id="about" className=""></section>
        <section id="contact" className=""></section>
      </main>
    </>
  );
}
