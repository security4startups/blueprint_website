import React, { Component } from "react"

export default class Redirect extends Component {
  componentDidMount() {
    if (!window.location.href.includes("https://www.security4startups.com")) {
      window.location.href = "https://www.security4startups.com"
      return
    }
    if (
      window.location.href.includes("https://www.security4startups.com/SDLC")
    ) {
      window.location.href = "https://www.security4startups.com/sdlc"
      return
    }
    if (
      window.location.href.includes(
        "https://www.security4startups.com/app-security"
      )
    ) {
      window.location.href = "https://www.security4startups.com/app_security"
      return
    }
  }

  render() {
    return <>{this.props.children}</>
  }
}
