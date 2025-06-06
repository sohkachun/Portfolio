import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdfDS from "../../Assets/../Assets/casey_resume.pdf";
import pdfDA from "../../Assets/../Assets/casey_resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Data Science Resume */}
        <Row className="text-center mb-3">
          <Col>
            <h2 className="purple">Data Science Resume</h2>
            <Button variant="primary" href={pdfDS} target="_blank" style={{ maxWidth: "250px" }}>
              <AiOutlineDownload />
              &nbsp;Download
            </Button>
          </Col>
        </Row>
        <Row className="resume mb-5">
          <Col className="d-flex justify-content-center">
            <Document file={pdfDS}>
              <Page pageNumber={1} scale={width > 786 ? 1.2 : 0.6} />
            </Document>
          </Col>
        </Row>

        {/* Data Analyst Resume */}
        <Row className="text-center mb-3">
          <Col>
            <h2 className="purple">Data Analyst Resume</h2>
            <Button variant="primary" href={pdfDA} target="_blank" style={{ maxWidth: "250px" }}>
              <AiOutlineDownload />
              &nbsp;Download
            </Button>
          </Col>
        </Row>
        <Row className="resume">
          <Col className="d-flex justify-content-center">
            <Document file={pdfDA}>
              <Page pageNumber={1} scale={width > 786 ? 1.2 : 0.6} />
            </Document>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
