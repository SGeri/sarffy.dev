import { ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import Meta, { MetaProps } from "./Meta";
import BlogElements from "./Blog";

export interface BlogPostProps {
  meta?: MetaProps;
  children: ReactNode;
}

export default function BlogPost({ meta, children }: BlogPostProps) {
  return (
    <>
      <Meta {...meta} />

      <MDXProvider components={BlogElements}>
        <main className="flex flex-col px-8 md:px-24 lg:px-36 min-h-[75vh] mt-6">
          {children}
        </main>
      </MDXProvider>
    </>
  );
}
