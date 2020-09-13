import React from "react"
import SingleSponsor from "./single-sponsor"
import sponsorsStyles from "../../../styles/mainpage/sponsors.module.css"
import Carousel from "../../utils/carousel"

export const getSponsors = (data, type) => {
  return data.allMarkdownRemark.edges
    .filter(({ node }) => node.frontmatter.type === type)
    .map(({ node }) => (
      <SingleSponsor
        key={node.frontmatter.name}
        sponsor={node.frontmatter}
        type={type}
      />
    ))
}

const SponsorSection = ({ sponsorData, type }) => {
  let wrapperType, numDesktop

  if (type === "gold") {
    wrapperType = sponsorsStyles.goldWrapper
    numDesktop = sponsorData.length < 2 ? sponsorData.length : 2
  } else if (type === "silver") {
    wrapperType = sponsorsStyles.silverWrapper
    numDesktop = sponsorData.length < 3 ? sponsorData.length : 3
  } else {
    wrapperType = sponsorsStyles.bronzeWrapper
    numDesktop = sponsorData.length < 5 ? sponsorData.length : 5
  }

  return (
    numDesktop > 0 && (
      <div className={[sponsorsStyles.otherSponsors, wrapperType].join(" ")}>
        <Carousel
          numMobileItems={1}
          numTabletItems={1}
          numDesktopItems={numDesktop}
          auto={true}
        >
          {sponsorData}
        </Carousel>
      </div>
    )
  )
}

export default SponsorSection
