import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import Bio from './Bio';

class Layout extends React.Component {
  render() {
    const { location, title, children, siteTitle } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    const isSecondLevelPath = () => {
      return location.pathname.split("/").length == 2
    }

    let header

    // For first page
    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1),
            marginBottom: rhythm(1),
            marginTop: 0,
            fontWeight: 600,
            fontSize: '2rem'
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            TANAY<span style={{ fontWeight: 300 }}>PRATAP</span>.COM
          </Link>
        </h1>
      )
    } 
    // For second level pages /blogs, /talks etc.
    else if (isSecondLevelPath()) {
      header = (
        <React.Fragment>
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {siteTitle}
            </Link>
          </h3>
          <h2 style={{ ...scale(1), marginBottom: rhythm(1.5), marginTop: 0, fontWeight: 600 }}>
            <Link style={{ boxShadow: `none`, textDecoration: `none`, color: `inherit` }} to={`/`}>
              {title}
            </Link>
          </h2>
        </React.Fragment>
        )
    }
    else { // for third level pages /some-random-blog
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
        <footer>
          <hr/>
          <Bio />
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
