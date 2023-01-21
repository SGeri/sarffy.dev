import fs from "fs";
import { Post } from "../types";

const BLOGS_PATH = "../pages/blog/";

export default async function getPosts() {
  const posts = await readBlogFiles();

  return posts;
}

async function readBlogFiles(): Promise<Post[]> {
  // todo use path.join
  let fileNames = fs.readdirSync(
    "E:\\Solutions\\Portfolio\\web\\src\\pages\\blog"
  );

  fileNames = fileNames.filter((filename) => /\.mdx$/.test(filename));

  const tasks = fileNames.map(async (file) => {
    // todo use path.join
    const {
      options: { title, description, image, tags },
    } = await require(`../pages/blog/${file}`);

    return {
      title,
      description,
      image,
      tags,
      slug: file.replace(/\.mdx$/, ""),
    };
  });

  return Promise.all(tasks);
}
