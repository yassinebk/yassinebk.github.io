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

export const getPost = async (id) => {
  const post = await fetchAPI(`posts/id?${query}`).then((r) => r.data);

  return post;
};
