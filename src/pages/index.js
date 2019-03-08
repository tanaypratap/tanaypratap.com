import React from 'react'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

class Index extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO
          title="Home"
          keywords={[
            `tanaypratap`,
            `portfolio`,
            `full-stack`,
            `javascript`,
            `react`,
          ]}
        />
        <h2>
          {' '}
          <Link to={'/blogs'}> Blogs </Link>{' '}
        </h2>
        <p>
          {' '}
          I write about React and its ecosystem. I have a habit of sharing what
          I learn, trying to do it more via the written medium.
        </p>
        <h3>
          {' '}
          <Link to={'/talks'}> Talks </Link>{' '}
        </h3>
        <p>
          {' '}
          Whether it's college grads, corporate tech training, regular JS/React
          meetups or hot shot international conference. I am your guy! I will
          talk about things which I am very passionate about in the most
          intersting way possible! I promise!{' '}
        </p>

        <h3>
          {' '}
          <a href="https://youtube.com/tanaypratap"> Online Courses </a>{' '}
        </h3>
        <p>
          Join the community of tech enthusiasts, learning how to code, make and
          host their first website with me. Be part of the coding revolution{' '}
        </p>
        <p>
          {' '}
          <a href="https://www.youtube.com/watch?v=C_R6dvU4820&list=PLzvhQUIpvvuj9nN70USkHJrrSeQ9aiqdB">
            Start programming with vanillaJS
          </a>{' '}
        </p>
        <p>
          <a href="https://www.youtube.com/watch?v=oUO3-XQAEsY&list=PLzvhQUIpvvug-c-bExl_xFcopeQi_sa29">
            Learn HTML/CSS by creating your portfolio
          </a>{' '}
        </p>
        <p>
          {' '}
          <a href="https://www.youtube.com/watch?v=Qz5_ccyusbg&list=PLzvhQUIpvvuhBNrOVqlhRnhDqz8ob6MeW">
            Get your tech questions answered in live AMAs
          </a>
        </p>

        <h3>
          {' '}
          <a href="https://github.com/tanaypratap/" target="_blank">
            Projects
          </a>
        </h3>
        <p>
          {' '}
          Apart from regular work, I learn and create things in public. My
          projects can be found on{' '}
          <a href="https://github.com/tanaypratap/" target="_blank">
            Github.
          </a>{' '}
          If you feel like collaborating with me on any project, ping me on any
          of the channels.
        </p>
      </Layout>
    )
  }
}

export default Index
