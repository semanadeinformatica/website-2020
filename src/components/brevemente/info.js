import React from "react"
import { Container, Row, Col } from "reactstrap"
import SoonStyles from "../../styles/soon.module.css"
import {
  FaLinkedin,
  FaFacebookSquare,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa"

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
    icon: <FaInstagram />,
    href: "https://www.instagram.com/niaefeup",
  },
  //{
  //  icon: <FaEnvelope />,
  //  href: "mailto:geral@sinf.pt",
  //},
]

//TODO change social media link icons

const Info = () => {
  return (
    <Container fluid>
      <Row className={SoonStyles.info}>
        <Col xs="12">
          <div className={SoonStyles.text_info + " " + SoonStyles.left_text}>
            <h4 className={SoonStyles.info_title}>Visita a nossa página!</h4>
            <div className={SoonStyles.icon_links}>
              {links.map(({ icon, href }, index) => (
                <a href={href} className={SoonStyles.icon_link} key={index}>
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
