import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import React, { Component } from "react"
import $ from "jquery"
import Sidebar from "react-sidebar"
import axios from "axios"
import { PDFDownloadLink } from "@react-pdf/renderer"
import PdfDocument from "../components/ControlPdf"
// import { generateExcel } from "../../data/exportToCsv"
import message from "antd/lib/message"
export default class ControlChecklist extends Component {
  state = {
    data: [],
    seedcontrol: true,
    seriesacontrol: true,
    all: true,
    corporate: true,
    product: true,
    productInfrastructure: true,
    seed: [],
    seriesa: [],
    domainall: true,
    crossed: [],
    checked: [],
    pdfClicked: false,
    sidebarOpen: false,
    isMobile: false,
  }

  controlsdata = ""

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open })
  }
  componentDidMount() {
    if (window.innerWidth <= 760) {
      this.setState({ isMobile: true })
    }
  }
  componentWillMount() {
    var self = this
    // https://security4startup.herokuapp.com/controls
    axios.get("https://security4startup.herokuapp.com/controls").then(res => {
      const data = res.data
      self.setState({
        seed: data[0],
        seriesa: data[1],
      })
    })
  }

  urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g
    return text.replace(urlRegex, function(url) {
      console.log(url)
      return '<a href="' + url + '" target="_blank">' + url + "</a>"
    })
  }

  renderControls() {
    if (this.state.seed.length > 0 || this.state.seriesa.length > 0) {
      var data = []
      if (this.state.seedcontrol) data = [...this.state.seed]
      if (this.state.seriesacontrol) data = [...data, ...this.state.seriesa]
      // if (this.state.all) data = [...this.state.seed, ...this.state.seriesa];

      const sections = [...new Set(data.map(x => x.safeguardsConsiderations))]

      let controlsdata = []
      sections.map(sec => {
        var secitems = data.filter(item => item.safeguardsConsiderations == sec)

        secitems = secitems.filter(item => {
          var condition = false
          var cond1,
            cond2,
            cond3 = false
          if (this.state.corporate)
            if ("undefined" === typeof item["corporate"]) cond1 = false
            else cond1 = true
          if (this.state.product)
            if ("undefined" === typeof item["product"]) cond2 = false
            else cond2 = true

          if (this.state.productInfrastructure)
            if ("undefined" === typeof item["productInfrastructure"])
              cond3 = false
            else cond3 = true

          if (cond1 || cond2 || cond3) condition = true
          else condition = false
          return condition
        })

        const itemhtml = secitems.map((item, index) => {
          const controlDetail = `
                  ${this.urlify(item.details)}
                  ${
                    item.suggestedTools
                      ? `<p style='font-weight:bold;margin-top:18px' className="mt-3">
                        Tool examples: ${item.suggestedTools}
                      </p>`
                      : ""
                  }
                  
                  ${
                    item.reference
                      ? `<p style='font-weight: bold' className="mt-3">
                        Reference: ${this.urlify(item.reference)}
                      </p>`
                      : ""
                  }`

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

                    this.toggleChecked(item.id)
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
                  {item.controls}
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

                    this.toggleCrossed(item.id)
                  }}
                ></i>
              </div>
              <div class="control-content paragraph-container collpasible collapsed">
                <p
                  class="large-paragraph"
                  dangerouslySetInnerHTML={{ __html: controlDetail }}
                ></p>
              </div>
            </>
          )
        })

        const trimmedstring = sec.replace(/[^a-zA-Z]/g, "")
        let sectemparray = [
          <h2 class="main-heading" id={trimmedstring}>
            {sec}
          </h2>,
        ]
        sectemparray = [...sectemparray, ...itemhtml]
        controlsdata.push(sectemparray)
      })

      return controlsdata
    }
  }

  changeCheckBox(name, e) {
    if (name == "seriesacontrol" || name == "seedcontrol") {
      if (!e.target.checked)
        this.setState({
          all: false,
        })
    }

    if (name == "all") {
      this.setState({
        seriesacontrol: e.target.checked,
        seedcontrol: e.target.checked,
      })
    }

    if (
      name == "corporate" ||
      name == "productInfrastructure" ||
      name == "product"
    ) {
      if (!e.target.checked)
        this.setState({
          domainall: false,
        })
    }

    if (name == "domainall") {
      this.setState({
        corporate: e.target.checked,
        product: e.target.checked,
        productInfrastructure: e.target.checked,
      })
    }

    this.setState({
      [name]: e.target.checked,
    })
  }

  expandAll() {
    $(".control-content")
      .not(".paragraph-container")
      .addClass("click")
    $(".paragraph-container.collpasible").removeClass("collapsed")
  }

  collapseAll() {
    $(".control-content")
      .not(".paragraph-container")
      .removeClass("click")
    $(".paragraph-container.collpasible").addClass("collapsed")
  }

  smoothScroll(e) {
    document.querySelector(e.target.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  }

  toggleChecked(id) {
    const self = this
    setTimeout(() => {
      if (!self.state.checked.includes(id))
        self.setState(prevState => ({
          checked: [...prevState.checked, id],
        }))
      else {
        self.setState(prevState => ({
          checked: prevState.checked.filter(ite => ite !== id),
        }))
      }
    }, 100)
  }

  toggleCrossed(id) {
    const self = this
    setTimeout(() => {
      if (!self.state.crossed.includes(id))
        self.setState(prevState => ({
          crossed: [...prevState.crossed, id],
        }))
      else
        self.setState(prevState => ({
          crossed: prevState.crossed.filter(ite => ite !== id),
        }))
    }, 100)
  }

  CsvExport() {
    // generateExcel(this.state)
  }
  render() {
    const sidebarContent = (
      <div className="categories">
        {this.state.isMobile ? <img src="/img/logo.png" alt="" /> : ""}
        <h2>Selection menu</h2>
        <div class="control-input">
          <h2>Stage</h2>

          <label class="control-label">
            Seed{" "}
            <input
              type="checkbox"
              checked={this.state.seedcontrol ? true : false}
              onChange={e => this.changeCheckBox("seedcontrol", e)}
            />
            <span class="control-input-box"></span>
          </label>
          <label class="control-label">
            Series A+
            <input
              type="checkbox"
              checked={this.state.seriesacontrol ? true : false}
              onChange={e => this.changeCheckBox("seriesacontrol", e)}
            />
            <span class="control-input-box"></span>
          </label>
          <label class="control-label">
            All
            <input
              type="checkbox"
              checked={
                this.state.all ||
                (this.state.seedcontrol && this.state.seriesacontrol)
              }
              onChange={e => this.changeCheckBox("all", e)}
            />
            <span class="control-input-box"></span>
          </label>
        </div>
        <div class="control-input">
          <h2>Domain</h2>
          <label class="control-label">
            Corporate
            <input
              type="checkbox"
              checked={this.state.corporate ? true : false}
              onChange={e => this.changeCheckBox("corporate", e)}
            />
            <span class="control-input-box"></span>
          </label>
          <label class="control-label">
            Product Infrastructure
            <input
              type="checkbox"
              checked={this.state.productInfrastructure ? true : false}
              onChange={e => this.changeCheckBox("productInfrastructure", e)}
            />
            <span class="control-input-box"></span>
          </label>
          <label class="control-label">
            Product
            <input
              type="checkbox"
              checked={this.state.product ? true : false}
              onChange={e => this.changeCheckBox("product", e)}
            />
            <span class="control-input-box"></span>
          </label>
          <label class="control-label">
            All
            <input
              type="checkbox"
              checked={
                this.state.domainall ||
                (this.state.corporate &&
                  this.state.product &&
                  this.state.productInfrastructure)
              }
              onChange={e => this.changeCheckBox("domainall", e)}
            />
            <span class="control-input-box"></span>
          </label>
        </div>

        <div class="categories mt-4">
          <h2>Categories</h2>
          <a
            href="#IdentityandAccessManagement"
            onClick={this.smoothScroll.bind(this)}
          >
            Identity and Access Management
          </a>
          <a
            href="#InfrastructureSecurity"
            onClick={this.smoothScroll.bind(this)}
          >
            Infrastructure Security
          </a>
          <a href="#ApplicationSecurity" onClick={this.smoothScroll.bind(this)}>
            Application Security
          </a>
          <a href="#Resiliency" onClick={this.smoothScroll.bind(this)}>
            Resiliency
          </a>
          <a href="#Governance" onClick={this.smoothScroll.bind(this)}>
            Governance
          </a>
          <a href="" className="d-none"></a>
        </div>
        <div class="control-export mt-4">
          <h2>Export</h2>
          <div class="export-icon">
            {this.state.pdfClicked ? (
              <PDFDownloadLink
                document={<PdfDocument data={this.state} />}
                fileName="Security4Startups Controls.pdf"
              >
                <img src="/img/adobereadericon.png" alt="" />
              </PDFDownloadLink>
            ) : (
              <img
                src="/img/adobereadericon.png"
                onClick={() => {
                  message.success("generating pdf")
                  setTimeout(() => {
                    message.success(
                      "Pdf Generated. Please click the button again"
                    )
                  }, 500)

                  this.setState({
                    pdfClicked: true,
                  })
                  const self = this
                  setTimeout(() => {
                    self.setState({
                      pdfClicked: false,
                    })
                  }, 30000)
                }}
                alt=""
              />
            )}

            <img
              src="/img/excelicon.png"
              onClick={this.CsvExport.bind(this)}
              alt=""
            />
          </div>
        </div>
      </div>
    )
    return (
      <Layout>
        <SEO title="Controls" />

        <div class="page-content control-page">
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
            <div class="col-md-3 left-section sm-d-none">{sidebarContent}</div>

            <div class="col-md-9 categories-detail">
              <h2 id="startups " class="main-heading d-none"></h2>
              <h2 class="main-heading" id="purpose">
                Control checklist
              </h2>
              <p>
                In this page, you will find a checklist of the security controls
                you should consider implementing in your startup.
              </p>
              <p>
                <b>The checklist is dynamic</b>: The controls will change based
                on your selection of startup stage (Seed, Series A+) as well as
                domain (Corporate, Product infrastructure, Product). The
                checklist is divided into categories ranging from Identity and
                Access Management to Governance. For easier navigation, you can
                scroll down or up the categories displayed by using the menu on
                the left. Press on each control to expand it with added context
                and explanation or press “Expand All” to see controls in an
                expanded view.
              </p>

              <p>
                <b>The checklist is customizable</b>: You’re welcome to cross
                out controls that are irrelevant to your use case or the ones
                you have already implemented by using the X mark (<b>X</b>) on
                each control. You can also use the check mark (<b>✔</b>) to
                indicate controls that are extremely important and you want to
                highlight them. .
              </p>

              <p>
                <b>The checklist is exportable</b>: When you are done, you can
                export the list of controls in various formats and refer to in
                the future when convenient to you.
              </p>

              <p>
                <b>The checklist is open to feedback</b>: As an open-source
                project, the S4S initiative strives to improve from ideas shared
                by the community. If you believe any changes should be made to
                the checklist, please suggest your ideas and improvements via
                our{" "}
                <a href="https://github.com/security4startups/" target="_blank">
                  GitHub repository.
                </a>
              </p>
              <div className="my-4 text-right expand-controls">
                <span onClick={this.expandAll.bind(this)}>Expand all</span>{" "}
                &nbsp; | &nbsp;
                <span onClick={this.collapseAll.bind(this)}>Collapse all</span>
              </div>
              <div
                class="text-center btn-group control-btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() =>
                    this.setState({ seriesacontrol: false, seedcontrol: true })
                  }
                >
                  Seed
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() =>
                    this.setState({ seedcontrol: false, seriesacontrol: true })
                  }
                >
                  Series A
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() =>
                    this.setState({ seriesacontrol: true, seedcontrol: true })
                  }
                >
                  All
                </button>
              </div>
              {this.renderControls()}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
