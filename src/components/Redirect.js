import React, { Component } from "react"
import { navigate } from "gatsby"
export default class Redirect extends Component {
  componentDidMount() {
    if (!window.location.href.includes("https://www.security4startups.com")) {
      const route =
        "https://www.security4startups.com" + window.location.pathname
      window.location.href = route
      return
    }
    // if (window.location.href.includes("/SDLC")) {
    //   navigate("/sdlc")
    //   return
    // }
    // if (window.location.href.includes("/app-security")) {
    //   navigate("/app_security")
    //   return
    // }
  }

  render() {
    return <>{this.props.children}</>
  }
}
