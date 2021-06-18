import * as React from "react"
import {title,cards} from '../layouts/index.css'


// styles


const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  paddingLeft: 0,
}
const listItemStyle = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  display: "inline-block",
  marginRight: 30,
  marginTop:0
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
  textDecoration: "none",
  paddingTop:10,
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// markup
const Showcase = ({data}) => {
  return (
    <div>
        <ul style={listStyles}>
        <li style={listItemStyle}>
        <a style={linkStyle} href='/viz'>Data Viz</a>
        </li>
        <li style={listItemStyle}>
        <a style={linkStyle} href="/projects">Projects</a>
        </li>
        <li style={listItemStyle}>
        <a style={linkStyle} href="/blogs">My Notes</a>
        </li>
        <li style={listItemStyle}>
        <a style={linkStyle} href="/about">About me</a>
        </li>
        </ul>
    </div>
  )
}
export default Showcase
