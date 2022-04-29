// eslint-disable-next-line no-undef
module.exports = {
  siteUrl: 'https://wwww.wisteken.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/search', '/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://www.wisteken.com/server-sitemap.xml'],
  },
}
