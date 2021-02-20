import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      background: `#530052`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1200,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}

        </Link>
      </h1>
         © {new Date().getFullYear()}, All Copyrights Reserved
          {` `}
          <a href="https://www.mof.gov.tl">Ministeriu das Financas</a>
    </div>
  </footer>
)

export default Footer
