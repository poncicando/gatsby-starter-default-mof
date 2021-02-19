import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Bemvindo mai Pazina Foun Portal Ministeriu das Financas</h1>
    <p>Welcome to Our new MoF Site.</p>
    <p>This is under Development.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    
  </Layout>
)

export default IndexPage
