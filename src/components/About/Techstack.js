import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  DiDocker,
} from "react-icons/di";
import {
  SiSpringboot,
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <div className="tech-icons-text">C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
        <div className="tech-icons-text">Spring Boot</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="tech-icons-text">React.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div className="tech-icons-text">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <div className="tech-icons-text">SQL</div>
      </Col>
    </Row>
  );
}

export default Techstack;
