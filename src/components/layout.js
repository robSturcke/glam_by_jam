import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./header"
import Navigation from "./navigation"
import "../stylesheets/App.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Navigation />
      <div>
        <main>{children}</main>
        <footer>
          <div className="text-center">
            © All Rights Preserved {new Date().getFullYear()}, Built by
            {` `}
            <a href="https://www.robsturcke.dev">robSturcke</a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
