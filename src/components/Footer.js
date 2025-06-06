import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Let's Connect</h3>
          <p style={{ color: "lightgray" }}>
            Reach out for collaborations or opportunities.
          </p>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>© {year} Casey Soh</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/sohkachun"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/casey-soh-442098b9/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:kachun.soh@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                <AiOutlineMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
