const path = require('path');

function createBlogPostsPages(result, createPage) {

  const blogPostTemplate = path.join(__dirname, `../src/templates/blog-post.js`);
  const blogPosts = result.data.blogs.edges;
  blogPosts.forEach((post, index) => {
    const previous = index === blogPosts.length - 1 ? null : blogPosts[index + 1].node;
    const next = index === 0 ? null : blogPosts[index - 1].node;
    createPage({
      path: post.node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
}

function graphqlForBlogs(graphql, createPage, type = "blog") {
  return graphql(`
      {
       blogs: allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { type: { eq: "${type}" } } } 
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
    // Create blogPosts pages.
    createBlogPostsPages(result, createPage);
  });
}
exports.graphqlForBlogs = graphqlForBlogs;


