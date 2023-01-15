import Head from "next/head";

export interface MetaProps {
  title?: string;
  description?: string;
}

// TODO: Add extra meta tags for better SEO

export default function Meta({
  title = "sarffy.dev",
  description = "Sárffy Gergő personal portfolio website - Full Stack Web Development",
}: MetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
