import * as React from "react"
import {title,cards} from '../layouts/index.css'
import Blogs from '../layouts/bloglist.js'
import mario from '../images/Mario.png'
import mario1 from '../images/Mario1.png'
import Showcase from '../layouts/showcase.js'

// styles

const pageStyles = {
  color: "#232129",
  padding: 70,
  fontFamily: "Raleway, sans-serif",
  // textAlign: "center",
}
const headingStyles = {
  marginTop: 100,
  marginBottom: 64,
  fontWeight: "lighter",
  fontSize: "50px",
  fontFamily: "'Major Mono Display', monospace",
}
const headingStyles1 = {
  marginTop: 30,
  marginBottom: 24,
  fontSize:"1.5rem",
  fontWeight: "lighter"
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
  fontSize:"1.3rem",
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  paddingLeft: 0,
  paddingBottom:0,
}
const listItemStyle = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  display: "inline-block",
  marginRight: 30,
  paddingBottom:0,
}

const linkStyle = {
  color: "#cbbccc",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
  textDecoration: "none",
  paddingTop:10,
  paddingBottom:0,
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
const IndexPage = ({data}) => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 className={title} style={headingStyles}>
        INARTICULATUS
      </h1>
      <br />
      <br />
      <h2 style={headingStyles1}>
        <span style={headingAccentStyles}>Programmer  |  </span>
        <span style={headingAccentStyles}>DataViz Geek  |  </span>
        <span style={headingAccentStyles}>Science Enthusiast</span>
      </h2>
      <Showcase />
        <ul style={listStyles}>
        <li style={listItemStyle}>
        <a style={linkStyle} href="https://github.com/inarticulatus">Github</a>
        </li>
        <li style={listItemStyle}>
        <a style={linkStyle} href="https://www.linkedin.com/in/utkarshtripathi7">LinkedIn</a>
        </li>
        <li style={listItemStyle}>
        <a style={linkStyle} href="mailto:inarticulatus@gmail.com">inarticulatus@gmail.com</a>
        </li>
        </ul>
      { /*<Blogs />
       <div className="cards">
        <img src={natElec} className="gridImage" alt="National Electricity Demands Trend"/>
        <img src={mario} className="gridImage" alt="National Electricity Demands Trend"/>
        </div> */}
    </main>
  )
}
export default IndexPage
