import React from "react"
import Img from "gatsby-image"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import AboutStyles from "../../../styles/mainpage/about.module.css"
import mainStyles from "../../../styles/mainpage/mainpage.module.css"

import { useAboutUsImages } from "../../hooks/about-us-query"

const About = () => {
  const data = useAboutUsImages()
  const flex = ["start", "center", "end"]

  return (
    <div className={AboutStyles.aboutContainer} id="sobre-nos">
      <Container>
        <h2 className={mainStyles.h2}>
          Sobre nós
          <hr className={mainStyles.headingLine} />
        </h2>
        <Row className="mt-5">
          <Col xs="12" md="6">
            <p>
              A Semana de Informática (SINF), organizada pelo Núcleo de
              Informática da Associação de Estudantes da Faculdade de Engenharia
              da Universidade do Porto (
              <a
                href="https://ni.fe.up.pt/"
                rel="noopener noreferrer"
                target="_blank"
              >
                NIAEFEUP
              </a>
              ), foi criada com o intuito de permitir aos estudantes,
              independentemente do curso, desenvolver as suas capacidades nas
              diversas áreas da Informática, promovendo a sua interação com o
              mundo empresarial através de eventos sociais.
            </p>
            <p>
              A edição de 2020 decorre entre os dias 9 a 11 de novembro, em modo{" "}
              <em>remote</em>. Os participantes têm a seu dispor palestras e
              workshops onde entrarão em contacto com diversas tecnologias e
              conceitos que não intervêm no percurso académico, focando-se
              portanto nas skills técnicas, assim como um pitch e sessões de
              entrevistas, fomentando o seu contacto com empresas de topo a
              nível nacional e internacional, podendo desenvolver as suas soft
              skills.
            </p>
          </Col>
          <Col xs="12" md="6">
            <Row className={AboutStyles.imageContainer}>
              {data.allFile.edges.map((pic, i) => (
                <Col
                  className={`d-flex justify-content-center align-items-${flex[i]}`}
                >
                  <Img fixed={pic.node.childImageSharp.fixed} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
