import { NextApiRequest, NextApiResponse } from "next";
import { getPosts } from "@utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/xml");

  const posts = await getPosts();

  const postsXMLs = posts.map((post) => {
    return `
    <url>
        <loc>https://www.sarffy.dev/blog/${post.slug}</loc>
        <lastmod>${new Date(post.date).toISOString()}</lastmod>
        <priority>0.80</priority>
    </url>
    `;
  });

  const xml = `
  <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
              http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  
  <url>
    <loc>https://www.sarffy.dev</loc>
    <lastmod>2023-01-31T21:16:00+00:00</lastmod>
    <priority>1.00</priority>
  </url>

  <url>
    <loc>https://www.sarffy.dev/blog</loc>
    <lastmod>2023-01-31T21:16:00+00:00</lastmod>
    <priority>0.90</priority>
  </url>
  
  ${postsXMLs.join("")}
  
  </urlset>
`;

  res.end(xml);
}
