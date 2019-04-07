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
    mediaLink: 'https://www.linkedin.com/in/tpratap/'
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
  {
    text: 'facebook',
    mediaLink: 'https://facebook.com/prataptanay'
  }
]


function TeamsUrl() {
  return (
    <a
      rel="noopener noreferrer"
      href="https://products.office.com/en-us/microsoft-teams/group-chat-software"
      target="_blank"
    >
      Teams
              </a>
  )
}

function SocialMedia({ text, mediaLink }) {
  return (
    <span>
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
            <div style={{ display: `flex` }}>
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
                Builds {TeamsUrl()} for Microsoft by the day. Learns stuff from Internet by the night. Teaches code to newbies on weekends. Or share knowledge with peers via talks, blogs, conferences, meetups. Sometimes get featured on podasts as well! <br /> Connect with me on the social media tool of your choice.
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
