/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React, { Component } from "react"

import Redirect from "./src/components/Redirect"
export const wrapRootElement = ({ element }) => {
  return <Redirect>{element}</Redirect>
}
