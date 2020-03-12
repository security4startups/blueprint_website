/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "antd/dist/antd.css" // or 'antd/dist/antd.less'

import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/styles/appSecurity.css"
import "../assets/styles/control.css"
import "../assets/styles/credits.css"
import "../assets/styles/reporting.css"
import "../assets/styles/risk-profile.css"
import "../assets/styles/sdlc.css"
import "../assets/styles/style.css"
import "../assets/styles/zmobile-design.css"
import Navigation from "./Navigation"
import Redirect from "./Redirect"

const Layout = ({ children }) => {
  return (
    <div className="body-wrapper">
      <Navigation />
      <main>{children}</main>
      <Redirect />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
