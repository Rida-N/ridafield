import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the about page</h1>
    <p>Welcome to page about</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
