import React from "react"
import Row from "react-bootstrap/Row"
import ParticipateStyles from "../../styles/talk/participate.module.css"

const Participate = ({ href }) => {
  return (
    <Row className={ParticipateStyles.container}>
      <a href={href} className={ParticipateStyles.link}>
        Participar
      </a>
    </Row>
  )
}

export default Participate
