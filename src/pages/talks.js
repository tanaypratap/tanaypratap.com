import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

class TalksIndex extends React.Component {
  showPosts(posts, isDone = false) {
    return posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug
      return (
        <div key={node.fields.slug}>
          <h3
            style={{
              marginBottom: rhythm(1 / 4),
              textDecorationLine: isDone ? 'line-through' : 'none',
            }}
          >
            <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
              {title}
            </Link>
          </h3>
          <small>
            &#128197;{node.frontmatter.date} || 📍{node.frontmatter.venue}
          </small>
          <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      )
    })
  }
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const upcomingTalks = posts.filter(
      ({ node }) => new Date(node.frontmatter.rawDate) > Date.now()
    )
    const doneTalks = posts.filter(
      ({ node }) => new Date(node.frontmatter.rawDate) < Date.now()
    )
    return (
      <Layout
        location={this.props.location}
        title={'Talks'}
        siteTitle={siteTitle}
      >
        <SEO
          title="Talks"
          keywords={[
            `tanaypratap`,
            `portfolio`,
            `full-stack`,
            `javascript`,
            `react`,
          ]}
        />
        <div>
          <h4> Upcoming </h4>
          {this.showPosts(upcomingTalks)}
        </div>
        <div>
          <h4> Done </h4>
          {this.showPosts(doneTalks, true)}
        </div>
        {}
      </Layout>
    )
  }
}

export default TalksIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "talk" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            rawDate: date
            title
            type
            venue
          }
        }
      }
    }
  }
`
