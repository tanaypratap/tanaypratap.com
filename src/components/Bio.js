import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'

const socialMediaLinks = [
  {
    text: 'twitter',
    mediaLink: 'https://twitter.com/@tanaypratap'
  },
  {
    text: 'linkedin',
    mediaLink: 'https://www.linkedin.com/in/tanaypratap/'
  },
  {
    text: 'github',
    mediaLink: 'https://github.com/tanaypratap'
  },
  {
    text: 'youtube',
    mediaLink: 'https://youtube.com/tanaypratap'
  },
  {
    text: 'instagram',
    mediaLink: 'https://instagram.com/tanaypratap'
  },
  // {
  //   text: 'facebook',
  //   mediaLink: 'https://facebook.com/prataptanay'
  // }
]


function SocialMedia({ text, mediaLink }) {
  return (
    <span key={mediaLink}>
      {" | "}
      <a target="_blank" href={mediaLink}>
        {text}
      </a>
      {" | "}
    </span>
  )
}

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div style={{ marginBottom: rhythm(2.5) }}>
            <div>
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 5,
                  minWidth: 63,
                  minHeight: 63,
                  borderRadius: `100%`,
                  alignSelf: 'center',
                  float: 'left'
                }}
                imgStyle={{ borderRadius: `50%`, marginBottom: `0` }}
              />
              <p>
                Hi! I am Tanay! I work at Microsoft. I spend my time online to help students get a well paying job. I am going to  <strong> place 100+ students</strong> in 2021.
                Follow me to get help or see how I am doing all of it.
            </p>
            </div>
            <div style={{ padding: `${rhythm(1)}` }}>
              <p>
                {
                  socialMediaLinks.map(({ text, mediaLink }) => SocialMedia({ text, mediaLink }))
                }
              </p>
            </div>
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
