import React from 'react'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Link } from 'gatsby';

class Index extends React.Component {
  render() {
    return <Layout location={this.props.location}>
        <SEO title="Home" keywords={[`tanaypratap`, `portfolio`, `full-stack`, `javascript`, `react`]} />
        <h3>
          {' '}
          <Link to={'/blogs'}> Blogs </Link>{' '}
        </h3>
        <p>
          {' '}
          I write about React and its ecosystem. I have a habit of sharing
          what I learn, trying to do it more via the written medium.
        </p>
        <h3>
          {' '}
          <Link to={'/talks'}> Talks </Link>{' '}
        </h3>
        <p>
          {' '}
          After doing a series of talks in premier
          educational institutes in India, did some corporate trainings, and
          last year started to speak in JS related conference/meetups.{' '}
        </p>
        <h3>
          {' '}
        <a href="https://github.com/tanaypratap/" target="_blank">Projects</a>
        </h3>
        <p>
          {' '}
        Apart from regular work, I learn and create things in public. My projects can be found on <a href="https://github.com/tanaypratap/" target="_blank">
            Github
          </a>{' '}
        </p>
      </Layout>
  }
}

export default Index