import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="ReconAI (FinTech Dashboard)"
              description="An automated data reconciliation pipeline and React dashboard that detects transaction anomalies and utilizes Gemini LLM for root-cause analysis."
              ghLink="https://github.com/anshullakra007/ReconAI"
              demoLink="https://reconai-frontend.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Sentinel AI"
              description="An AI-powered autonomous SRE agent that ingests telemetry, performs semantic code retrieval via ChromaDB, and generates live diagnostic diffs."
              ghLink="https://github.com/anshullakra007/sentinel-ai"
              demoLink="https://huggingface.co/spaces/anshullakra8/sentinel-ai"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Distributed Code Engine"
              description="A high-performance remote code execution platform running isolated Docker containers."
              ghLink="https://github.com/anshullakra007/Distributed-Code-Execution-Engine"
              demoLink="https://distributed-code-execution-engine.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="SyncDraw"
              description="Collaborative whiteboard with zero-latency synchronization."
              ghLink="https://github.com/anshullakra007/syncdraw"
              demoLink="https://sync-draw-eight.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="MiniRedis"
              description="A multi-threaded in-memory key-value store built from scratch with a custom TCP Protocol."
              ghLink="https://github.com/anshullakra007/MiniRedis"
              demoLink="https://miniredis.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="L7 Load Balancer"
              description="A custom Reverse Proxy distributing traffic using lock-free Atomic counters."
              ghLink="https://github.com/anshullakra007/LoadBalancer"
              demoLink="https://loadbalancer-sgfp.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="System Design Platform"
              description="A comprehensive platform to master System Design, crafted to scale."
              ghLink="https://github.com/anshullakra007/system-design-learning-platform"
              demoLink="https://system-design-learning-platform-j6k3o771s.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="CodeLens AI"
              description="AI-driven code analysis tool for detecting bad code smells and recommending refactors."
              ghLink="https://github.com/anshullakra007/codelens-ai"
              demoLink="https://codelens-ai-ixqc.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Mission Tracker"
              description="A robust mission tracker built with a solid backend and responsive UI."
              ghLink="https://github.com/anshullakra007/mission-tracker"
              demoLink="https://mission-tracker-23p8jnmlr-anshul-kumars-projects-ece65eac.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Campus Records Manager"
              description="An administrative tool for managing courses and campus records effortlessly."
              ghLink="https://github.com/anshullakra007/CampusCourseRecordManager"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
