import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiMacos,
  SiIntellijidea
} from "react-icons/si";
import { DiGit } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
        <div className="tech-icons-text">Mac OS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
        <div className="tech-icons-text">IntelliJ</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <div className="tech-icons-text">Vercel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div className="tech-icons-text">Postman</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
