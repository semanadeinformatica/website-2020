import React from "react"
import { Link } from "gatsby"
import SoonStyles from "../../styles/soon.module.css"
import Icon from "../../images/svg/logo-outline-white.inline.svg"

//TODO change link to point to 2019 edition
const Brevemente = () => {
  return (
    <div className={SoonStyles.banner}>
      <Icon className={SoonStyles.banner_icon} />
      <h1 className={SoonStyles.title}>Brevemente | Coming Soon</h1>
      <Link className={SoonStyles.link} to="/">
        Edição 2019
      </Link>
    </div>
  )
}

export default Brevemente
