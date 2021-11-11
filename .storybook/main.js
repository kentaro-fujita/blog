module.exports = {
  stories: ['../src/stories/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  // webpackFinal: (config) => {
  //   return {
  //     ...config,
  //     node: {
  //       ...config.node,
  //       fs: 'empty',
  //     },
  //   }
  // },
  typescript: { reactDocgen: 'react-docgen' },
}
