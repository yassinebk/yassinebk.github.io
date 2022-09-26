import matter from "front-matter";
import path from "path";
import fs from "fs";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export function getDocBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const res = matter(fileContents);
  console.log(res);

  return {
    slug: realSlug,
    meta: {
      ...(res.attributes as any),
      createdAt: null,
      date: ((res.attributes as any).date as Date)
        .toISOString()
        .substring(0, 10),
    },
    content: res.body,
  };
}
