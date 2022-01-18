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

export const getAllPosts = async () => {
  const posts = await fetchAPI(`posts?${query}`).then((r) => r.data);

  return posts;
};
