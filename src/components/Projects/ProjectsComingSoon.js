import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function ProjectsComingSoon() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Projects are currently being polished and will be showcased soon!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "100px" }}>
          <Col md={8} className="text-center">
            <h2 className="purple">🚧 Coming Soon 🚧</h2>
            <p style={{ fontSize: "1.3em", color: "white" }}>
              Stay tuned — exciting projects are on the way!
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectsComingSoon;