import React from "react"
import { Container, Row, Col } from "reactstrap"
import SoonStyles from "../../styles/soon.module.css"

import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai"

const links = [
  {
    icon: <AiOutlineLinkedin />,
    href: "https://www.linkedin.com/company/sinffeup/",
  },
  {
    icon: <AiOutlineFacebook />,
    href: "https://facebook.com/sinfFEUP",
  },
  {
    icon: <AiOutlineInstagram />,
    href: "https://www.instagram.com/sinffeup/",
  },
]

const Info = () => {
  return (
    <Container fluid>
      <Row className={SoonStyles.info}>
        <Col xs="12">
          <div className={SoonStyles.text_info + " " + SoonStyles.left_text}>
            <h4 className={SoonStyles.info_title}>Visita a nossa página!</h4>
            <div className={SoonStyles.icon_links}>
              {links.map(({ icon, href }) => (
                <a href={href} className={SoonStyles.icon_link} key={href}>
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Info
