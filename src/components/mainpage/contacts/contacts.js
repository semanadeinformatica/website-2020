import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
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
  <Col className={ContactStyles.title_container}>
    <h2 className={mainStyles.h2}>
      Contactos <hr className={mainStyles.headingLine} />
    </h2>
    <Container>
      <div className={ContactStyles.linkContainer}>
        {links.map((link, index) => {
          return (
            <a
              href={link.href}
              className={ContactStyles.link}
              style={{ justifySelf: index % 2 === 0 ? "start" : "end" }}
            >
              <span className={ContactStyles.icon}>{link.icon}</span>
              {link.text}
            </a>
          )
        })}
      </div>
    </Container>
  </Col>
)

export default Contacts
