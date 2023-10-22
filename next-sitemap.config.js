/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://wisteken.com',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml', '/search', '/pages/*'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://wisteken.com/server-sitemap.xml'],
  },
}
