export function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://yassinebelkhadem.ninja</loc>
     </url>
     <url>
       <loc>https://yassinebelkhadem.ninja/blog</loc>
     </url>
     ${posts
       .map((post) => {
         return `
       <url>
           <loc>${`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${post.attributes.slug}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}
