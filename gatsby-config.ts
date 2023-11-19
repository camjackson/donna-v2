import type { GatsbyConfig, PluginRef } from 'gatsby';

const fontPlugin: PluginRef = {
  resolve: `gatsby-omni-font-loader`,
  options: {
    enableListener: true,
    preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
    web: [
      {
        name: `Lato`,
        file: `https://fonts.googleapis.com/css?family=Lato:300,400,600`,
      },
    ],
  },
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Donna Comfort`,
    siteUrl: `https://donnacomfort.com`,
  },
  graphqlTypegen: true,
  plugins: ['gatsby-plugin-postcss', fontPlugin],
};

export default config;
