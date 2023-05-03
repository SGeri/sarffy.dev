import fs from "fs";
import path from "path";
import { Post } from "../types";

const BLOGS_DIR = path.join(process.cwd(), "src", "pages", "blog");

export default async function getPosts() {
  const posts = await readBlogFiles();

  return sortPosts(posts);
}

async function readBlogFiles(): Promise<Post[]> {
  let fileNames = fs.readdirSync(BLOGS_DIR);

  fileNames = fileNames.filter((filename) => /\.mdx$/.test(filename));
  //fileNames = fileNames.map((filename) => path.join(BLOGS_DIR, filename));

  const tasks = fileNames.map(async (file) => {
    console.log("AAAA", file);
    const {
      options: { title, description, image, date, tags, published },
    } = await import(`../pages/blog/${file}`);

    return {
      published: Boolean(published),
      title,
      description,
      image,
      date,
      tags,
      slug: file.replace(/\.mdx$/, ""),
    };
  });

  const posts = await Promise.all(tasks);

  const publishedPostsTasks = posts.filter((post) => !!post.published);

  return publishedPostsTasks;
}

function sortPosts(posts: Post[]) {
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else if (a.date > b.date) {
      return -1;
    } else {
      return 0;
    }
  });
}
