import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

class TopicCollectionsTemplate extends React.Component {

  render() {
    const { pageContext, data } = this.props
    const { tag } = pageContext
    const { edges } = data.allMarkdownRemark
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout
        title={tag}
        siteTitle={siteTitle}
      >
        <SEO
          title={tag}
          keywords={
            [
              `tanaypratap`,
              tag,
            ]
          } />
        {
          edges.map(({ node }) => {
            const { slug } = node.fields
            const title = node.frontmatter.title || tag
            return (
              <div key={slug}>
                <h3 style={{ marginBottom: rhythm(1 / 4) }}>
                  <Link to={slug}>{title}</Link>
                </h3>
                <div style={{ fontWeight: 500 }}>{`[${node.frontmatter.type.toLowerCase()}]`}</div>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })
        }
      </Layout>
    )
  }
}

export default TopicCollectionsTemplate

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            type
          }
        }
      }
    }
  }
`