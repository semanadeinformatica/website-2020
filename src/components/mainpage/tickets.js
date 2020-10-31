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
        href="https://sinf2020.webex.com/sinf2020/onstage/g.php?PRID=9f676374423b492057001485c2a6be9e"
        target="_blank"
        rel="noopener noreferrer"
      >
        Inscreve-te
      </a>
    </Container>
  </section>
)

export default Tickets
