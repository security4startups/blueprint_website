import React, { Component } from "react"

export default class envAsses extends Component {
  render() {
    return (
      <div>
        <p
          style={{ fontSize: "1.5em" }}
          className="survey-secondary-heading my-3"
          id="environmentAssesment"
        >
          Environment Assessment
        </p>
        <p style={{ marginBottom: "4.5em", color: "gray" }}>
          Indicate as accurately as possible your level of agreement with each
          statement by responding on a scale from 1-5, where 1 means “Strongly
          disagree” and 5 means “Strongly agree.” Your answers will be
          anonymous, and you should feel free to answer honestly.
        </p>
        <table id="envasses">
          <colgroup>
            <col width="40%" />

            <col width="12%" />
            <col width="12%" />
            <col width="12%" />
            <col width="12%" />
            <col width="12%" />
          </colgroup>
          <thead>
            <tr>
              <th></th>

              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
            </tr>

            <tr>
              <th></th>

              <th>Strongly disagree</th>
              <th>Disagree</th>
              <th>Neither agree nor disagree</th>
              <th>Agree</th>
              <th>Strongly agree</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="table-main">
                I have a good grasp of information security threats against my
                business.
              </td>

              <td>
                <label class="container">
                  <input
                    type="radio"
                    name="my business"
                    value="Strongly Disagree"
                  />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input type="radio" name="my business" value="Disagree" />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input
                    type="radio"
                    name="my business"
                    value="Neither Agree or Disagree"
                  />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input type="radio" name="my business" value="Agree" />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input
                    type="radio"
                    name="my business"
                    value="Strongly Agree"
                  />
                  <span class="checkmark"></span>
                </label>
              </td>
            </tr>
            <tr>
              <td class="table-main">
                Information security is critical to my corporate operations.
              </td>

              <td>
                <label class="container">
                  <input
                    type="radio"
                    name="operations"
                    value="Strongly Disagree"
                  />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input type="radio" name="operations" value="Disagree" />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input
                    type="radio"
                    name="operations"
                    value="Neither Agree or Disagree"
                  />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input type="radio" name="operations" value="Agree" />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input
                    type="radio"
                    name="operations"
                    value="Strongly Agree"
                  />
                  <span class="checkmark"></span>
                </label>
              </td>
            </tr>
            <tr>
              <td class="table-main">
                Information security is critical to my product(s) and/or
                service(s).
              </td>

              <td>
                <label class="container">
                  <input
                    type="radio"
                    name="services"
                    value="Strongly Disagree"
                  />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input type="radio" name="services" value="Disagree" />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input
                    type="radio"
                    name="services"
                    value="Neither Agree or Disagree"
                  />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input type="radio" name="services" value="Agree" />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input type="radio" name="services" value="Strongly Agree" />
                  <span class="checkmark"></span>
                </label>
              </td>
            </tr>
            <tr>
              <td class="table-main">
                My company allocates appropriate funds towards information
                security.
              </td>

              <td>
                <label class="container">
                  <input
                    type="radio"
                    name="security"
                    value="Strongly Disagree"
                  />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input type="radio" name="security" value="Disagree" />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input
                    type="radio"
                    name="security"
                    value="Neither Agree or Disagree"
                  />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input type="radio" name="security" value="Agree" />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input type="radio" name="security" value="Strongly Agree" />
                  <span class="checkmark"></span>
                </label>
              </td>
            </tr>
            <tr>
              <td class="table-main">
                My company allocates appropriate time towards information
                security.
              </td>

              <td>
                <label class="container">
                  <input
                    type="radio"
                    name="towardinfo"
                    value="Strongly Disagree"
                  />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input type="radio" name="towardinfo" value="Disagree" />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input
                    type="radio"
                    name="towardinfo"
                    value="Neither Agree or Disagree"
                  />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input type="radio" name="towardinfo" value="Agree" />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input
                    type="radio"
                    name="towardinfo"
                    value="Strongly Agree"
                  />
                  <span class="checkmark"></span>
                </label>
              </td>
            </tr>
            <tr>
              <td class="table-main">
                My customers use information security as a key factor when
                evaluating whether to do business.
              </td>

              <td>
                <label class="container">
                  <input
                    type="radio"
                    name="dobusiness"
                    value="Strongly Disagree"
                  />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input type="radio" name="dobusiness" value="Disagree" />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input
                    type="radio"
                    name="dobusiness"
                    value="Neither Agree or Disagree"
                  />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input type="radio" name="dobusiness" value="Agree" />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input
                    type="radio"
                    name="dobusiness"
                    value="Strongly Agree"
                  />
                  <span class="checkmark"></span>
                </label>
              </td>
            </tr>
            <tr>
              <td class="table-main">
                I have a good grasp of information security threats against my
                customers.
              </td>

              <td>
                <label class="container">
                  <input
                    type="radio"
                    name="mycustomer"
                    value="Strongly Disagree"
                  />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input type="radio" name="mycustomer" value="Disagree" />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input
                    type="radio"
                    name="mycustomer"
                    value="Neither Agree or Disagree"
                  />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input type="radio" name="mycustomer" value="Agree" />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input
                    type="radio"
                    name="mycustomer"
                    value="Strongly Agree"
                  />
                  <span class="checkmark"></span>
                </label>
              </td>
            </tr>
            <tr>
              <td class="table-main">
                I am conﬁdent I can meet my customers&apos; security
                expectations and commitments.
              </td>

              <td>
                <label class="container">
                  <input
                    type="radio"
                    name="commitments"
                    value="Strongly Disagree"
                  />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input type="radio" name="commitments" value="Disagree" />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input
                    type="radio"
                    name="commitments"
                    value="Neither Agree or Disagree"
                  />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input type="radio" name="commitments" value="Agree" />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input
                    type="radio"
                    name="commitments"
                    value="Strongly Agree"
                  />
                  <span class="checkmark"></span>
                </label>
              </td>
            </tr>
            <tr>
              <td class="table-main">
                My company will be adversely impacted by a security breach or by
                public awareness to it.
              </td>

              <td>
                <label class="container">
                  <input
                    type="radio"
                    name="securitybreach"
                    value="Strongly Disagree"
                  />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input type="radio" name="securitybreach" value="Disagree" />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input
                    type="radio"
                    name="securitybreach"
                    value="Neither Agree or Disagree"
                  />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input type="radio" name="securitybreach" value="Agree" />
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>
                <label class="container">
                  <input
                    type="radio"
                    name="securitybreach"
                    value="Strongly Agree"
                  />
                  <span class="checkmark"></span>
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
