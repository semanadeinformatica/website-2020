import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import ParticipateStyles from "../../styles/utils/participate.module.css"

const Participate = ({ link }) => {
  if (!link) return null

  return (
    <div className={ParticipateStyles.participateSection + " container-fluid"}>
      <Container>
        <Row>
          <Col xs="12" className={ParticipateStyles.colContent}>
            <Button
              href={link}
              outline
              className={ParticipateStyles.participateButton + " mt-4"}
            >
              Participar
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Participate
