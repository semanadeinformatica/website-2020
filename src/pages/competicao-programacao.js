import React from "react"

import SEO from "../components/common/seo"
import Layout from "../components/common/layout"

import Competition from "../components/competition/competition"
import PageBanner from "../components/utils/page_banner"

const CompetitionPage = () => (
  <Layout>
    <SEO title="Competição de programação" />
    <PageBanner>
      <h1>Competição de Programação</h1>
    </PageBanner>
    <Competition />
  </Layout>
)

export default CompetitionPage
