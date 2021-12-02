// eslint-disable-next-line no-undef
module.exports = {
  siteUrl: 'https://wisteken.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://wisteken.com/server-sitemap.xml', // <==== Add here
    ],
  },
}
