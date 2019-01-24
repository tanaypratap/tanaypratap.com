import React from 'react';
import Layout from '../components/Layout';
import { rhythm } from '../utils/typography';
import SEO from '../components/seo';
import Bio from '../components/Bio';

class TalksIndex extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title
        return (
            <Layout location={this.props.location} title={"Talks"} siteTitle={siteTitle}>
                <SEO
                    title="All posts"
                    keywords={[`tanaypratap`, `portfolio`, `full-stack`, `javascript`, `react`]}
                />
                <h3
                 style={{ marginBottom: rhythm(1/4)}}>
                 Talk 1
                 </h3>
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
  }
`
