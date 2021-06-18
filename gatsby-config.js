module.exports = {
  siteMetadata: {
    title: "The Confused",
  },
  plugins: [
    //"gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blogs",
        path: "./src/blogs/",
      },
      __key: "blogs",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "layouts",
        path: "./src/layouts/",
      },
      __key: "layouts",
    },
     {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: "./src/projects/",
      },
      __key: "projects",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "vizpics",
        path: "./src/vizpics/",
      },
      __key: "vizpics",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "templates",
        path: "./src/templates/",
      },
      __key: "templates",
    },
  ],
};
