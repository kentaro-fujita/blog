/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://wisteken.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://wisteken.com/server-sitemap.xml'],
  },
}
