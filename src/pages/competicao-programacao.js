import React from "react"

import SEO from "../components/common/seo"
import Layout from "../components/common/layout"

import Competition from "../components/competition/competition"
import PageBanner from "../components/utils/page_banner"

const CompetitionPage = () => (
  <Layout>
    <SEO title="Competição de programação" />
    <PageBanner title="Competição" />
    <Competition />
  </Layout>
)

export default CompetitionPage
