import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import React, { Component } from "react"
import $ from "jquery"
import Sidebar from "react-sidebar"
import axios from "axios"
import RiskProfile from "../components/RiskProfile"
import EnvAsses from "../components/EnvAsses"
import SecurityTopic from "../components/SecurityTopic"
import { navigate } from "gatsby"
import logo from "../assets/images/s4slogo.png"

export default class AppSecurity extends Component {
  state = {
    formSubmit: false,
    companyVertical: "  ",
    role: "  ",
    companiesFounded: "  ",
    fundingStatus: "  ",
    companySize: "  ",
    age: "  ",
    gender: "  ",
    educationLevel: "  ",
    envAssessment: [],
    securityTopics: [],
    riskAssessment: [],
    sidebarOpen: false,
    isMobile: false,
  }

  changeSelect(val, name) {
    this.setState({
      [name]: val,
    })
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open })
  }

  submitClicked() {
    var temptopics = []
    $(".topics-selected > div p").each(function(index, element) {
      if ($(element).text()) {
        temptopics.push($(element).text())
      }
    })

    var tempRisk = []
    $(".question1")
      // .has("input:checked")
      .each(function(index, element) {
        let question = {}
        question.title = $(element)
          .find(".question1-heading")
          .text()
        if ($(element).has("input:checked").length > 0)
          question.answer = $(element)
            .find("input")
            .prop("checked")
            ? "Yes"
            : "No"
        else question.answer = null

        tempRisk.push(question)
      })

    var tempenv = []
    $("#envasses tbody tr").each(function(index, element) {
      let question = {}
      question.title = $(element)
        .find(".table-main")
        .text()
      if ($(element).find("input:checked").length > 0)
        question.answer = $(element)
          .find("input:checked")
          .attr("value")
      else question.answer = null

      tempenv.push(question)
    })

    this.setState(
      {
        envAssessment: tempenv,
        securityTopics: temptopics,
        riskAssessment: tempRisk,
      },
      () => {
        let tempState = this.state
        delete tempState.formSubmit
        delete tempState.sidebarOpen

        axios.post("https://security4startup.herokuapp.com/riskprofile", {
          data: tempState,
        })
      }
    )

    this.setState({
      formSubmit: true,
    })
    setTimeout(() => {
      navigate("/controls-checklist")
    }, 1000)
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

        <h2> Categories </h2>
        <a href="#survey" onClick={this.smoothScroll.bind(this)}>
          Survey
        </a>
        <a href="#environmentAssesment" onClick={this.smoothScroll.bind(this)}>
          {" "}
          Environment Assessment{" "}
        </a>
        <a href="#riskprofile" onClick={this.smoothScroll.bind(this)}>
          {" "}
          Risk Profile{" "}
        </a>
      </div>
    )
    return (
      <Layout>
        <SEO title="Risk Profile" />
        <div class="page-content survey-page">
          <a id="downloadAnchorElem" style={{ display: "none" }}></a>
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
            <div className="col-md-3 left-section sm-d-none">
              <div className="categories">{sidebarContent}</div>
            </div>
            <div class="col-md-9 categories-detail">
              <p style={{ marginTop: "25px" }}>
                We want to design S4S to be a useful tool for a wide variety of
                users. This page is divided into two main sections:
              </p>
              <ul className="mb-4">
                <li>
                  Short and anonymous survey that will allow us to better
                  understand our audience as we keep optimizing our content
                </li>
                <li>
                  Risk profile questions and considerations that guide security
                  professionals when engaging in a risk assessment process for a
                  new startup
                </li>
              </ul>
              {/* <h3 class="main-heading risk-heading" id="survey">
                             Survey
                           </h3>

                           <p
                             class="survey-secondary-heading"
                             id="companyVertical"
                           >
                             My company is in the following vertical:
                           </p>
                           <Select
                             defaultValue="Choose"
                             className="risk-input"
                             onChange={val =>
                               this.changeSelect(val, "companyVertical")
                             }
                           >
                             {ProfileOption.companyvertical.map(item => {
                               return <Option value={item}>{item}</Option>;
                             })}
                           </Select>
                           {this.state.companyVertical ? (
                             this.state.companyVertical == "Other" ||
                             !ProfileOption.companyvertical.includes(
                               this.state.companyVertical
                             ) ? (
                               <Input
                                 className="risk-input ml-3"
                                 maxLength={28}
                                 onChange={({ target: { value } }) =>
                                   this.setState({ companyVertical: value })
                                 }
                               />
                             ) : (
                               ""
                             )
                           ) : (
                             ""
                           )}
                           <p class="survey-secondary-heading" id="role">
                             My role is best described as:
                           </p>
                           <Select
                             defaultValue="Choose"
                             className="risk-input"
                             onChange={val => this.changeSelect(val, "role")}
                           >
                             {ProfileOption.role.map(item => {
                               return <Option value={item}>{item}</Option>;
                             })}
                           </Select>
                           {this.state.role ? (
                             this.state.role == "Other" ||
                             !ProfileOption.role.includes(this.state.role) ? (
                               <Input
                                 className="risk-input ml-3"
                                 maxLength={28}
                                 onChange={({ target: { value } }) =>
                                   this.setState({ role: value })
                                 }
                               />
                             ) : (
                               ""
                             )
                           ) : (
                             ""
                           )}
                           <p
                             class="survey-secondary-heading"
                             id="companiesFounded"
                           >
                             I have founded or co-founded this many companies:
                           </p>
                           <Select
                             defaultValue="Choose"
                             className="risk-input"
                             onChange={val =>
                               this.changeSelect(val, "companiesFounded")
                             }
                           >
                             {ProfileOption.cofounded.map(item => {
                               return <Option value={item}>{item}</Option>;
                             })}
                           </Select>
                           <p
                             class="survey-secondary-heading"
                             id="fundingStatus"
                           >
                             My current company's funding status:
                           </p>
                           <div className="d-flex">
                             <Select
                               defaultValue="Choose"
                               className="risk-input"
                               onChange={val =>
                                 this.changeSelect(val, "fundingStatus")
                               }
                             >
                               {ProfileOption.funding.map(item => {
                                 return <Option value={item}>{item}</Option>;
                               })}
                             </Select>
                             {this.state.fundingStatus ? (
                               this.state.fundingStatus == "Other" ||
                               !ProfileOption.funding.includes(
                                 this.state.fundingStatus
                               ) ? (
                                 <Input
                                   className="risk-input ml-3"
                                   maxLength={28}
                                   onChange={({ target: { value } }) =>
                                     this.setState({ fundingStatus: value })
                                   }
                                 />
                               ) : (
                                 ""
                               )
                             ) : (
                               ""
                             )}
                           </div>
                           <p class="survey-secondary-heading" id="companySize">
                             My company size (employees + full-time
                             contractors):
                           </p>
                           <Select
                             defaultValue="Choose"
                             className="risk-input"
                             onChange={val =>
                               this.changeSelect(val, "companySize")
                             }
                           >
                             {ProfileOption.companysize.map(item => {
                               return <Option value={item}>{item}</Option>;
                             })}
                           </Select>
                           <p class="survey-secondary-heading" id="ageRange">
                             My age range is:
                           </p>
                           <Select
                             defaultValue="Choose"
                             className="risk-input"
                             onChange={val => this.changeSelect(val, "age")}
                           >
                             {ProfileOption.age.map(item => {
                               return <Option value={item}>{item}</Option>;
                             })}
                           </Select>
                           <p
                             class="survey-secondary-heading"
                             id="levelEducation"
                           >
                             My highest level of education achieved:
                           </p>
                           <Select
                             defaultValue="Choose"
                             className="risk-input"
                             onChange={val =>
                               this.changeSelect(val, "educationLevel")
                             }
                           >
                             {ProfileOption.education.map(item => {
                               return <Option value={item}>{item}</Option>;
                             })}
                           </Select>
                           <p class="survey-secondary-heading" id="gender">
                             Gender:
                           </p>
                           <div className="d-flex">
                             <Select
                               defaultValue="Choose"
                               className="risk-input"
                               onChange={val =>
                                 this.changeSelect(val, "gender")
                               }
                             >
                               {ProfileOption.gender.map(item => {
                                 return <Option value={item}>{item}</Option>;
                               })}
                             </Select>
                             {this.state.gender == "Other" ? (
                               <Input
                                 className="risk-input ml-3"
                                 maxLength={28}
                               />
                             ) : (
                               ""
                             )}
                           </div> */}

              <div class="survey-table">
                <EnvAsses />
                <SecurityTopic />
                <RiskProfile />
                <button
                  className="btn blue-action-btn mt-1"
                  onClick={this.submitClicked.bind(this)}
                >
                  {this.state.formSubmit ? "Done" : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
