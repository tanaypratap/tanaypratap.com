import React from "react"

// Utilities
import kebabCase from "lodash/kebabCase"
import orderBy from "lodash/orderBy"

// Components
import { Link, StaticQuery, graphql } from "gatsby"

const pages = [
  {
    toLink: '/',
    text: 'home'
  },
  {
    toLink: '/talks',
    text: 'talks'
  },
  {
    toLink: '/blogs',
    text: 'blogs'
  }
]

function Topics() {
  return (
    <StaticQuery query={topicQuery} render={(data) => {
      const {
        allMarkdownRemark: { group },
      } = data;
      return (
        <>
          {
            pages.map(({ toLink, text }) => (
              <HeaderLink key={toLink} toLink={toLink} text={text} />
            ))
          }
          {
            orderBy(group, 'totalCount', 'desc')
              .filter(tag => tag.totalCount >= 2)
              .map(tag => (
                <HeaderLink
                  key={tag.fieldValue}
                  toLink={`/${kebabCase(tag.fieldValue)}`}
                  text={tag.fieldValue}
                />
              ))}
        </>
      )
    }} />)
}

function HeaderLink({ toLink, text }) {
  return (
    <span>
      {" | "}
      <Link to={toLink}>
        {text}
      </Link>
      {" | "}
    </span>
  )
}

export default Topics

const topicQuery = graphql`
  query {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
