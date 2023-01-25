// todo make a blog pages list with links
// todo add 2 basic blog posts => about the make of this site (with mdx)

import clsx from "clsx";
import Link from "next/link";
import { Card } from "@components";
import { FiraCodeBoldFont, NotoSansFont } from "@fonts";
import { getPosts } from "@utils";
import { Post } from "@types";

interface BlogProps {
  posts: Post[];
}

export default function Blog({ posts }: BlogProps) {
  return (
    <main className="flex flex-col px-8 md:px-24 lg:px-36 min-h-[75vh] items-center justify-center">
      <h3
        className={clsx(
          "text-center text-3xl text-green-500 mb-1 font-bold tracking-widest leading-tight mt-12",
          FiraCodeBoldFont.className
        )}
      >
        My latest blog posts
      </h3>
      <div className="max-w-4xl mx-auto">
        <p
          className={clsx(
            "text-center text-lg text-gray-400 my-5",
            NotoSansFont.className
          )}
        >
          You can find all my blog posts on the following section. Most of my
          blog posts are about web development, but I also write about other
          topics. Some of the posts are written in Hungarian which is my native
          language. I may also translate them to English in the future if I have
          time. Have fun reading!
        </p>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {posts.map((post, index) => (
            <Link key={index} href={"/blog/" + post.slug}>
              <Card
                title={post.title}
                description={post.description}
                image={post.image}
                imageAlt={`Number ${index + 1} post display image`}
                tags={post.tags}
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();

  return { props: { posts } } as const;
}
