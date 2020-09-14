import React from "react"
import Img from "gatsby-image"
import { FaLinkedin, FaTwitter, FaGithubSquare } from "react-icons/fa"

import WebIcon from "../../images/svg/web_icon.inline.svg"

import OverlayStyles from "../../styles/team/member_overlay.module.css"

const colors = [
  OverlayStyles.bg1,
  OverlayStyles.bg2,
  OverlayStyles.bg3,
  OverlayStyles.bg4,
]

const MemberOverlay = ({
  name,
  image,
  color,
  linkedin,
  twitter,
  github,
  website,
}) => (
  <div className={OverlayStyles.container}>
    <Img fluid={image} className={OverlayStyles.image} />
    <div className={OverlayStyles.link_overlay + " " + OverlayStyles.overlay}>
      <div className={OverlayStyles.links}>
        {linkedin ? (
          <a href={linkedin} className={OverlayStyles.link}>
            <FaLinkedin />
          </a>
        ) : (
          ""
        )}
        {twitter ? (
          <a href={twitter} className={OverlayStyles.link}>
            <FaTwitter />
          </a>
        ) : (
          ""
        )}
        {github ? (
          <a href={github} className={OverlayStyles.link}>
            <FaGithubSquare />
          </a>
        ) : (
          ""
        )}
        {website ? (
          <a href={website} className={OverlayStyles.link}>
            <WebIcon className={OverlayStyles.webIcon} />
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
    <div
      className={
        OverlayStyles.info_overlay +
        " " +
        OverlayStyles.overlay +
        " " +
        colors[color]
      }
    >
      <div>{name}</div>
    </div>
    <div
      className={
        OverlayStyles.color_overlay +
        " " +
        OverlayStyles.overlay +
        " " +
        colors[color]
      }
    ></div>
  </div>
)

export default MemberOverlay
