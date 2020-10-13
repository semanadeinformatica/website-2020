import React from "react"
import { FaLinkedin, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa"
import BannerStyles from "../../../styles/mainpage/banner.module.css"

const links = [
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/company/sinffeup/",
  },
  {
    icon: <FaFacebookSquare />,
    href: "https://facebook.com/sinfFEUP",
  },
  {
    icon: <FaInstagramSquare />,
    href: "https://instagram.com/sinffeup",
  },
]

const BasicInfo = () => {
  return (
    <div className={BannerStyles.info}>
      <p>3ª EDIÇÃO</p>
      <p>9 A 11 DE NOVEMBRO</p>
      <div className={BannerStyles.icon_links}>
        {links.map(({ icon, href }, index) => (
          <a href={href} className={BannerStyles.icon_link} key={index}>
            {icon}
          </a>
        ))}
      </div>
    </div>
  )
}

export default BasicInfo
