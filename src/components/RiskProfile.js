import React, { Component } from "react"
import $ from "jquery"
export default class riskProfile extends Component {
  state = {
    b2b: null,
    sensitiveInfo: null,
    dataTransmitted: null,
    remoteAccess: null,
    customerCredential: null,
    missionCritical: null,
    providingServices: null,
    storeCredentials: null,
    potSensitiveInfo: null,
    installSoftware: null,
    serviceAbused: null,
    regulatory: null,
  }

  changeRadio(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <h3 className="main-heading risk-heading" id="riskprofile">
          Risk profile
        </h3>
        <div className="risk-profile">
          <div className="row">
            <div className="col-md-6 columns d-sm-none d-block">
              <div className="question">
                <p className="question-heading">QUESTIONS</p>
              </div>
            </div>
            <div className="col-md-6 columns d-sm-none d-block">
              <div className="question">
                <p className="question-heading">WHY DOES IT MATTER?</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 columns ">
              <div className="question1">
                <p className="question1-heading">
                  Do you sell products/services to business customers (B2B)?
                </p>
                <label className="container question-box-label">
                  {" "}
                  Yes
                  <input
                    type="radio"
                    value="Yes"
                    onChange={this.changeRadio.bind(this)}
                    checked={this.state.b2b === "Yes"}
                    name="b2b"
                  />
                  <span className="checkmark radio-box-input question-box-input"></span>
                </label>
                <label className="container question-box-label ">
                  {" "}
                  No
                  <input
                    type="radio"
                    onChange={this.changeRadio.bind(this)}
                    checked={this.state.b2b === "No"}
                    value="No"
                    name="b2b"
                  />
                  <span className="checkmark radio-box-input question-box-input"></span>
                </label>
              </div>
            </div>
            <div className="col-md-6 columns">
              <p className="answer">
                Selling to businesses (whether small, medium or large) entails
                different security requirements than selling to consumers and
                such differences can be significant. Although in later stages,
                security and compliance could eventually converge for
                organizations across different business models, there is
                typically high variance in the early stages. As such, security
                and compliance concerns and approaches at startups will vary
                based on the customer base.
              </p>
            </div>
            {this.state.b2b == "Yes" ? (
              <div className="offset-md-6 col-md-6 columns">
                <div className="answer">
                  <p>
                    Business customers generally demand significantly more
                    security, privacy, and compliance controls than consumers
                    do. Such requirements might originate from:
                  </p>
                  <ul>
                    <li>
                      A security team's concerns about data security,
                      resilience/operational continuity, contractual
                      requirements, etc.
                    </li>
                    <li>
                      A compliance team's need to satisfy regulatory compliance
                      (e.g., FFIEC, GLBA) or other regulations mandating vendor
                      due diligence
                    </li>
                    <li>
                      A legal or privacy team's need to satisfy regulatory
                      compliance (e.g., GDPR, HIPAA)
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              ""
            )}
            {this.state.b2b == "No" ? (
              <div className="offset-md-6 col-md-6 columns">
                <p className="answer mb-0">
                  Although you are selling to consumers and don&apos;t cater to
                  professional security teams, there&apos;s increased awareness
                  of privacy and security issues among everyday users. In recent
                  years, we&apos;ve seen several trends influencing B2C
                  security: On the one end, there&apos;s prevalence of breaches
                  to B2C companies and on the other hand, substantial regulatory
                  changes have emerged that affect the relationship between the
                  business and the consumers. Take all of those patterns into
                  consideration and strive to build in security practices early
                  on.
                </p>
              </div>
            ) : (
              ""
            )}
          </div>
          {this.state.b2b === "Yes" ? (
            <div>
              <div className="row">
                <div className="col-md-6 columns">
                  <div className="question1 ">
                    <p className="question1-heading">
                      Will you have access to sensitive customer information
                      (including information of the customer&apos;s customers,
                      employees, and contractors), intellectual property (code,
                      patents), or any other sensitive/confidential information?
                    </p>
                    <label className="container question-box-label">
                      {" "}
                      Yes
                      <input
                        type="radio"
                        value="Yes"
                        onChange={this.changeRadio.bind(this)}
                        checked={this.state.sensitiveInfo === "Yes"}
                        name="sensitiveInfo"
                      />
                      <span className="checkmark radio-box-input question-box-input"></span>
                    </label>
                    <label className="container question-box-label ">
                      {" "}
                      No
                      <input
                        type="radio"
                        value="No"
                        onChange={this.changeRadio.bind(this)}
                        checked={this.state.sensitiveInfo === "No"}
                        name="sensitiveInfo"
                      />
                      <span className="checkmark radio-box-input question-box-input"></span>
                    </label>
                  </div>
                </div>
                <div className="col-md-6 columns">
                  <div className="answer">
                    <p>
                      In a B2B model, you will likely be held accountable to the
                      same set of requirements as the customer sets for itself;
                      these requirements might include regulatory and/or
                      industry requirements. Consider the entire process of
                      acquiring/storing/accessing customer information. The
                      associated processes, systems, and applications will
                      likely be in scope for your customer's audit. Depending on
                      the number of records your company will have access to,
                      and the type of information contained in these records,
                      your organization might be considered high risk by your
                      customer - and be subject to a higher security standard.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`row  ${
                  this.state.sensitiveInfo == "Yes" ? "" : "d-none"
                }`}
              >
                <div className="col-md-6 columns">
                  <div className="question1">
                    <p className="question1-heading">
                      Will this data be transmitted or stored outside the
                      customer&apos;s controlled environment?
                    </p>
                    <label className="container question-box-label">
                      {" "}
                      Yes
                      <input
                        type="radio"
                        value="Yes"
                        onChange={this.changeRadio.bind(this)}
                        checked={this.state.dataTransmitted === "Yes"}
                        name="dataTransmitted"
                      />
                      <span className="checkmark radio-box-input question-box-input"></span>
                    </label>
                    <label className="container question-box-label ">
                      {" "}
                      No
                      <input
                        type="radio"
                        value="No"
                        onChange={this.changeRadio.bind(this)}
                        checked={this.state.dataTransmitted === "No"}
                        name="dataTransmitted"
                      />
                      <span className="checkmark radio-box-input question-box-input"></span>
                    </label>
                  </div>
                </div>
                <div className="col-md-6 columns">
                  <div className="answer">
                    <p>
                      While accessing sensitive data within the customer&apos;s
                      controlled environment introduces a set of threats, in
                      most cases existing controls can be leveraged to mitigate
                      some of these threats. Moving sensitive data outside of a
                      customer&apos;s- controlled environment is generally
                      considered a high risk, especially in a SaaS environment
                      where the customer has no control over the safeguards. As
                      such, SaaS providers hosting sensitive data of customers
                      should prepare for a high degree of scrutiny during the
                      vendor risk assessment process. Moreover, there might be a
                      significant reluctance to host data, especially data in
                      scope for regulatory requirements (e.g., customer private
                      information), in a startup's cloud environments (SaaS). We
                      advise thinking through reduction of data needed and/or
                      develop a customer-managed offering (aside from the SaaS
                      offering); such offering could/should be a turn-key
                      solution, such as containers that can run in a customer
                      environment with little or no remote oversight.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 columns">
                  <div className="question1">
                    <p className="question1-heading">
                      Will you have remote access to your customer's environment
                      (e.g., access to production infrastructure, product or any
                      remote access activity)?
                    </p>
                    <label className="container question-box-label">
                      {" "}
                      Yes
                      <input
                        type="radio"
                        value="Yes"
                        onChange={this.changeRadio.bind(this)}
                        checked={this.state.remoteAccess === "Yes"}
                        name="remoteAccess"
                      />
                      <span className="checkmark radio-box-input question-box-input"></span>
                    </label>
                    <label className="container question-box-label ">
                      {" "}
                      No
                      <input
                        type="radio"
                        value="No"
                        onChange={this.changeRadio.bind(this)}
                        checked={this.state.remoteAccess === "No"}
                        name="remoteAccess"
                      />
                      <span className="checkmark radio-box-input question-box-input"></span>
                    </label>
                  </div>
                </div>
                <div className="col-md-6 columns">
                  <div className="answer">
                    <p>
                      Remote access to the customer&apos;s sensitive environment
                      introduces a new set of risks: in the event your
                      environment is compromised, such access could provide the
                      attacker an avenue to attack customer&apos;s environment.
                      Some organizations deploy mature remote access solutions
                      are be able to better control, audit and manage such
                      access, leading to reduced risk and potentially less
                      scrutiny when assessing a 3rd party provider.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 columns">
                  <div className="question1">
                    <p className="question1-heading">
                      Will you hold any credentials for critical systems and/or
                      privileged accounts for your customer&apos;s systems in
                      your environment (e.g., access to databases, root access
                      to operating systems, etc.)?
                    </p>
                    <label className="container question-box-label">
                      {" "}
                      Yes
                      <input
                        type="radio"
                        value="Yes"
                        onChange={this.changeRadio.bind(this)}
                        checked={this.state.customerCredential === "Yes"}
                        name="customerCredential"
                      />
                      <span className="checkmark radio-box-input question-box-input"></span>
                    </label>
                    <label className="container question-box-label ">
                      {" "}
                      No
                      <input
                        type="radio"
                        value="No"
                        onChange={this.changeRadio.bind(this)}
                        checked={this.state.customerCredential === "No"}
                        name="customerCredential"
                      />
                      <span className="checkmark radio-box-input question-box-input"></span>
                    </label>
                  </div>
                </div>
                <div className="col-md-6 columns">
                  <div className="answer">
                    <p>
                      In most cases, such arrangement will be considered to
                      introduce a high risk for a customer. Similar to the risks
                      introduced by storing sensitive data or allowing remote
                      access to 3rd parties, privileged access that is
                      controlled by a 3rd party leads to a high degree of
                      scrutiny for the 3d party. Your customers will try to
                      avoid trusting a startup, with limited security resources,
                      with the "keys to the kingdom". Furthermore, such
                      arrangement will likely increase your threat profile, as
                      attackers aware of it will likely target your environment,
                      rather than attacking your customers directly.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 columns">
                  <div className="question1">
                    <p className="question1-heading">
                      Will you be providing a mission-critical service or will
                      your service be integrated to a mission-critical part of
                      your customers (e.g. will your service failure crucially
                      impact your customer)?
                    </p>
                    <label className="container question-box-label">
                      {" "}
                      Yes
                      <input
                        type="radio"
                        value="Yes"
                        onChange={this.changeRadio.bind(this)}
                        checked={this.state.missionCritical === "Yes"}
                        name="missionCritical"
                      />
                      <span className="checkmark radio-box-input question-box-input"></span>
                    </label>
                    <label className="container question-box-label ">
                      {" "}
                      No
                      <input
                        type="radio"
                        value="No"
                        onChange={this.changeRadio.bind(this)}
                        checked={this.state.missionCritical === "No"}
                        name="missionCritical"
                      />
                      <span className="checkmark radio-box-input question-box-input"></span>
                    </label>
                  </div>
                </div>
                <div className="col-md-6 columns">
                  <div className="answer">
                    <p>
                      Understand that you will/might be in the critical path for
                      a (particular) operational process for your customer. An
                      effort should be made to understand the target customer's
                      SLAs and ensure you build appropriate redundancies in your
                      product/environment to meet them.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 columns">
                  <div className="question1">
                    <p className="question1-heading">
                      Will you provide services on behalf of your customer to
                      end-users? (e.g. mail distribution, landing pages)?
                    </p>
                    <label className="container question-box-label">
                      {" "}
                      Yes
                      <input
                        type="radio"
                        value="Yes"
                        onChange={this.changeRadio.bind(this)}
                        checked={this.state.providingServices === "Yes"}
                        name="providingServices"
                      />
                      <span className="checkmark radio-box-input question-box-input"></span>
                    </label>
                    <label className="container question-box-label ">
                      {" "}
                      No
                      <input
                        type="radio"
                        value="No"
                        onChange={this.changeRadio.bind(this)}
                        checked={this.state.providingServices === "No"}
                        name="providingServices"
                      />
                      <span className="checkmark radio-box-input question-box-input"></span>
                    </label>
                  </div>
                </div>
                <div className="col-md-6 columns">
                  <div className="answer">
                    <p>
                      A higher degree of concern regarding reputation damage
                      will likely play a role in the amount of due diligence you
                      will be subjected to by your customers - a breach of your
                      environment will be highly visible for your customer's
                      customers, likely resulting in undesirable outcomes for
                      your relationship with the client.
                    </p>
                  </div>
                </div>
              </div>

              {this.state.customerCredential === "No" &&
              this.state.providingServices === "No" &&
              this.state.missionCritical === "No" &&
              this.state.remoteAccess == "No" &&
              this.state.sensitiveInfo == "No" ? (
                <div className="row final-answer">
                  <div className="col columns">
                    <div className="answer">
                      <p className="font-weight-bold">
                        Based on your answers, it is plausible that at this
                        time, security does not pose a substantial
                        concern/consideration to your startup. Nonetheless,
                        since security and your business are so dynamic, you
                        should pay close attention to security, e.g. follow
                        security news and regulations. You&apos;re welcome to
                        read through S4S for future reference and awareness.
                        Also, we invite you to contact us if there are
                        substantial risks that you have encountered and believe
                        should be in this guide.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
          {this.state.b2b == "No" ? (
            <div>
              <div className="row">
                <div className="col-md-6 columns">
                  <div className="question1">
                    <p className="question1-heading">
                      Will you store credentials for other services used by your
                      customers?
                    </p>
                    <label className="container question-box-label">
                      {" "}
                      Yes
                      <input
                        type="radio"
                        value="Yes"
                        onChange={this.changeRadio.bind(this)}
                        checked={this.state.storeCredentials === "Yes"}
                        name="storeCredentials"
                      />
                      <span className="checkmark radio-box-input question-box-input"></span>
                    </label>
                    <label className="container question-box-label ">
                      {" "}
                      No
                      <input
                        type="radio"
                        value="No"
                        onChange={this.changeRadio.bind(this)}
                        checked={this.state.storeCredentials === "No"}
                        name="storeCredentials"
                      />
                      <span className="checkmark radio-box-input question-box-input"></span>
                    </label>
                  </div>
                </div>
                <div className="col-md-6 columns">
                  <div className="answer">
                    <p>
                      Storing credentials for other services used by your
                      customers/users will likely make your organization and
                      service a target for an attacker targeting other services
                      used by your customers - e.g., it is likely easier to
                      break into your environment, and steal stored Google
                      credentials if you hold them, rather than attacking Google
                      directly.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 columns">
                  <div className="question1">
                    <p className="question1-heading">
                      Will you store potentially sensitive customer information
                      (e.g., pictures, documents, PII, etc.)?
                    </p>
                    <label className="container question-box-label">
                      {" "}
                      Yes
                      <input
                        type="radio"
                        value="Yes"
                        onChange={this.changeRadio.bind(this)}
                        checked={this.state.potSensitiveInfo === "Yes"}
                        name="potSensitiveInfo"
                      />
                      <span className="checkmark radio-box-input question-box-input"></span>
                    </label>
                    <label className="container question-box-label ">
                      {" "}
                      No
                      <input
                        type="radio"
                        value="No"
                        onChange={this.changeRadio.bind(this)}
                        checked={this.state.potSensitiveInfo === "No"}
                        name="potSensitiveInfo"
                      />
                      <span className="checkmark radio-box-input question-box-input"></span>
                    </label>
                  </div>
                </div>
                <div className="col-md-6 columns">
                  <div className="answer">
                    <p>
                      Similar to storing credentials for other services in your
                      environment, storing sensitive information will likely put
                      a higher reward for criminals looking for targets. In
                      addition, there are different regulatory and privacy
                      considerations you must address when building your
                      product.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 columns">
                  <div className="question1">
                    <p className="question1-heading">
                      Will customers install your software on their systems
                      (including browser extensions)?
                    </p>
                    <label className="container question-box-label">
                      {" "}
                      Yes
                      <input
                        type="radio"
                        value="Yes"
                        onChange={this.changeRadio.bind(this)}
                        checked={this.state.installSoftware === "Yes"}
                        name="installSoftware"
                      />
                      <span className="checkmark radio-box-input question-box-input"></span>
                    </label>
                    <label className="container question-box-label ">
                      {" "}
                      No
                      <input
                        type="radio"
                        value="No"
                        onChange={this.changeRadio.bind(this)}
                        checked={this.state.installSoftware === "No"}
                        name="installSoftware"
                      />
                      <span className="checkmark radio-box-input question-box-input"></span>
                    </label>
                  </div>
                </div>
                <div className="col-md-6 columns">
                  <div className="answer">
                    <p>
                      Vendors with a client software are target to attacks
                      attempting to deploy malware through 3rd parties - such as
                      your client software. Consider implementing integrity
                      checks throughout your build process to ensure no
                      malicious code is added to your product. Furthermore, it
                      is of the highest importance to implement appropriate
                      safeguards for software signing certificates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 columns">
                  <div className="question1">
                    <p className="question1-heading">
                      If your services are abused, can this incur financial loss
                      to your customers?
                    </p>
                    <label className="container question-box-label">
                      {" "}
                      Yes
                      <input
                        type="radio"
                        value="Yes"
                        onChange={this.changeRadio.bind(this)}
                        checked={this.state.serviceAbused === "Yes"}
                        name="serviceAbused"
                      />
                      <span className="checkmark radio-box-input question-box-input"></span>
                    </label>
                    <label className="container question-box-label ">
                      {" "}
                      No
                      <input
                        type="radio"
                        value="No"
                        onChange={this.changeRadio.bind(this)}
                        checked={this.state.serviceAbused === "No"}
                        name="serviceAbused"
                      />
                      <span className="checkmark radio-box-input question-box-input"></span>
                    </label>
                  </div>
                </div>
                <div className="col-md-6 columns">
                  <div className="answer">
                    <p>
                      Your services will likely be targeted by criminals looking
                      for a financial gain. In addition, internal users
                      (employees and suppliers) should go through a higher
                      scrutiny. Lastly, there is probably a financial liability
                      for your company.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 columns">
                  <div className="question1">
                    <p className="question1-heading">
                      Do you know whether there are regulatory requirements
                      relevant to your product/service?
                    </p>
                    <label className="container question-box-label">
                      {" "}
                      Yes
                      <input
                        type="radio"
                        value="Yes"
                        onChange={this.changeRadio.bind(this)}
                        checked={this.state.regulatory === "Yes"}
                        name="regulatory"
                      />
                      <span className="checkmark radio-box-input question-box-input"></span>
                    </label>
                    <label className="container question-box-label ">
                      {" "}
                      No
                      <input
                        type="radio"
                        value="No"
                        onChange={this.changeRadio.bind(this)}
                        checked={this.state.regulatory === "No"}
                        name="regulatory"
                      />
                      <span className="checkmark radio-box-input question-box-input"></span>
                    </label>
                  </div>
                </div>
                <div className="col-md-6 columns">
                  <div className="answer">
                    <p>
                      Understanding regulations you and/or your clients
                      are/might be subject to is paramount when developing a new
                      product or service. Not all regulations provide specific
                      control requirements, to either people, process, or
                      technology. Nonetheless, understanding and taking
                      regulatory requirements into account from the beginning is
                      one of extreme importance to your business. Discuss
                      regulations with your prospective clients and consult a
                      legal counsel if unsure about relevant regulations and
                      their requirements.
                    </p>
                  </div>
                </div>
              </div>

              {this.state.regulatory === "No" &&
              this.state.serviceAbused === "No" &&
              this.state.installSoftware == "No" &&
              this.state.potSensitiveInfo === "No" &&
              this.state.storeCredentials == "No" ? (
                <div className="row final-answer">
                  <div className="col columns">
                    <div className="answer">
                      <p className="font-weight-bold">
                        Based on your answers, it is plausible that at this
                        time, security does not pose a substantial
                        concern/consideration to your startup. Nonetheless,
                        since security and your business are so dynamic, you
                        should pay close attention to security, e.g. follow
                        security news and regulations. You&apos;re welcome to
                        read through S4S for future reference and awareness.
                        Also, we invite you to contact us if there are
                        substantial risks that you have encountered and believe
                        should be in this guide.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    )
  }
}
