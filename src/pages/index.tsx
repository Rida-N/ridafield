import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>One who makes no mistakes makes nothing at all.</h1>
    {/* <h1>You need to understand the durable, lasting insights underlying how things work. Technologies come and technologies go, but insight is forever.</h1> */}
    <p>Fragments of technical study notes, art works, and all sorts of mind-wandering.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/fibonacci/">Fibonacci</Link> 
    
  </Layout>
)

export default IndexPage
