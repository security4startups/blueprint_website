import React, { Component } from "react"
import Sortable from "react-sortablejs"
// import ColumnGroup from "antd/lib/table/ColumnGroup"
let sortable = null // sortable instance
export default class securityTopic extends Component {
  render() {
    return (
      <div>
        <p class="survey-secondary-heading">
          The following security topics are important to my business: (Please
          drag and drop the options to the menu on the right, with the first
          being of greatest relevance and the last being of least relevance)
        </p>
        <div class="topics d-flex row">
          <div className="col-sm-6 col-md-5 col-6">
            <Sortable
              // [Optional] A tag or react component to specify the wrapping element. Defaults to "div".
              // In a case of a react component it is required to has children in the component
              // and pass it down.
              tag="div"
              options={{
                group: "shared",
                // Element dragging started
              }}
              // Element dragging started
            >
              <p key="1" data-id="1">
                Identity and Access Management
              </p>
              <p key="2" data-id="2">
                Infrastructure security
              </p>
              <p key="3" data-id="3">
                Application security
              </p>
              <p key="4" data-id="4">
                Resiliency
              </p>
              <p key="5" data-id="5">
                Governance
              </p>
            </Sortable>
          </div>
          <div className="col-sm-6 topics-selected col-md-5 col-6">
            <Sortable
              // [Optional] A tag or react component to specify the wrapping element. Defaults to "div".
              // In a case of a react component it is required to has children in the component
              // and pass it down.
              tag="div"
              options={{
                group: "shared",
                // Called when dragging element changes position
                // Element is dropped into the list from another list
                onAdd: function(/**Event*/ evt) {
                  let placehold = document.querySelectorAll(
                    `.topics-selected .placeholder:not(.d-none)`
                  )
                  console.log(placehold)
                  placehold[0].classList.add("d-none")
                  // same properties as onEnd
                },
                // Element is removed from the list into another list
                onRemove: function(/**Event*/ evt) {
                  let placehold = document.querySelectorAll(
                    `.topics-selected .placeholder.d-none`
                  )
                  placehold[0].classList.remove("d-none")

                  // same properties as onEnd
                },
              }}
            >
              <p key="1" data-id="1" className="placeholder"></p>
              <p key="1" data-id="1" className="placeholder"></p>
              <p key="1" data-id="1" className="placeholder"></p>
              <p key="1" data-id="1" className="placeholder"></p>
              <p key="1" data-id="1" className="placeholder"></p>
            </Sortable>
          </div>
        </div>
      </div>
    )
  }
}
