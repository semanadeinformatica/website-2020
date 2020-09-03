import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

import SEO from "../components/common/seo"
import Layout from "../components/common/layout"

import Banner from "../components/mainpage/banner/banner"
import About from "../components/mainpage/about/about"
import Speakers from "../components/mainpage/speakers/speakers"
import Tickets from "../components/mainpage/tickets"
import Sponsors from "../components/mainpage/sponsors/sponsors"
import Contacts from "../components/mainpage/contacts/wrapper"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Layout>
      <Banner />
      <About />
      <Speakers />
      <Tickets />
      <Sponsors />
      <Contacts />
    </Layout>
  </div>
)
export default IndexPage
