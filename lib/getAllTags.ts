import { fetchAPI } from "./api";
import qs from "qs";

const query = qs.stringify(
  {
    populate: "*",
    sort: ["title:asc"],
  },

  {
    encodeValuesOnly: true,
  }
);

export const getAllTags = async () => {
  const tags = await fetchAPI(`tags?${query}`).then((r) => r.data);
  return tags.filter((t) => {
    return t.attributes.posts.data.length !== 0;
  });
};
