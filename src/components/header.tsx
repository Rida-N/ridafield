import { Link } from "gatsby"
import React from "react"

type Props = { title: string; description: string }

const Header: React.FC<Props> = siteMetadata => {
  const logo = require("../images/ridafield.ico")

  const style_p = {
    color: "gray",
    fontSize: "1.5rem",
    margin: "1rem",
  }

  return (
    <header
      style={{
        background: `#000000cc`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0, display: "flex", alignItems: "end" }}>
          <img
            src={logo}
            style={{
              borderRadius: "50%",
              background: "white",
              border: ".3rem solid white",
              maxWidth: " 8rem",
              marginRight: "2rem",
            }}
          />
          <div>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
                margin: "1rem",
              }}
            >
              {siteMetadata.title}
            </Link>
            <p style={style_p}>{siteMetadata.description}</p>
            {/* <h1>You need to understand the durable, lasting insights underlying how things work. Technologies come and technologies go, but insight is forever.</h1> */}
            <p
              style={{
                color: "#c1c1c1",
                fontSize: "1rem",
                margin: "1rem",
              }}
            >
              - Fragments of technical study notes, art works, and all sorts of
              mind-wandering.
            </p>
          </div>
        </h1>
      </div>
    </header>
  )
}

export default Header
