import { ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import Meta, { MetaProps } from "./Meta";
import BlogElements from "./Blog";

export interface BlogPostProps {
  meta?: MetaProps;
  children: ReactNode;
}

const BlogPost = ({ meta, children }: BlogPostProps) => (
  <>
    <Meta {...meta} />

    <MDXProvider components={BlogElements}>
      <main className="flex flex-col px-8 md:px-24 xl:px-80 min-h-[75vh] mt-6">
        {children}
      </main>
    </MDXProvider>
  </>
);

export default BlogPost;
