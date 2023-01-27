import Head from "next/head";

export interface MetaProps {
  title?: string;
  description?: string;
}

const pageTags =
  "sárffy, gergő, sárffy gergő, web, developer, development, hiring, developer, freelancer, portfolio, github, projects, references, about me";

export default function Meta({
  title = "Sárffy Gergő | Fullstack Web Developer",
  description = "Sárffy Gergő personal portfolio website - Full Stack Web Development",
}: MetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="robots" content="index,follow" />
      <meta name="exclusiontags" content={pageTags} />
      <meta name="keyword" content={pageTags} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="sarffy.dev" />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
