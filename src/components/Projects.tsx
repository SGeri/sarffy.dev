export const Projects = [
  {
    name: "CT3T - Modern Web Stack",
    link: "https://github.com/SGeri/ct3t",
    project: "https://github.com/SGeri/ct3t",
    image: "/images/t3-bg.webp",
    imageAlt: "CT3T Background",
    description:
      "The CT3T Stack is a newer version of T3 that includes additional tools and solutions used in everyday web and mobile development. Without being exhaustive, the best features of the T3 stack can be summarized by its focus on type-safety, i.e. strictly typed code and end-to-end security. All points of the project use Typescript and communication with the backend is done using tRPC instead of REST. This ensures that we don't have to redefine the backend type interfaces on the client side, instead the client uses Typescript magic to infer types from backend procedures.",
  },
  {
    name: "Forródrót",
    link: "https://forrodrot.com/",
    project: "https://github.com/SGeri/forrodrot",
    image: "/images/forrodrot_preview.png",
    imageAlt: "Forródrót Preview",
    description: `I developed "Forródrót" - a web application that collects and organizes strikes and disobedience events within the education sector of Hungary. Built using Next.js with server-side rendering, the project utilizes TypeScript and a Postgres database with Prisma as the ORM. The project integrates with Google Sheets, and uses Material-UI as the design library. React-query and NextAuth were also implemented to handle state management and user authentication for the authors. The goal was to provide a centralized location for the public to stay informed about the issues facing the education system, and support the teachers and other education staff.`,
  },
  {
    name: "KFG Substitutions",
    link: "https://github.com/kfg-substitutions/web",
    project: "https://github.com/kfg-substitutions/web",
    image: "/images/kfg-substitutions_preview.png",
    imageAlt: "KFG Substitutions Preview",
    description: `I developed a web application for a local high school to replace their outdated substitution table system with a new, more user-friendly and easily administered version. Utilizing Next.js for server-side rendering, the project was built with TypeScript and incorporated AWS DynamoDB as the database, with Vercel as the deployment platform and CI system. The design was implemented with Mantine as the UI framework. The goal of the project was to improve the design and control of the substitution table system for the school's administration and staff.`,
  },
];
