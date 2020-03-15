import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import React, { Component } from "react"
import $ from "jquery"
import Sidebar from "react-sidebar"
import axios from "axios"

export default class AppSecurity extends Component {
  state = {
    sidebarOpen: false,
    securityData: [],
    isMobile: false,
  }
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open })
  }

  componentWillMount() {
    var self = this

    axios
      .get("https://security4startup.herokuapp.com/appsecurity")
      .then(res => {
        console.log(res.data)
        const data = res.data
        self.setState({
          securityData: data,
        })
      })
  }

  componentDidMount() {
    if (window.innerWidth <= 760) {
      this.setState({ isMobile: true })
    }
  }
  renderControls() {
    var controlsData = []

    this.state.securityData.map((item, index) => {
      const trimmedstring = item.title.replace(/[^a-zA-Z]/g, "")
      const itemTitle = (
        <h2 class="main-heading" id={trimmedstring}>
          {item.title}
        </h2>
      )

      const itemControl = item.controls.map(controlItem => {
        return (
          <>
            <div class="control-content">
              <i
                class="fas fa-check "
                onClick={e => {
                  const domitem = e.target

                  $(domitem).toggleClass("checked")

                  $(domitem)
                    .parent()
                    .removeClass("crossed")
                }}
              ></i>
              <span
                class="control-para"
                onClick={e => {
                  const domitem = e.target
                  $(domitem)
                    .parent()
                    .toggleClass("click")
                  $(domitem)
                    .parent()
                    .next(".control-content")
                    .toggleClass("collapsed")
                }}
              >
                {" "}
                {controlItem.title}
              </span>
              <i
                class="fas fa-times "
                onClick={e => {
                  const domitem = e.target

                  $(domitem)
                    .parent()
                    .toggleClass("crossed")

                  $(domitem)
                    .parent()
                    .find(".fa-check")
                    .removeClass("checked")
                }}
              ></i>
            </div>
            {index === 0 ? (
              <div class="control-content paragraph-container collpasible collapsed generalDesign">
                <h4>Key Practices</h4>
                <ul>
                  {controlItem.list.map(listIte => {
                    return (
                      <li>
                        {listIte.title}. <br /> <p>{listIte.content}</p>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ) : (
              <div class="control-content paragraph-container collpasible collapsed">
                <h4>Recommendations</h4>
                <ul>
                  {controlItem.detail.map(detailItem => {
                    return <li>{detailItem}</li>
                  })}
                </ul>
              </div>
            )}
          </>
        )
      })
      controlsData.push(itemTitle, itemControl)
    })

    return controlsData
  }
  render() {
    // change
    const sidebarContent = (
      <div className="categories">
        {this.state.isMobile ? <img src="/img/logo.webp" alt="" /> : ""}
        <h2>Categories</h2>
        <a href="#GeneralDesignPrinciplesforSecureSoftwareDevelopment">
          General Design Principles for Secure Software Development
        </a>
        <a href="#SecuringWebApplication">Security Web Application</a>
        <a href="#SessionManagement">Secure Session Management</a>
        <a href="#TransportLayerProtection">Transport Layer Protection</a>
        <a href="#SecuringPassword">Securing Password</a>
        <a href="#MobileApplicationSecurity">Mobile Application Security</a>
      </div>
    )
    return (
      <Layout>
        <SEO title="App Security" />

        <div class="page-content control-page appsec">
          <div class="row">
            <div
              id="sidebar"
              class={`${this.state.sidebarOpen ? "" : "sidebar-mar"}`}
            >
              <Sidebar
                docked={false}
                transitions={true}
                touch={true}
                shadow={true}
                pullRight={false}
                sidebar={sidebarContent}
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen.bind(this)}
                styles={{ sidebar: { background: "white" } }}
              ></Sidebar>
            </div>
            <i
              id="sidebar-collapse"
              class="fa fa-bars"
              aria-hidden="true"
              onClick={() => this.onSetSidebarOpen(true)}
            ></i>
            <div class="col-md-3 left-section sm-d-none">
              <div class="categories">{sidebarContent}</div>
            </div>

            <div class="col-md-9 categories-detail">
              <h2 className="main-heading d-none"></h2>
              <h2 id="startups " className="main-heading">
                Product Security Design and Architecture Guidance
              </h2>
              <p>
                A platform or service architecture and design that has taken
                into account security considerations will help improve the
                overall organization security posture. The cost and effort of
                retrofitting security after development are too high. An
                architecture and design review helps Development and Engineering
                teams validate the security-related design features of their
                application or service before starting the development phase.
                This allows us to identify and fix potential vulnerabilities
                before they can be exploited and before the fix requires a
                substantial reengineering effort.
              </p>
              <p>
                The architecture and design review process analyzes the
                architecture and design from a Cyber Security perspective.
                Ideally the design will commence at the earliest possible phase
                of the SDLC. If design artifacts already exist, it should
                facilitate this process nonetheless. Regardless of how
                comprehensive the design documentation, the Development and
                Engineering teams must be able to decompose the application and
                be able to identify key items, including trust boundaries, data
                flow, entry points, and privileged code. Physical deployment
                configuration of the application must also be known. Special
                attention must be given to the design approaches that have been
                adopted for those areas that most commonly exhibit
                vulnerabilities. The guidance provided here will help teams
                develop secure products and services for the organization.
                Logging is important as part of the development process as well
                as providing critical information in the event of an incident.
              </p>
              <p>The guidelines are presented in the following sub-sections:</p>
              <ul>
                <li>
                  General Design Principles for Secure Software Development
                </li>
                <li>Securing Web Application</li>
                <li>Secure Session Management</li>
                <li>Transport Layer Protection</li>
                <li>Securing Password</li>
                <li>Mobile Application Security</li>
              </ul>

              {this.renderControls()}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
