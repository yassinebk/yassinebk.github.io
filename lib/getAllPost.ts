import fs from "fs";
import frontMatter from "front-matter";
import path from "path";
async function readFromFile(file: string): Promise<string | null> {
  return new Promise((resolve, reject) => {
    fs.readFile(file, { flag: "r", encoding: "utf8" }, function (err, data) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

export const getAllPosts = async () => {
  const postsFiles = fs.readdirSync(
    path.join(process.cwd(), "content", "posts")
  );

  let postsArray = [];
  const promises = postsFiles.map(async (FilePath) => {
    // get back an array of promises
    console.log("File Path :" + FilePath);
    const fileContent: string = await readFromFile(
      path.join(process.cwd(), "content", "posts", FilePath)
    );

    const { attributes }: any = frontMatter(fileContent);
    console.log(fileContent, attributes);

    return {
      title: attributes.title,
      tags: attributes.tags,
      slug: FilePath.replace(".md", ""),
      date: ((attributes as any).date as Date).toISOString().substring(0, 10),
      coverImageLarge: attributes["cover-image-large"],
      coverImageSmall: attributes["cover-image-small"],
    };
  });
  const posts = await Promise.all(promises);

  const tags = [];
  posts.forEach((p) => {
    (p as any).tags.forEach((t: string) => {
      if (!tags.includes(t)) tags.push(t);
    });
  });
  console.log(posts);

  return { tags, posts };
};
