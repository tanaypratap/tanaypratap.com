import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div style={{ display: `flex`, marginBottom: rhythm(2.5) }}>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 30,
                minWidth: 50,
                borderRadius: `100%`,
                alignSelf: 'center',
              }}
              imgStyle={{ borderRadius: `50%` }}
            />
            <p>
              <strong>{author}</strong> lives in Bangalore and works @Microsoft,
              he is building{' '}
              <a
                rel="noopener noreferrer"
                href="https://products.office.com/en-us/microsoft-teams/group-chat-software"
                target="_blank"
              >
                Teams
              </a>{' '}
              which is touted as the next generation collaboration tool.{` `}He
              is quite active on{' '}
              <a target="_blank" href={`https://twitter.com/${social.twitter}`}>
                Twitter
              </a>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
