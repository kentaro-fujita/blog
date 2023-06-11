/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.wisteken.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://www.wisteken.com/server-sitemap.xml"],
  },
};
