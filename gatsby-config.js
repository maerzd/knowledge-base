module.exports = {
  siteMetadata: {
    title: `knowledge-base`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-emotion", "gatsby-plugin-react-helmet", "gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};