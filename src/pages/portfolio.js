import React from "react"
import { Link } from "gatsby"
import PortfolioBG from "../components/page_layouts/portfolio_bg"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <PortfolioBG />
  </Layout>
)

export default Portfolio
