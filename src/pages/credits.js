import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import React, { Component } from "react"

export default class Credits extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Credits" />

        <div class="page-content credit-page ">
          <h2 id="startups " class="main-heading mt-4">
            Credits
          </h2>
          <div className="row">
            <div className="col-md-11 mb-5 p-0">
              <p style={{ fontSize: "1.2em" }}>
                S4S is the result of countless hours of ideation and
                contribution of industry-leading security practitioners. We are
                grateful to this group for sharing their knowledge and bringing
                this project to life for the benefit of emerging businesses.
              </p>
              <p style={{ fontSize: "1.2em" }}>
                The development of this site was supported by GGV Capital. Any
                opinions or recommendations expressed in this project are those
                of the authors and do not reflect the views of any company or
                foundation.
              </p>
            </div>
          </div>
          <div className="row">
            <div class="owners">
              <a href="https://www.linkedin.com/in/alghous/" target="_blank">
                <img src="/img/alghous.webp" class="owners-img" alt="..." />
                <div class="owners-detail">
                  <p class="name">Al Ghous</p>
                  <span>CSO/Head of Security, ServiceMax</span>
                </div>
              </a>
            </div>
            <div class="owners">
              <a
                href="https://www.linkedin.com/in/drjoelfulton/"
                target="_blank"
              >
                <img src="/img/joel.webp" class="owners-img" alt="..." />
                <div class="owners-detail">
                  <p class="name">Joel Fulton</p>
                  <span>Chief information Security Officer, Splunk</span>
                </div>
              </a>
            </div>
            <div class="owners">
              <a href="https://www.linkedin.com/in/orenyunger/" target="_blank">
                <img src="/img/oren.webp" class="owners-img" alt="..." />
                <div class="owners-detail">
                  <p class="name">Oren Yunger</p>
                  <span>Investor, GGV Capital</span>
                </div>
              </a>
            </div>
            <div class="owners">
              <a href="https://www.linkedin.com/in/harshil/" target="_blank">
                <img src="/img/harshil.webp" class="owners-img" alt="..." />
                <div class="owners-detail">
                  <p class="name">Harshil Parikh</p>
                  <span>Head of Secuirty, Medallia</span>
                </div>
              </a>
            </div>
            <div class="owners">
              <a
                href="https://www.linkedin.com/in/ralph-pyne-0b5b6b1/"
                target="
            _blank"
              >
                <img src="/img/ralph.webp" class="owners-img" alt="..." />
                <div class="owners-detail">
                  <p class="name">Ralph Pyne</p>
                  <span>Director of Security, NextRoll</span>
                </div>
              </a>
            </div>
            <div class="owners">
              <a
                href="https://www.linkedin.com/in/omer-singer/"
                target="_blank"
              >
                <img src="/img/omer.webp" class="owners-img" alt="..." />
                <div class="owners-detail">
                  <p class="name">Omer Singer</p>
                  <span>Senior Director of Security, Snowflake Computing</span>
                </div>
              </a>
            </div>
            <div class="owners">
              <a
                href="https://www.linkedin.com/in/anshuguptapmp/"
                target="_blank"
              >
                <img src="/img/anshu.webp" class="owners-img" alt="..." />
                <div class="owners-detail">
                  <p class="name">Anshu Gupta</p>
                  <span>Head of Security Engineering</span>
                </div>
              </a>
            </div>
            <div class="owners">
              <a href="https://www.linkedin.com/in/talhatariq/" target="_blank">
                <img src="/img/talha.webp" class="owners-img" alt="..." />
                <div class="owners-detail">
                  <p class="name">Talha Tariq</p>
                  <span>Vice President and CSO, HashiCorp</span>
                </div>
              </a>
            </div>
            <div class="owners">
              <img src="/img/maria.jpg" class="owners-img" alt="..." />
              <div class="owners-detail">
                <p class="name">Maria Cassar</p>
                <span>
                  Chief of Staff to the CISO Splunk
                  <a
                    href="https://www.linkedin.com/in/maria-cassar"
                    target="_blank"
                  ></a>
                </span>
              </div>
            </div>
            <div class="owners">
              <a href="https://www.linkedin.com/in/tsaodavid/" target="_blank">
                <img src="/img/david.webp" class="owners-img" alt="..." />
                <div class="owners-detail">
                  <p class="name">David Tsao</p>
                  <span>VP Security Engineering, Marqueta, Inc</span>
                </div>
              </a>
            </div>
            <div class="owners">
              <a href="https://www.linkedin.com/in/mikemurray/" target="_blank">
                <img src="/img/mike.webp" class="owners-img" alt="..." />
                <div class="owners-detail">
                  <p class="name">Mike Murray</p>
                  <span>Former CSO, Lookout</span>
                </div>
              </a>
            </div>
            <div class="owners">
              <a
                href="https://www.linkedin.com/in/ody-l-5920b61/"
                target="_blank"
              >
                <img src="/img/ody.webp" class="owners-img" alt="..." />
                <div class="owners-detail">
                  <p class="name">Ody Lepescu</p>
                  <span>Head of Security and Compliance, Earnest</span>
                </div>
              </a>
            </div>
            <div class="owners">
              <a
                href="https://www.linkedin.com/in/jonathanjaffe/"
                target="_blank"
              >
                <img src="/img/jonathan.webp" class="owners-img" alt="..." />
                <div class="owners-detail">
                  <p class="name">Jonathan Jaffe</p>
                  <span>Director of Security, People.ai</span>
                </div>
              </a>
            </div>
            <div class="owners">
              <a
                href="https://www.linkedin.com/in/ambercarsonmiller/"
                target="_blank"
              >
                <img src="/img/amber.webp" class="owners-img" alt="..." />
                <div class="owners-detail">
                  <p class="name">Amber Miller</p>
                  <span>Security Program Manager, NextRoll</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
