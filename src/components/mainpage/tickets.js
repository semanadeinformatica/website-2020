import React from "react"
import Container from "react-bootstrap/Container"
import ticketsStyles from "../../styles/mainpage/tickets.module.css"

const Tickets = () => (
  <section id="tickets" className={ticketsStyles.section}>
    <Container>
      <h3 className={ticketsStyles.lead}>
        Não vais querer perder esta edição da SINF!
      </h3>
      <a
        className={ticketsStyles.signUp}
        href="https://www.eventbrite.com/e/semana-de-informatica-2019-tickets-74550752307"
        target="_blank"
        rel="noopener noreferrer"
      >
        Inscreve-te
      </a>
    </Container>
  </section>
)

export default Tickets
