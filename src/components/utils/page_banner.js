import React from "react"

import BannerStyles from "../../styles/utils/page_banner.module.css"

const PageBanner = ({ title }) => {
  return <div className={BannerStyles.container}>{title}</div>
}

export default PageBanner
