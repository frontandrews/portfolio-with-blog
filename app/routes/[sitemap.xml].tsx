import type { LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async () => {
  const siteUrl = import.meta.env.VITE_PUBLIC_SITE_URL;

  const lastModifiedBlogDate = new Date().toISOString();
  const lastModifiedProjectDate = new Date().toISOString();

  const content = `
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
      <loc>${siteUrl}/</loc>
      <lastmod>2022-11-12T16:43:34.833Z</lastmod>
      </url>
      <url>
      <loc>${siteUrl}/blog</loc>
      <lastmod>${lastModifiedBlogDate}</lastmod>
      </url>
      <url>
      <loc>${siteUrl}/projects</loc>
      <lastmod>${lastModifiedProjectDate}</lastmod>
      </url>
      </urlset>
      `;

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'xml-version': '1.0',
      encoding: 'UTF-8',
    },
  });
};
