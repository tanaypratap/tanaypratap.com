import React from 'react'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Link } from 'gatsby';

class Index extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          title="All posts"
          keywords={[`tanaypratap`, `portfolio`, `full-stack`, `javascript`, `react`]}
        />
        <Bio />
        See my...
        <h3> <Link to={"/blog"}> Blogs </Link>  </h3>
        <h3> <Link to={"/talks"}> Talks </Link> </h3>
        <h3> <Link to={"/projects"}> Projects </Link> </h3>
        
      </Layout>
    )
  }
}

export default Index