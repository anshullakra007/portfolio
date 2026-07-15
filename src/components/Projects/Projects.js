import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import reconai from "../../Assets/Projects/reconai.png";
import sentinel_ai from "../../Assets/Projects/sentinel_ai.png";
import code_engine from "../../Assets/Projects/code_engine.png";
import syncdraw from "../../Assets/Projects/syncdraw.png";
import miniredis from "../../Assets/Projects/miniredis.png";
import loadbalancer from "../../Assets/Projects/loadbalancer.png";
import system_design from "../../Assets/Projects/system_design.png";
import codelens from "../../Assets/Projects/codelens.png";
import mission_tracker from "../../Assets/Projects/mission_tracker.png";
import campus_records from "../../Assets/Projects/campus_records.png";

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
              imgPath={reconai}
              isBlog={false}
              title="ReconAI (FinTech Dashboard)"
              description="An automated data reconciliation pipeline and React dashboard that detects transaction anomalies and utilizes Gemini LLM for root-cause analysis."
              ghLink="https://github.com/anshullakra007/ReconAI"
              demoLink="https://frontend-fawn-five-21.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentinel_ai}
              isBlog={false}
              title="Sentinel AI"
              description="An AI-powered autonomous SRE agent that ingests telemetry, performs semantic code retrieval via ChromaDB, and generates live diagnostic diffs."
              ghLink="https://github.com/anshullakra007/sentinel-ai"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={code_engine}
              isBlog={false}
              title="Distributed Code Engine"
              description="A high-performance remote code execution platform running isolated Docker containers."
              ghLink="https://github.com/anshullakra007/Distributed-Code-Execution-Engine"
              demoLink="https://distributed-code-execution-engine.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={syncdraw}
              isBlog={false}
              title="SyncDraw"
              description="Collaborative whiteboard with zero-latency synchronization."
              ghLink="https://github.com/anshullakra007/syncdraw"
              demoLink="https://sync-draw-eight.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={miniredis}
              isBlog={false}
              title="MiniRedis"
              description="A multi-threaded in-memory key-value store built from scratch with a custom TCP Protocol."
              ghLink="https://github.com/anshullakra007/MiniRedis"
              demoLink="https://miniredis.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loadbalancer}
              isBlog={false}
              title="L7 Load Balancer"
              description="A custom Reverse Proxy distributing traffic using lock-free Atomic counters."
              ghLink="https://github.com/anshullakra007/LoadBalancer"
              demoLink="https://loadbalancer-sgfp.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={system_design}
              isBlog={false}
              title="System Design Platform"
              description="A comprehensive platform to master System Design, crafted to scale."
              ghLink="https://github.com/anshullakra007/system-design-learning-platform"
              demoLink="https://system-design-learning-platform.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codelens}
              isBlog={false}
              title="CodeLens AI"
              description="AI-driven code analysis tool for detecting bad code smells and recommending refactors."
              ghLink="https://github.com/anshullakra007/codelens-ai"
              demoLink="https://codelens-ai-ixqc.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mission_tracker}
              isBlog={false}
              title="Mission Tracker"
              description="A robust mission tracker built with a solid backend and responsive UI."
              ghLink="https://github.com/anshullakra007/mission-tracker"
              demoLink="https://mission-tracker-ebon.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={campus_records}
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
