import axios from "axios";
export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }api/${path}`;
}

const headers = {
  Authorization: `bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
};

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);

  const response = await axios.get(requestUrl, {
    headers,
  });
  return response.data;
}
