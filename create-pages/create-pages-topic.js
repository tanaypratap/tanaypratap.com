const path = require("path")
const _ = require("lodash")

function graphqlForTags(graphql, createPage) {

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    // Tag pages:
    const posts = result.data.allMarkdownRemark.edges
    createPagesForTags(createPage, posts);
  });
}


exports.graphqlForTags = graphqlForTags

function createPagesForTags(createPage, posts) {
  const tagTemplate = path.join(__dirname, "../src/templates/topic-collections.js");
  let tags = [];
  // Iterate through each post, putting all found tags into `tags`
  _.each(posts, edge => {
    if (_.get(edge, "node.frontmatter.tags")) {
      tags = tags.concat(edge.node.frontmatter.tags);
    }
  });
  // Eliminate duplicate tags
  tags = _.uniq(tags);
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/${_.kebabCase(tag)}`,
      component: tagTemplate,
      context: {
        tag,
      },
    });
  });
}
