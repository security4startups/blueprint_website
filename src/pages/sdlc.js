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
    isMobile: false,
  }
  onSetSidebarOpen(open) {
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
        {this.state.isMobile ? <img src="/img/logo.png" alt="" /> : ""}
        <h2>Categories</h2>
        <a href="#purpose" onClick={this.smoothScroll.bind(this)}>
          Purpose
        </a>
        <a href="#scope" onClick={this.smoothScroll.bind(this)}>
          Scope
        </a>
        <a href="#sdlctrack" onClick={this.smoothScroll.bind(this)}>
          SDLC Tracks
        </a>
        <a href="#security" onClick={this.smoothScroll.bind(this)}>
          Developer Security Training
        </a>
        <a href="#review" onClick={this.smoothScroll.bind(this)}>
          Design/Architecture Review
        </a>
        <a href="#threat" onClick={this.smoothScroll.bind(this)}>
          Threat Modeling
        </a>
        <a href="#userstory" onClick={this.smoothScroll.bind(this)}>
          Security User Stories/Security Requirements
        </a>
        <a href="#dynamic" onClick={this.smoothScroll.bind(this)}>
          Automated Dynamic Application Security Testing
        </a>
        <a href="#static" onClick={this.smoothScroll.bind(this)}>
          Automated Static Application Security Testing
        </a>
        <a href="#opensource" onClick={this.smoothScroll.bind(this)}>
          Open Source Software Security Testing
        </a>
        <a href="#incident" onClick={this.smoothScroll.bind(this)}>
          Update Incident Response Plan
        </a>
        <a href="#pentest" onClick={this.smoothScroll.bind(this)}>
          Penetration Testing
        </a>
      </div>
    )
    return (
      <Layout>
        <SEO title="SDLC" />

        <div class="page-content sdlc-page">
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
              <h2 id="startups " class="main-heading mb-5">
                SECURE SOFTWARE DEVELOPMENT LIFECYCLE (SDLC)
              </h2>

              <h2 class="main-heading" id="purpose">
                Purpose
              </h2>
              <p>
                This procedure establishes Secure Development Life Cycle (SDLC)
                guidelines for development teams. The Security Standard, on
                which this procedure is based, establishes organizational
                direction for product safety, quality and reliability, with the
                goal of reducing security risk exposure for and its customers.
              </p>
              <h2 class="main-heading" id="scope">
                Scope
              </h2>
              <p>
                This procedure applies to all software products developed by and
                also to related integration efforts involving commercial or open
                source software. Additional scope clarification is available in.
              </p>

              <h2 class="main-heading" id="sdlctrack">
                SDLC Tracks
              </h2>
              <p>
                The Secure Development Life Cycle follows Microsoft’s “SDL for
                Agile” framework, with a few notable exceptions that are called
                out in this document. Not every task in the Agile process is
                represented as an SDLC track in this procedure, but every track
                corresponds to a set of activities in the Agile process.
              </p>
              <div class="breadcrumbs">
                <div class="row">
                  <div class="col-md-2 p-1">
                    <div class="breadcrumb-itm w-100">
                      <div class="breadcrumb-title">TRAINING</div>
                      <div class="breadcrumb-text">
                        <ul>
                          <li>Developer Security Training</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2 p-1">
                    <div class="breadcrumb-itm w-100">
                      <div class="breadcrumb-title">REQUIREMENTS</div>
                      <div class="breadcrumb-text">
                        <ul>
                          <li>Review Design and User Stories</li>
                          <li>Provide Security Design Input</li>
                          <li>Establish Security User Stories</li>
                          <li>Finalize With Team</li>
                          <li>Input into Tool(i.e,Jira)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2 p-1">
                    <div class="breadcrumb-itm w-100">
                      <div class="breadcrumb-title">DESIGN</div>
                      <div class="breadcrumb-text">
                        <ul>
                          <li>Perform Attack Surface Analysis</li>
                          <li>Establish Threat Model</li>
                          <li>Check into Git</li>
                          <li>Update security User Stories</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2 p-1">
                    <div class="breadcrumb-itm w-100">
                      <div class="breadcrumb-title">IMPLEMENTATION</div>
                      <div class="breadcrumb-text">
                        <ul>
                          <li>Run Automated SAST</li>
                          <li>API:Import Defects into Bug Tracking Tool</li>
                          <li>Assign Defects</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2 p-1">
                    <div class="breadcrumb-itm w-100">
                      <div class="breadcrumb-title">VERIFICATION</div>
                      <div class="breadcrumb-text">
                        <ul>
                          <li>Run Automated DAST</li>
                          <li>API:Import Defects into Bug Tracking Tool</li>
                          <li>Assign Defects</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2 p-1">
                    <div class="breadcrumb-itm w-100">
                      <div class="breadcrumb-title">RELEASE</div>
                      <div class="breadcrumb-text">
                        <ul>
                          <li>Update Incident Response Plan</li>
                          <li>Conduct Pentest</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                The following Tracks are integral to SDLC implementation, and
                each is explained in greater detail in a focused section.
              </p>
              <ul>
                <li>
                  Developer Security Training– Ongoing courses provided to
                  developers in order to improve their understanding of
                  techniques for identifying and mitigating security
                  vulnerabilities. Training will focus on topics including
                  threat modeling, DAST testing, and coding techniques to
                  prevent common defects such as SQL injection.
                </li>
                <li>
                  Design/Architecture Review– A collaborative effort between the
                  Development/ Engineering teams and Cyber Security to assess
                  and develop application or service design patterns that
                  mitigate risk to the platform and associated applications and
                  services
                </li>
                <li>
                  Threat Modeling– a structured approach for analyzing the
                  security of an application, with special consideration for
                  boundaries between logical system components, which often
                  communicate across one or more networks
                </li>
                <li>
                  Security User Stories / Security Requirements– a description
                  of functional and nonfunctional attributes of a software
                  product and its environment which must be in place to prevent
                  security vulnerabilities. Security user stories are written in
                  the style of a functional user story, as it would be entered
                  into an Agile-oriented tool like Jira
                </li>
                <li>
                  Automated Dynamic Application Security Testing (DAST)- a
                  process of testing an application or software product in an
                  operating state, implemented by a web application security
                  scanner
                </li>
                <li>
                  Automated Static Application Security Testing (SAST)– a
                  process of testing an application or software product in a
                  non-operating state, analyzing the source code for common
                  security vulnerabilities
                </li>
                <li>
                  Open Source Software Security Testing (OSS)- a process of
                  testing an application or software product for opensource
                  security vulnerabilities.
                </li>
                <li>
                  Red Team Assessment (Penetration Testing) – Hands-on security
                  testing of a runtime system. This sort of testing uncovers
                  more complex security flaws that may not be caught by DAST or
                  SAST tools.
                </li>
              </ul>
              <h2 class="main-heading" id="security">
                Developer Security Training
              </h2>
              <p>
                Developer security training is foundational to all the security
                tracks highlighted in this procedure. Without this training,
                together with experience and a security mindset, it will not be
                possible to do threat modeling, write accurate security user
                stories, or evaluate SAST / DAST results.
              </p>
              <p>Security training falls into two categories:</p>
              <ol>
                <li>
                  In-person courses offered by various providers and on a single
                  or multiple concepts, such as threat modeling. These courses
                  are intended to be hands-on, with a guided lab component and
                  will typically be provided over one or two full days. Such
                  courses can ve found from the following providers:
                </li>
              </ol>
              <ul>
                <li>SANS: https://www.sans.org/</li>
                <li>Global Knowledge: https://www.globalknowledge.com</li>
              </ul>
              <ol>
                <li>
                  Online Learning courses are available to satisfy training at
                  all levels which should also correspond to each employee’s
                  development goals. Such courses can be found from following
                  providers:
                </li>
              </ol>
              <ul>
                <li>Udemy: https://www.udemy.com/</li>
                <li>Offensive Security: https://www.offensive-security.com/</li>
                <li>SafeCode: https://safecode.org/</li>
              </ul>
              <p>
                Ongoing training should be provided to developers in order to
                improve their understanding of techniques for identifying and
                mitigating security vulnerabilities. Training should focus on
                topics including threat modeling, DAST testing, and coding
                techniques to prevent common defects such as SQL injection.
              </p>

              <h2 class="main-heading" id="review">
                Design/Architecture Review
              </h2>
              <p>
                A platform or service architecture and design that has taken
                into account security considerations will help improve the
                overall security posture . The cost and effort of retrofitting
                security after development are too high. An architecture and
                design review helps Development and Engineering teams validate
                the security-related design features of their application or
                service before starting the development phase. This allows us to
                identify and fix potential vulnerabilities before they can be
                exploited and before the fix requires a substantial re
                engineering effort.
              </p>
              <p>
                The architecture and design review process analyzes the
                architecture and design from a Cyber Security perspective.
                Ideally the design will commence with assistance from Cyber
                Security at the concept phase. If design artifacts already
                exist, it should facilitate this process nonetheless. Despite
                the comprehensive nature of the design documentation, the
                Development and Engineering teams must be able to decompose the
                application and be able to identify key items, including trust
                boundaries, data flow, entry points, and privileged code. The
                physical deployment configuration of the application must also
                be known. Special attention must be given to the design
                approaches that have been adapted for those areas that most
                commonly exhibit vulnerabilities. The guidance provided here
                will help teams develop and secure products and services for .
              </p>
              <p>
                For further information on this subject, please refer to: ink to
                Design requirements in the Founders Security Guideline
                spreadsheet
              </p>
              <h2 class="main-heading" id="threat">
                Threat Modeling
              </h2>
              <p>What is Threat Modeling?</p>
              <p>
                Threat Modeling is a structured approach for analyzing the
                security of a product. Threat Modeling evaluates the various
                attack surfaces of the product and identifies the
                vulnerabilities in design, thereby helping the software
                architect to mitigate the effects of the threat to the system.
              </p>
              <p>Why Should We Do Threat Modeling?</p>
              <p>
                Threat Modeling identifies vulnerabilities in the design phase
                of software development, making concerns easier and
                cost-effective to resolve. Also, Threat Modeling ensures that
                products are developed with built-in security from the
                beginning.
              </p>
              <p>
                Development teams are responsible for the security of
                applications they create and maintain. Each team, in
                consultation with Cyber Security, keeps a Threat Model of its
                application, operating environment, and data flow boundaries.
                Understanding the data flow boundaries should include obtaining
                an understanding of personal data (if any) that is being
                stored/collected/processed, why (the purpose) for which it is
                being stored/ collected/processed, and what data protection
                mechanisms exist to protect personal data. Including such
                considerations incorporates "Privacy by Design" since Threat
                Modeling is done during the design phase of software
                development.
              </p>
              <p>
                Development teams are responsible for the security of
                applications they create and maintain. Each team, in
                consultation with Cyber Security, keeps a Threat Model of its
                application, operating environment, and data flow boundaries.
                Understanding the data flow boundaries should include obtaining
                an understanding of personal data (if any) that is being
                stored/collected/processed, why (the purpose) for which it is
                being stored/ collected/processed, and what data protection
                mechanisms exist to protect personal data. Including such
                considerations incorporates "Privacy by Design" since Threat
                Modeling is done during the design phase of software
                development.
              </p>
              <p>The benefits of continuous threat modeling include:</p>
              <ul>
                <li>
                  Identify security gaps early on and tackle these in the design
                  phase, when they are cheapest and quickest to address.
                </li>
                <li>
                  Reduce the number of serious, complex defects uncovered during
                  security testing.
                </li>
                <li>
                  Provide visibility across a project, clarifying the need for
                  planning and development efforts that address security.
                </li>
                <li>
                  Provide for a visual representation of system security
                  components, data flows, and boundaries.
                </li>
                <li>Maintain an up-to-date risk profile.</li>
                <li>
                  Raise awareness across development teams so that security
                  becomes a daily priority, alongside functional development and
                  deployment tasks.
                </li>
              </ul>
              <p>How Should Threat Modeling Be Implemented?</p>
              <p>
                The Threat Modeling process can be classified in three steps:
              </p>
              <ol>
                <li>Decompose the System</li>
                <li>Determine and Rank Threats</li>
                <li>Determine Countermeasures and Mitigation</li>
              </ol>
              <p>1. Decompose the System</p>
              <p>
                The Threat Modeling process begins with understanding the system
                and the way it interacts with external entities. Decomposing the
                system involves:
              </p>
              <ul>
                <li>
                  Creating use-cases to understand how the application is used
                </li>
                <li>
                  Identifying entry points to see where a potential attacker
                  could interact with the application
                </li>
                <li>
                  Identifying assets i.e. items/areas that the attacker would be
                  interested in
                </li>
                <li>
                  Identifying trust levels which represent the access rights
                  that the application will grant to external entities.
                </li>
              </ul>
              <p>
                The above information is documented in the Threat Modeling
                document and is also used to produce Data Flow Diagrams (DFDs)
                for the application. The DFDs show the different paths through
                the system, highlighting the access privilege boundaries.
              </p>
              <p>2. Determine and Rank Threats</p>
              <p>
                Threats are identified using a threat categorization
                methodology. A threat categorization such as STRIDE (Spoofing,
                Tampering, Repudiation, Information Disclosure, Denial of
                Service, and Elevation of Privilege) can be used to define
                threat categories such as:
              </p>
              <ul>
                <li>Auditing & Logging</li>
                <li>Authentication</li>
                <li>Authorization</li>
                <li>Configuration Management</li>
                <li>Data Protection in Storage and Transit</li>
                <li>Data Validation</li>
                <li>Exception Management.</li>
              </ul>
              <p>3. Determine Countermeasures and Mitigation</p>
              <p>
                A lack of protection against a threat might indicate a
                vulnerability whose risk exposure could be mitigated by
                implementing a countermeasure. Such countermeasures can be
                identified using threat-countermeasure mapping lists. Once
                threats are assigned a risk-rank, sorting them from the highest
                to lowest risk is possible. Risk-ranking also simplifies
                prioritizing the mitigation effort and threat response by
                applying the identified countermeasures.
              </p>
              <p>Are there any tools available for Threat Modeling?</p>
              <p>
                You can use any well-known took to conduct threat modeling.
                However, it is recommended to use the Microsoft Threat Modeling
                Tool 2016, customized to your environment, which is available as
                a free download:
              </p>
              <p>
                https://www.microsoft.com/en-us/download/details.aspx?id=49168
              </p>
              <p>When Should I Develop Threat Models?</p>
              <p>
                Whenever a new product is developed, create a threat model
                during the design phase. Whenever a new feature is developed on
                an existing product, the current threat model should be updated
                to incorporate/eliminate attack surfaces based on the feature
                being developed. Threat Modeling is a living design artifact for
                a product. It evolves with the development of a product.
              </p>
              <p>When Should I Update a Threat Model?</p>
              <ol>
                <li>
                  Product interacts with new external entities, such as a file
                  transfer server, a rest api, an identity provider, or a
                  database.
                </li>
                <li>
                  Product includes a new feature area. For instance, maybe a
                  health-oriented web site now exposes a section related to
                  appointments.
                </li>
                <li>
                  The solution has changed internally, perhaps changing out
                  struts for spring (MVC framework), even though it may look the
                  same to outside users.
                </li>
                <li>
                  Authentication / authorization have changed in some way. (eg.,
                  sign-on used to leverage SAML but now uses Oath)
                </li>
                <li>
                  An API has been extended and now offers one or more additional
                  endpoints.
                </li>
              </ol>
              <p>Where do I store the developed threat model?</p>
              <p>
                Create a Git repository and store/update all threat models
                there:
              </p>
              <p>
                where you can store your threat models. You can contact
                xyz@company.com to get access to this repository. For your
                reference, a sample threat model exists in this repository (if
                one exists).
              </p>
              <p>
                Every threat model version should be committed with an
                appropriate commit-message, to identify the reason for the
                revision and the release in which the revised design will be
                implemented.
              </p>
              <h2 class="main-heading" id="userstoy">
                Security User Stories/Security Requirements
              </h2>
              <p>
                Someone with Cyber/Product Security know-how should help develop
                the functional security stories and write the corresponding
                security user stories. For instance, if a feature calls for an
                authentication component, then the security user stories for
                this component would focus on aspects such as account lockout,
                number of allowed failed login attempts, and password complexity
                (this is not a comprehensive list).
              </p>
              <p>
                Typically a lead Developers should review the user stories,
                makes corrections as appropriate, and then enters these stories
                into the project’s Jira (as an example) instance. Security
                stories are updated as functional requirements change, are
                added, or are removed. Note that there are two broad categories
                of security user story:
              </p>
              <ol>
                <li>
                  Evil user story – Focused on how the hacker will exploit a
                  vulnerability to compromise the security of a system, this
                  sort of story is told from the hacker’s point of view.
                </li>
                <li>
                  Nonfunctional security user story – Augmenting the functional
                  definition of a product, this sort of story provides security
                  guidance.
                </li>
              </ol>
              <h2 class="main-heading" id="dynamic">
                Automated Dynamic Application Security Testing (DAST)
              </h2>
              <p>
                Development teams, should configure DAST scan profiles in their
                CI/CD build tool (ex. Jenkins) and in the application security
                scanner referenced by their build tool.
              </p>
              <p>
                The DAST scanning tool should have the following attributes:
              </p>
              <ol>
                <li>
                  Exposes a rest api that can be consumed by build automation
                  tools
                </li>
                <li>
                  Offers a plug-in for popular build automation tools, including
                  Jenkins
                </li>
                <li>
                  Can export findings in popular formats, including json, xml
                  and pdf (for reports)
                </li>
                <li>Reports accurate findings concisely</li>
                <li>
                  Provides an interface allowing quick retesting of individual
                  defects (without the need to re-run an entire scan)
                </li>
                <li>Provides a virtual appliance deployment model</li>
                <li>
                  Provides frequent scan profile updates that are easy to apply,
                  with minimal disruption to ongoing scans.
                </li>
              </ol>
              <p>Click here to learn more about the DAST tool...</p>
              <h2 class="main-heading" id="static">
                Automated Static Application Security Testing (SAST)
              </h2>
              <p>
                Development teams should configure SAST scan profiles in their
                CI/CD build tool (ex. Jenkins) and in the SAST scanner their
                built tool references.
              </p>
              <p>
                The SAST scanning tool should have the following attributes:
              </p>
              <ol>
                <li>
                  Exposes an API that can be consumed by build automation tools
                </li>
                <li>
                  Offers a plug-in for popular build automation tools, including
                  Jenkins
                </li>
                <li>
                  Can export findings in popular formats, including json, xml
                  and pdf (for reports)
                </li>
                <li>Reports accurate findings concisely</li>
                <li>
                  Has complete security coverage of languages used to build
                  products and related services.
                </li>
              </ol>
              <p>Click here to learn more about the SAST tool...</p>
              <h2 class="main-heading" id="opensource">
                Open Source (OSS) Security Testing
              </h2>
              <p>
                Fixing software vulnerabilities is a crucial defense against
                exploitation. With Open Source Software, the vulnerability is
                further magnified, hence the use of OSS Security Assessment
                tools.
              </p>
              <p>
                Company Name uses a great deal of Open Source software (OSS).
                While these programs offer great benefits to the development
                teams, they can also pose significant risk to Company Name
                security. Therefore, it is important to assess the open source
                code for any vulnerabilities. also has an obligation to ensure
                OSS is used within the organization in a manner that adheres OSS
                licensing.
              </p>
              <p>
                The OSS scanning procedure consists of the following two
                assessments:
              </p>
              <ul>
                <li>
                  Vulnerability scan – will use OSS Scanning for vulnerability
                  assessment. Please refer to the following processes on how to
                  engage/conduct this level assessment: Link to OSS Scanning
                  tool
                </li>
                <li>
                  Licensing compliance – The OSS scanning tool also conducts
                  license assessments. Please refer to the of how to conduct
                  licensing assessment.
                </li>
              </ul>
              <p>
                For additional information or questions on how to integrate the
                OSS scanner in the CI/CD build process, please refer to the
                following
              </p>
              <p>Click here to learn more about the OSS Scan tool...</p>
              <h2 class="main-heading" id="incident">
                Update Incident Response Plan
              </h2>
              <p>
                It is critical to ensure the new product or feature, as well as
                any associated changes in the environment, is communicated to
                the Incident Response (IR) function. With this new information,
                the IR function will determine if it is necessary to update any
                relevant artifacts that dictate process and procedures. For
                example, knowing the type of data the product stores or
                processes is key since an incident can have adverse impact on
                customer data. Keeping the IR function abreast of any product
                changes will help reduce risk to .
              </p>
              <h2 class="main-heading" id="pentest">
                Penetration Testing
              </h2>
              <p>
                Product Pentesting comes in many different forms. There are also
                many paid services in the industry that can provide pentesting.
                The OWASP Foundation refers to this as Web Application Security
                Testing: https://www.owasp.org/index.php/
                Testing:_Introduction_and_objectives
              </p>
              <p>
                Although not required for all new features, careful
                consideration should be made as to when this should be a
                requirement. Typically for any new product introduction (NPI), a
                final pentest is required. Depending on whether the product goes
                through a continuous deployment cycle, minor/major release
                cycles, etc., the Engineering team in conjunction with Cyber
                Security SME should make a determination.
              </p>
              <p>
                Should pentesting be required, they typically consist of the
                following phases:
              </p>
              <div class="breadcrumbs">
                <div className="row">
                  <div className="col-md-2 p-1">
                    <div class="breadcrumb-itm w-100">
                      <div class="breadcrumb-title">Pre ASSESSMENT</div>
                    </div>
                  </div>

                  <div className="col-md-2 p-1">
                    <div class="breadcrumb-itm w-100">
                      <div class="breadcrumb-title">SCOPING</div>
                    </div>
                  </div>

                  <div className="col-md-2 p-1">
                    <div class="breadcrumb-itm w-100">
                      <div class="breadcrumb-title">ASSESSMENT</div>
                    </div>
                  </div>

                  <div className="col-md-2 p-1">
                    <div class="breadcrumb-itm w-100">
                      <div class="breadcrumb-title">DEFECT/RESULT SHARING</div>
                    </div>
                  </div>

                  <div className="col-md-2 p-1">
                    <div class="breadcrumb-itm w-100">
                      <div class="breadcrumb-title">
                        VALIDATION &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CLOSURE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                The following is a very short list of the type of organizations
                that provide this type of services:
              </p>
              <ul>
                <li>https://www.bishopfox.com/</li>
                <li>https://www.praetorian.com/</li>
                <li>https://cobalt.io/</li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
