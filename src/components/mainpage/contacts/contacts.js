import React from "react"
import { Container, Col, Row } from "reactstrap"
import {
  FaEnvelope,
  FaLinkedin,
  FaFacebookSquare,
  FaMapMarkerAlt,
  FaInstagramSquare,
} from "react-icons/fa"

import ContactStyles from "../../../styles/mainpage/contacts.module.css"
import mainStyles from "../../../styles/mainpage/mainpage.module.css"

const links = [
  {
    icon: <FaEnvelope />,
    href: "mailto:geral@sinf.pt",
    text: "geral@sinf.pt",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/company/sinffeup/",
    text: "sinffeup",
  },
  {
    icon: <FaFacebookSquare />,
    href: "https://facebook.com/sinfFEUP",
    text: "sinffeup",
  },
  {
    icon: <FaInstagramSquare />,
    href: "https://facebook.com/sinfFEUP",
    text: "sinffeup",
  },
]

const Contacts = () => (
  <div>
    <Col className={ContactStyles.title_container}>
      <h2 className={mainStyles.h2}>
        Contactos <hr className={mainStyles.headingLine} />
      </h2>
    </Col>

    <Container>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {links.map((link, index) => {
          return (
            <a href={link.href} className={ContactStyles.link}>
              <span className={ContactStyles.icon}>{link.icon}</span>
              {link.text}
            </a>
          )
        })}
      </div>
    </Container>
  </div>
)

export default Contacts
