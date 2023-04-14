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

  const tasks = fileNames.map(async (file) => {
    const {
      options: { title, description, image, date, tags },
    } = await import(`../pages/blog/${file}`);

    return {
      title,
      description,
      image,
      date,
      tags,
      slug: file.replace(/\.mdx$/, ""),
    };
  });

  return Promise.all(tasks);
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
