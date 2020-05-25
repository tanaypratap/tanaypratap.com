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
        If you like what you just read, consider subscribing, new content will
        be delivered to your inbox.. :)
        <br />
        ...no spams, whatsoever, I promise!
      </p>
      <form
        style={{
          border: '1px solid #ccc',
          padding: '3px',
          textAlign: 'center',
        }}
        action="https://tinyletter.com/tanaypratap"
        method="post"
        target="popupwindow"
        onsubmit="window.open('https://tinyletter.com/tanaypratap', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
      >
        <p>
          <label for="tlemail">Enter your email address</label>
        </p>
        <p>
          <input
            type="text"
            style={{ width: '140px' }}
            name="email"
            id="tlemail"
          />
        </p>
        <input type="hidden" value="1" name="embed" />
        <input type="submit" value="Subscribe" />
        <p>
          <a href="https://tinyletter.com" target="_blank">
            powered by TinyLetter
          </a>
        </p>
      </form>
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
        {header}
        <Topics />
        {children}
        <footer>
          <hr />
          {buttonDownForm()}
          <div style={{ padding: `${rhythm(1)}` }}>
            <Topics />
          </div>
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
