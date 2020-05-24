/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main siteDescription={data.site.siteMetadata.description} >{children}</main>
        
        <footer style={{
          marginTop: '2rem',
          borderTop: '1px solid #242424',
          paddingTop: '1rem',
          textAlign: 'center',
          fontSize: '0.75rem'
        }}
        >
          From the warped mind of &hellip;
          {` `}
          <a href="https://www.mboris.com" style={{textTransform: "uppercase"}}>M. Boris</a>
          <p>© {new Date().getFullYear()} <em>Classic Pulps Publishing, LLC</em></p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
