import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import React, { Component } from "react"
import Sidebar from "react-sidebar"
import logo from "../assets/images/s4slogo.png"
// test deployment
export default class index extends Component {
  state = {
    sidebarOpen: false,
    isMobile: false,
  }

  onSetSidebarOpen(open) {
    console.log("button clicked")
    this.setState({ sidebarOpen: open })
  }

  smoothScroll(e) {
    document.querySelector(e.target.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  }

  componentDidMount() {
    if (window.innerWidth <= 760) {
      this.setState({ isMobile: true })
    }
  }

  render() {
    const sidebarContent = (
      <div className="categories">
        {this.state.isMobile ? <img src={logo} alt="" /> : ""}
        <h2> Navigation </h2>
        <a href="#about" onClick={this.smoothScroll.bind(this)}>
          {" "}
          About this guide{" "}
        </a>
        <a href="#goals" onClick={this.smoothScroll.bind(this)}>
          {" "}
          Goals{" "}
        </a>{" "}
        <a href="#audience" onClick={this.smoothScroll.bind(this)}>
          {" "}
          Audience{" "}
        </a>
        <a href="#structure" onClick={this.smoothScroll.bind(this)}>
          {" "}
          Structure{" "}
        </a>
        <a href="#theexpected" onClick={this.smoothScroll.bind(this)}>
          {" "}
          Expected takeaways{" "}
        </a>
        <a href="#contact" onClick={this.smoothScroll.bind(this)}>
          {" "}
          Contact us{" "}
        </a>
        <a href="#getStarted" onClick={this.smoothScroll.bind(this)}>
          {" "}
          Get Started{" "}
        </a>
      </div>
    )
    return (
      <Layout>
        <SEO
          title="Security 4 Startups"
          description="Security 4 Startups Cyber Security for Startup"
        />

        <div className="page-content">
          <div className="row">
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
              onClick={this.onSetSidebarOpen.bind(this, true)}
            ></i>
            <div className="col-md-3 left-section sm-d-none">
              {sidebarContent}
            </div>
            <div className="col-md-9 categories-detail">
              <h2 id="about">About this guide</h2>
              <p>
                The Security 4 Startups (“S4S”) was designed by a working group
                of investors and small, mid, and large-corporation CISOs. Its
                purpose is to empower startups with reasonable security controls
                that are intelligently applied and have a favorable cost-effect
                ratio. Simply put: S4S strives to help early stage startups
                solve for their greatest security risks, in a balanced way, and
                in a manner that’s sustainable and doesn’t demand great security
                expertise. While S4S will not solve every security
                vulnerability, it provides a solid baseline addressing the most
                common and important security challenges companies face and will
                provide a solid starting point from which companies can grow
                their security program.
              </p>
              <p>
                Open-source vision: The S4S is an open-source project that is
                managed by the core group, but accepts changes and additions
                from the community. It will be updated periodically.
              </p>
              <h2 id="startups"> Startups and security: Bridging the gaps </h2>
              <p>
                Small deposits wisely invested accrue compound interest. This is
                true of action and inaction regarding cybersecurity. Though
                security is generally perceived as important, not all early
                stage startups address it. Why? Because investing in security is
                not perceived as urgent, but costly and difficult to maintain.
              </p>{" "}
              <p>
                Nonetheless, accepting the risk of a cybersecurity event through
                inaction is statistically likely to be catastrophic to a
                startup, even at a very early stage:
              </p>
              <ul>
                <li>
                  The U.S National Cyber Security Alliance found that 60 percent
                  of small companies are unable to sustain their businesses over
                  six months after a cyber attack
                </li>
                <li>
                  According to the Ponemon Institute, the average security
                  breach cost for small businesses stands at $2.7M
                </li>
              </ul>
              <p>
                Startups that invest in their security posture can expect to
                reap the following benefits:
              </p>
              <ul>
                <li>
                  Drive sales by addressing the needs of small and large
                  companies alike
                </li>
                <li>
                  Protect future revenue estimates by reducing liability from
                  breaches
                </li>
                <li>
                  Defend company brand and reputation by avoiding negative media
                  mentions
                </li>
                <li>Comply with laws and regulations</li>
              </ul>
              <p>
                To help startups take security action in a structured and
                cost-effective way, we put Security 4 Startups together.
              </p>
              <h2 id="goals">Goals</h2>
              <p>
                The working group had several objectives in putting S4S
                together:
              </p>
              <ul>
                <li>
                  Create a usable, detailed and technical document for founders
                  and early stage executives to empower them to address
                  security, before hiring a head of security
                </li>
                <li>
                  Provide visibility into the considerations and expectations of
                  security practitioners as they evaluate new technologies for
                  their companies, bridging the gap between how startups and
                  cybersecurity executives view security risks
                </li>
                <li>
                  Accompany the recommendations with a survey to elicit
                  suggestions for improvement and utility
                </li>
                <li>
                  Be relevant to any startup, and available free of charge to
                  all
                </li>
              </ul>
              <h2 id="audience">Audience</h2>
              <p>
                This guide will be most useful to Technical founders / Technical
                leadership of a startup at either a) Pre-seed / seed stage or b)
                Series A+ stages.
              </p>
              <h2 id="structure">Structure</h2>
              <ul>
                <li>
                  As startups vary in resources, we divide the guidelines
                  between seed and early stages (1-100 people)
                </li>
                <li>
                  The guidelines start from security concerns founders should
                  address, then cover controls they could implement as they
                  integrate security into the company and product
                </li>
              </ul>
              <h2 id="theexpected">The expected takeaways of this guide</h2>
              <ul>
                <li>
                  Learn about security measures that are cheap to implement and
                  easy to maintain
                </li>
                <li>
                  Comprehend customers’ concerns from security and privacy
                  perspectives
                </li>
                <li>Prepare for potential regulatory requirements</li>
                <li>Build security in, not after, with a focus on execution</li>
              </ul>
              <h2 id="disclaimer">Disclaimer</h2>
              <p>
                The opinions contained in S4S are provided for general
                information purposes only and do not constitute legal or other
                professional advice on any matter, nor shall they be relied on
                or treated as such legal or other professional advice in any
                manner or under any circumstances. S4S writers do not accept any
                responsibility for any loss which may arise from reliance on
                S4S. Cybersecurity as well as technology, law, and regulation
                are complex, frequently-changing domains with far-reaching
                consequences. You should consult with qualified professionals
                who are fully aware of your startup’s particular circumstances
                before you make any decision or take any action. The tools
                mentioned in the guidelines are provided as examples for
                cost-effective solutions for the specific control. These
                solutions are not to be considered best in class. S4S core
                members were not influenced by direct relationships with any
                vendors in putting the suggestions in the guide together.
              </p>
              <h2 id="contact">Contact us</h2>
              <ul>
                <li>
                  You're invited to the{" "}
                  <a target="_blank" href="http://slack.security4startups.com/">
                    S4S Slack channel
                  </a>{" "}
                  to interact with like-minded community members as well as
                  security professionals
                </li>
                <li>
                  As an open-source project, the S4S initiative strives to get
                  better from suggestions and ideas shared by the community.
                  Please feel free to suggest your ideas and improvements via
                  our{" "}
                  <a
                    target="_blank"
                    href="https://github.com/security4startups/"
                  >
                    GitHub repository
                  </a>
                </li>
                <li>
                  Security 4 Startups was created by a group of security
                  professionals. To learn more visit our{" "}
                  <Link to="/credits">Credits page</Link>
                </li>
              </ul>
              <h2 id="founderguide">
                Risk profile: guiding questions to get started
              </h2>
              <p>
                To navigate to the guidelines most suited to your specific use
                case, please start with answering a few guiding questions
              </p>
              <button className="btn blue-action-btn" id="getStarted">
                <Link to="/risk-profile">LET'S GO!</Link>
              </button>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
