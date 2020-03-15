import React from "react"
import NavItem from "./NavItem"
import { Link } from "gatsby"
import logo from "../assets/images/s4slogo.png"
class Navigation extends React.Component {
  state = {
    hideNav: false,
    collapsed: false,
  }

  constructor(props) {
    super(props)

    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside)
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside)
    window.addEventListener("resize", this.resize.bind(this))
    this.resize()
  }

  setWrapperRef(node) {
    this.wrapperRef = node
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState(prev => ({
        collapsed: false,
      }))
    }
  }

  resize() {
    this.setState({ hideNav: window.innerWidth <= 760 })
  }

  routes = [
    {
      url: "/",
      title: "welcome",
    },
    {
      url: "/risk-profile",
      title: "risk profile",
    },
    {
      url: "/controls-checklist",
      title: "controls checklist",
    },
  ]

  collapseClicked() {
    this.setState(prev => ({
      collapsed: !prev.collapsed,
    }))
  }

  render() {
    return (
      <>
        {this.state.hideNav ? (
          <div class="mobile-nav" ref={this.setWrapperRef}>
            <div
              className="d-flex text-left"
              onClick={this.collapseClicked.bind(this)}
            >
              <img src={logo} alt="" />
              <span class="brand-logo">
                Security4Startups
                <span>
                  POWERED BY <strong>GGV</strong>CAPITAL
                </span>
              </span>
            </div>
            <ul
              class={`colla ${this.state.collapsed ? "show" : ""}`}
              id="collapseExample"
            >
              {this.routes.map(item => {
                return (
                  <li onClick={this.collapseClicked.bind(this)}>
                    <Link
                      exact
                      to={item.url}
                      activeClassName="active"
                      className="nav-link"
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ) : (
          <nav class="navbar">
            <div class="brand">
              <img src={logo} alt="" />
              <span class="brand-logo">Security4Startups</span>
              <a href="https://www.ggvc.com/" target="_blank">
                POWERED BY <strong>GGV</strong>CAPITAL
              </a>
            </div>
            <div class="nav-content">
              <ul class="nav-list">
                {this.routes.map(item => (
                  <NavItem title={item.title} path={item.url} />
                ))}
                <li
                  onClick={this.collapseClicked.bind(this)}
                  className="d-flex ml-5"
                >
                  <span
                    style={{
                      color: "#096479",
                      fontFamily: "Avenir Next LT Pro Bold",
                      fontSize: "1.2em",
                      padding: "0.5em 0.7em",
                      opacity: "0.7",
                    }}
                  >
                    Join Us:
                  </span>{" "}
                  <a
                    href="http://slack.security4startups.com/"
                    target="_blank"
                    className="nav-link px-0"
                  >
                    <img
                      src="/img/slack-512.webp"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </a>
                  <a
                    href="https://github.com/security4startups/blueprint_2019"
                    target="_blank"
                    className="nav-link pl-2"
                  >
                    <img
                      src="/img/github-logo.svg"
                      alt=""
                      style={{ width: "30px" }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        )}
      </>
    )
  }
}

export default Navigation
