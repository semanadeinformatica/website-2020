import React from "react"

import MemberOverlay from "./member_overlay"

const Member = ({ data, color }) => {
  return (
    <MemberOverlay
      name={data.name}
      image={data.img.childImageSharp.fluid}
      color={color}
      linkedin={data.linkedin}
      github={data.github}
      website={data.website}
    />
  )
}

export default Member
