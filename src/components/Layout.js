import React from 'react'
import { Link } from 'gatsby'

import Topics from '../components/Topics'

import { rhythm, scale } from '../utils/typography'
import Bio from './Bio'

function buttonDownForm() {
  return (
    <div>
      <p>
        {' '}
        Subsciribing would make it easy to stay connected. I don't spam. 
      </p>
      <iframe src="https://tanaypratap.substack.com/embed" 
      width="100%" 
      height="250px" 
      style={{ borderRadius: "0.25rem", background: "white"}}
      frameborder="0" scrolling="no">

      </iframe>
    </div>
  )
}

class Layout extends React.Component {
  render() {
    const { location, title, children, siteTitle } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    const isSecondLevelPath = () => {
      return location.pathname.split('/').length == 2
    }
    const header = (
      <React.Fragment>
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {siteTitle}
          </Link>
        </h3>
        <h2
          style={{
            ...scale(1),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          {title}
        </h2>
      </React.Fragment>
    )
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {/* {header} */}
        {/* <Topics /> */}
        {children}
        <footer>
          <hr />
          {buttonDownForm()}
          {/* <div style={{ padding: `${rhythm(1)}` }}>
            <Topics />
          </div> */}
          <hr />
          <Bio />
          <div>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a rel="noopener noreferrer" href="https://www.gatsbyjs.org">
              Gatsby
            </a>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
