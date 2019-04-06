const path = require('path');

function createTalkPostsPages(result, createPage) {
  const talkPostTemplate = path.join(__dirname, "../src/templates/talk-post.js");
  const talkPosts = result.data.talks.edges;
  talkPosts.forEach((post, index) => {
    const previous = index === talkPosts.length - 1 ? null : talkPosts[index + 1].node;
    const next = index === 0 ? null : talkPosts[index - 1].node;
    createPage({
      path: post.node.fields.slug,
      component: talkPostTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
}


function graphqlForTalks(graphql, createPage) {
  return graphql(`
      {
        talks: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { type: { eq: "talk" } } } 
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `).then(result => {
    if (result.errors) {
      throw result.errors;
    }
    // Create talkPosts pages.
    createTalkPostsPages(result, createPage);
  });
}
exports.graphqlForTalks = graphqlForTalks;
