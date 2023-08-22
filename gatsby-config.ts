import type { GatsbyConfig } from "gatsby";
import {config as dotenvConfig} from 'dotenv';

dotenvConfig();


const config: GatsbyConfig = {
  siteMetadata: {
    title: `netlify-test`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  // graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      accessToken: process.env.IS_PREVIEW === "true" ? process.env.CONTENTFUL_PREVIEW_TOKEN: process.env.CONTENTFUL_DELIVERY_TOKEN,
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      host: process.env.IS_PREVIEW === "true" ? "preview.contentful.com" : "cdn.contentful.com"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp"]
};

export default config;
