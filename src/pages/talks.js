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
            <Link to={node.fields.slug}>{title}</Link>
          </h3>
          {node.frontmatter.event && !node.frontmatter.eventURL && (
            <h5 style={{ margin: '2rem 0rem 0.5rem' }}>
              {node.frontmatter.event}
            </h5>
          )}
          {node.frontmatter.event && node.frontmatter.eventURL && (
            <h5 style={{ margin: '2rem 0rem 0.5rem' }}>
              <a
                rel="noopener noreferrer"
                href={node.frontmatter.eventURL}
                target="_blank"
              >
                {node.frontmatter.event}
              </a>
            </h5>
          )}
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
    let upcomingTalks = posts
      .filter(({ node }) => new Date(node.frontmatter.rawDate) > Date.now())
      .sort(
        ({ node: talkA }, { node: talkB }) =>
          new Date(talkA.frontmatter.rawDate) -
          new Date(talkB.frontmatter.rawDate)
      )
    const doneTalks = posts
      .filter(({ node }) => new Date(node.frontmatter.rawDate) < Date.now())
      .sort(
        ({ node: talkA }, { node: talkB }) =>
          new Date(talkB.frontmatter.rawDate) -
          new Date(talkA.frontmatter.rawDate)
      )
    return (
      <Layout
        location={this.props.location}
        title={'talks'}
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
        <hr />
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
            event
            eventURL
          }
        }
      }
    }
  }
`
