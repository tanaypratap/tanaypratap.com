import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

class Root extends React.Component {
  
  render() {
    const post = this.props.data.markdownRemark
    return (
      <Layout location={this.props.location} title={"home"}
        siteTitle={'tanaypratap.com'}>
        <SEO
          title="home"
          keywords={[
            `tanaypratap`,
            `portfolio`,
            `full-stack`,
            `javascript`,
            `react`,
          ]}
        />
        {/* <h1> This page is getting generated</h1> */}
         <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    )
  }
}

export default Root

export const pageQuery = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/pages/" } }) {
      html
    }
  }
`
