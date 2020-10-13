import React from "react"
import { FaLinkedin, FaTwitter, FaGithubSquare } from "react-icons/fa"
import WebIcon from "../../images/svg/web_icon.inline.svg"

import LinkStyles from "../../styles/utils/link_list.module.css"

const LinksList = ({ linkedin, twitter, github, website }) => (
  <div className={LinkStyles.links}>
    {linkedin ? (
      <a href={linkedin} className={LinkStyles.link}>
        <FaLinkedin />
      </a>
    ) : (
      ""
    )}
    {twitter ? (
      <a href={twitter} className={LinkStyles.link}>
        <FaTwitter />
      </a>
    ) : (
      ""
    )}
    {github ? (
      <a href={github} className={LinkStyles.link}>
        <FaGithubSquare />
      </a>
    ) : (
      ""
    )}
    {website ? (
      <a href={website} className={LinkStyles.link}>
        <WebIcon className={LinkStyles.webIcon} />
      </a>
    ) : (
      ""
    )}
  </div>
)

export default LinksList
