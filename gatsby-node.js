const { graphqlForTalks } = require("./create-pages/create-pages-talks");

const { graphqlForBlogs } = require("./create-pages/create-pages-blogs");
const { graphqlForTags } = require("./create-pages/create-pages-topic");
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path');

function createIndividualPages(actions, graphql) {
  const { createPage } = actions;

  return Promise.all([
    graphqlForBlogs(graphql, createPage),
    graphqlForBlogs(graphql, createPage, "post"),
    graphqlForTalks(graphql, createPage),
    graphqlForTags(graphql, createPage),
    createPage({
      path: `/`,
      component: path.resolve("./src/templates/root.js"),
      context : {
        slug: "/pages/"
      }
    })
  ])
}

exports.createPages = ({ graphql, actions }) => {
  return createIndividualPages(actions, graphql);
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

