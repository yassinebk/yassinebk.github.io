import path from "path"
import fm from "front-matter";
import fs from "fs"

export const getAllProjects = async () => {


  const fullPath = path.join(process.cwd(), "content", "projects.md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const res: any = fm(fileContents);
  console.log(res);

  return res.attributes.projects.map(p => ({...p, date: p.date.toISOString().substring(0, 10)}));

};
