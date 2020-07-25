import React from "react"
import SoonStyles from "../../styles/soon.module.css"
import Icon from "../../images/svg/logo-outline-white.inline.svg"

const Brevemente = () => {
  return (
    <div className={SoonStyles.banner}>
      <Icon className={SoonStyles.banner_icon} />
      <h1 className={SoonStyles.title}>Brevemente | Coming Soon</h1>
      <a className={SoonStyles.link} href="https://2019.sinf.pt">
        Edição 2019
      </a>
    </div>
  )
}

export default Brevemente
