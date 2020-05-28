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
      <div className="container mx-auto">
        <main siteDescription={data.site.siteMetadata.description} >{children}</main>
        
        <footer style={{
          margin: '2rem 0 -2rem 0',
          borderTop: '1px solid #242424',
          padding: '1rem 0 0 0',
          textAlign: 'center',
          fontSize: '0.75rem'
        }}
        >
          From the warped mind of &hellip;
          {` `}
          <a href="https://www.mboris.com" style={{textDecoration: 'underline', color: '#000050', fontWeight: 'normal' }}>M. Boris</a>
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
