export const loader = () => {
  const siteUrl = import.meta.env.VITE_PUBLIC_SITE_URL;
  const robotText = `
        User-agent: Googlebot
        User-agent: *
        Allow: /
        Sitemap: ${siteUrl}/sitemap.xml`;

  return new Response(robotText, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};
