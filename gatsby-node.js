const { graphqlForTalks } = require("./create-pages/create-pages-talks");

const { graphqlForBlogs } = require("./create-pages/create-pages-blogs");
const { createFilePath } = require(`gatsby-source-filesystem`)


function createIndividualPages(actions, graphql) {
  const { createPage } = actions;

  return Promise.all([
    graphqlForBlogs(graphql, createPage),
    graphqlForTalks(graphql, createPage)
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

