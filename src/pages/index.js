import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

class Index extends React.Component {
  render() {
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
        
      </Layout>
    )
  }
}

export default Index
