import React from "react"
import { Link } from "gatsby"

export default function item(props) {
  return (
    <li className="nav-item">
      <Link exact to={props.path} activeClassName="active" className="nav-link">
        {props.title}
      </Link>
    </li>
  )
}
