import { fetchAPI } from "./api";
import qs from "qs";



export const getPost = async (slug) => {
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: "*",
    },
    {
      encodeValuesOnly: true,
    }
  );
  console.log(query);
  const post = await fetchAPI(`posts?${query}`).then((r) => r.data[0]);

  return post;
};
