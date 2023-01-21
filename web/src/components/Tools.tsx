import { ElementType, useState } from "react";
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
import { FaAws } from "react-icons/fa";

export const FRONTEND_TOOLS = [
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

export const BACKEND_TOOLS = [
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

export const DEVOPS_TOOLS = [
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

export interface Tool {
  name: string;
  link: string;
  icon: ElementType;
}

export enum ToolTypes {
  Frontend = "Frontend",
  Backend = "Backend",
  Devops = "DevOps & Other",
}

export function useTools() {
  const [tools, setTools] = useState<Tool[]>(FRONTEND_TOOLS);
  const [toolsType, setToolsType] = useState<ToolTypes>(ToolTypes.Frontend);

  const changeTools = (type: ToolTypes) => {
    switch (type) {
      case ToolTypes.Frontend:
        setTools(FRONTEND_TOOLS);
        setToolsType(ToolTypes.Frontend);
        break;

      case ToolTypes.Backend:
        setTools(BACKEND_TOOLS);
        setToolsType(ToolTypes.Backend);
        break;

      case ToolTypes.Devops:
        setTools(DEVOPS_TOOLS);
        setToolsType(ToolTypes.Devops);
        break;
    }
  };

  return [tools, toolsType, changeTools] as const;
}
