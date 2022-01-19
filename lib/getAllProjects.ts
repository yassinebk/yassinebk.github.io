import { fetchAPI } from "./api";
import qs from "qs";

const query = qs.stringify(
  {
    populate: "*",
  },
  {
    encodeValuesOnly: true,
  }
);

export const getAllProjects = async () => {

  const posts = await fetchAPI(`projects?${query}`).then((r) => r.data);

  return posts;
};
