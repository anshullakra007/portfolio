import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import "./Resume.css";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container style={{ position: "relative", zIndex: 1 }}>
          {/* Action Buttons */}
          <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
            <a
              href="https://drive.google.com/file/d/1K3aQHBXub1pY9gxgln6xvyNBfvPcqrcr/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="resume-btn"
            >
              <AiOutlineDownload /> &nbsp; Download CV
            </a>
          </Row>

          {/* Resume Card */}
          <div className="resume-card">
            {/* Header */}
            <div className="resume-header">
              <h1 className="resume-name">Anshul Kumar</h1>
              <div className="resume-contact-row">
                <span><FaPhone /> +91 8307815380</span>
                <span><FaEnvelope /> anshullakra8@gmail.com</span>
                <a href="https://linkedin.com/in/anshulkumar07" target="_blank" rel="noreferrer">
                  <FaLinkedinIn /> linkedin.com/in/anshulkumar07
                </a>
                <a href="https://github.com/anshullakra007" target="_blank" rel="noreferrer">
                  <FaGithub /> github.com/anshullakra007
                </a>
              </div>
            </div>

            {/* Education */}
            <div className="resume-section-block">
              <h2 className="resume-section-title">Education</h2>
              <div className="resume-item">
                <div className="resume-item-header">
                  <span className="resume-org">Vellore Institute of Technology (VIT)</span>
                  <span className="resume-date">Sep 2023 – Jan 2027</span>
                </div>
                <div className="resume-item-sub">
                  <span>B.Tech in Computer Science and Engineering &nbsp; | &nbsp; CGPA: 9.11/10.0</span>
                  <span className="resume-location">Bhopal, India</span>
                </div>
                <p className="resume-coursework">
                  <em>Relevant Coursework:</em> Object-Oriented Programming, Data Structures &amp; Algorithms, Operating Systems, Computer Networks, DBMS, System Design
                </p>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="resume-section-block">
              <h2 className="resume-section-title">Technical Skills</h2>
              <table className="skills-table">
                <tbody>
                  <tr>
                    <td><strong>Languages</strong></td>
                    <td>Java (JDK 21), C++ (STL), JavaScript (ES6+), Python, SQL, C</td>
                  </tr>
                  <tr>
                    <td><strong>Backend &amp; Systems</strong></td>
                    <td>Spring Boot 3, Docker, Microservices, Raw Sockets, Multithreading, TCP/IP, ThreadPoolExecutor</td>
                  </tr>
                  <tr>
                    <td><strong>Frontend &amp; Web</strong></td>
                    <td>React.js, Node.js, Socket.io, Tailwind CSS, WebSockets, REST APIs</td>
                  </tr>
                  <tr>
                    <td><strong>Tools &amp; OS</strong></td>
                    <td>Git, GitHub, Linux, Postman, VS Code</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Experience */}
            <div className="resume-section-block">
              <h2 className="resume-section-title">Experience</h2>
              <div className="resume-item">
                <div className="resume-item-header">
                  <span className="resume-org">EPICS Initiative: Pumie (Slime)</span>
                  <span className="resume-date">Feb 2025 – Mar 2026</span>
                </div>
                <div className="resume-item-sub">
                  <span className="resume-role">Frontend Developer &amp; UI Designer</span>
                  <span className="resume-location">VIT Bhopal</span>
                </div>
                <ul className="resume-bullets">
                  <li>Spearheaded the frontend architecture for the Slime visual workflow project using React, improving application load times by 35% and decreasing client-side rendering latency by 15%.</li>
                  <li>Collaborated cross-functionally with 4 backend engineers to integrate RESTful APIs, utilizing Git version control and deploying 15+ production updates.</li>
                </ul>
              </div>
            </div>

            {/* Open Source Contributions */}
            <div className="resume-section-block">
              <h2 className="resume-section-title">Open Source Contributions</h2>

              <div className="resume-item">
                <div className="resume-item-header">
                  <span className="resume-org">redis / jedis &nbsp;
                    <a href="https://github.com/redis/jedis/pull/4645" target="_blank" rel="noreferrer"><FaGithub /></a>
                  </span>
                  <span className="resume-date">Open PR #4645</span>
                </div>
                <div className="resume-item-sub">
                  <span className="resume-role">Official Java Client for Redis</span>
                </div>
                <ul className="resume-bullets">
                  <li><strong>fix(cluster): prevent lock-inversion deadlock in MultiNodePipelineBase (#4557)</strong></li>
                  <li>Investigated and resolved a critical multi-threading lock-inversion deadlock bug in Redis cluster pipeline execution (<code>MultiNodePipelineBase</code>).</li>
                  <li>Improved thread-safe connection pool acquisition ordering under high-concurrency multi-node environments.</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <span className="resume-org">TheAlgorithms / Java &nbsp;
                    <a href="https://github.com/TheAlgorithms/Java/pull/7544" target="_blank" rel="noreferrer"><FaGithub /></a>
                  </span>
                  <span className="resume-date">Merged PR #7544</span>
                </div>
                <div className="resume-item-sub">
                  <span className="resume-role">200k+ Star Open Source Algorithms Library</span>
                </div>
                <ul className="resume-bullets">
                  <li><strong>Add Concurrent Merge Sort Implementation</strong></li>
                  <li>Engineered a high-performance multi-threaded Concurrent Merge Sort algorithm using Java's <code>ForkJoinPool</code> and recursive task splitting to maximize CPU utilization on multi-core architectures.</li>
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div className="resume-section-block">
              <h2 className="resume-section-title">Technical Projects</h2>

              <div className="resume-item">
                <div className="resume-item-header">
                  <span className="resume-org">Distributed Code Engine &nbsp;
                    <a href="https://github.com/anshullakra007/Distributed-Code-Execution-Engine" target="_blank" rel="noreferrer"><FaGithub /></a>
                  </span>
                  <span className="resume-date">Oct 2025 – Nov 2025</span>
                </div>
                <div className="resume-item-sub">
                  <span className="resume-role">Java, Spring Boot, Docker, React</span>
                </div>
                <ul className="resume-bullets">
                  <li>Architected a remote code execution API capable of compiling and running Python, C++, and Java, maintaining a 100% execution success rate during concurrent load testing.</li>
                  <li>Optimized Python execution streams to achieve a peak throughput of 130.64 req/s, recording a highly efficient mean latency of 70.48 ms.</li>
                  <li>Engineered concurrent process management using Java ProcessBuilder to handle heavy multi-threaded compilation workloads for C++ (g++ 17) and Java (JDK 21).</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <span className="resume-org">MiniRedis &nbsp;
                    <a href="https://github.com/anshullakra007/MiniRedis" target="_blank" rel="noreferrer"><FaGithub /></a>
                  </span>
                  <span className="resume-date">Sep 2025 – Oct 2025</span>
                </div>
                <div className="resume-item-sub">
                  <span className="resume-role">Java, Raw Sockets, Concurrency</span>
                </div>
                <ul className="resume-bullets">
                  <li>Built a multi-threaded server capable of concurrently handling 500+ clients, achieving 94,000+ operations/sec over raw TCP sockets.</li>
                  <li>Designed a custom TCP protocol to handle continuous client-server data exchange, achieving sub-millisecond mean interaction (0.05ms) under high load contention.</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <span className="resume-org">Sentinel AI &nbsp;
                    <a href="https://github.com/anshullakra007/sentinel-ai" target="_blank" rel="noreferrer"><FaGithub /></a>
                  </span>
                  <span className="resume-date">Jan 2026 – Jul 2026</span>
                </div>
                <div className="resume-item-sub">
                  <span className="resume-role">Python, FastAPI, ChromaDB, Gemini</span>
                </div>
                <ul className="resume-bullets">
                  <li>Built an AI-powered observability platform that ingests production crash logs, performs semantic code retrieval using ChromaDB, and generates structured root cause analyses and patch recommendations with Gemini.</li>
                  <li>Designed an asynchronous FastAPI telemetry pipeline with crash deduplication and vector search to reduce diagnosis latency for repeated incidents.</li>
                </ul>
              </div>
              <div className="resume-item">
                <div className="resume-item-header">
                  <span className="resume-org">ReconAI (FinTech Dashboard) &nbsp;
                    <a href="https://github.com/anshullakra007/ReconAI" target="_blank" rel="noreferrer"><FaGithub /></a>
                  </span>
                  <span className="resume-date">Aug 2025 – Sep 2025</span>
                </div>
                <div className="resume-item-sub">
                  <span className="resume-role">React.js, Node.js, Gemini LLM</span>
                </div>
                <ul className="resume-bullets">
                  <li>An automated data reconciliation pipeline and React dashboard that detects transaction anomalies and utilizes Gemini LLM for root-cause analysis.</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <span className="resume-org">FinTech Churn &amp; Impact Analyzer &nbsp;
                    <a href="https://github.com/anshullakra007/fintech-churn-analyzer" target="_blank" rel="noreferrer"><FaGithub /></a>
                  </span>
                  <span className="resume-date">Aug 2025 – Sep 2025</span>
                </div>
                <div className="resume-item-sub">
                  <span className="resume-role">Python, Streamlit, Random Forest, Gemini API</span>
                </div>
                <ul className="resume-bullets">
                  <li>An AI-powered operational CRM and analytics dashboard that quantifies revenue at risk from payment gateway failures and predicts user churn via Random Forest.</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <span className="resume-org">SyncDraw &nbsp;
                    <a href="https://github.com/anshullakra007/syncdraw" target="_blank" rel="noreferrer"><FaGithub /></a>
                  </span>
                  <span className="resume-date">Jul 2025 – Aug 2025</span>
                </div>
                <div className="resume-item-sub">
                  <span className="resume-role">React.js, WebSockets, Node.js</span>
                </div>
                <ul className="resume-bullets">
                  <li>Collaborative whiteboard with zero-latency synchronization.</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <span className="resume-org">L7 Load Balancer &nbsp;
                    <a href="https://github.com/anshullakra007/LoadBalancer" target="_blank" rel="noreferrer"><FaGithub /></a>
                  </span>
                  <span className="resume-date">Jun 2025 – Jul 2025</span>
                </div>
                <div className="resume-item-sub">
                  <span className="resume-role">C++, Multithreading, TCP/IP</span>
                </div>
                <ul className="resume-bullets">
                  <li>A custom Reverse Proxy distributing traffic using lock-free Atomic counters.</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <span className="resume-org">System Design Platform &nbsp;
                    <a href="https://github.com/anshullakra007/system-design-learning-platform" target="_blank" rel="noreferrer"><FaGithub /></a>
                  </span>
                  <span className="resume-date">May 2025 – Jun 2025</span>
                </div>
                <div className="resume-item-sub">
                  <span className="resume-role">React.js, Node.js, Express</span>
                </div>
                <ul className="resume-bullets">
                  <li>A comprehensive platform to master System Design, crafted to scale.</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <span className="resume-org">CodeLens AI &nbsp;
                    <a href="https://github.com/anshullakra007/codelens-ai" target="_blank" rel="noreferrer"><FaGithub /></a>
                  </span>
                  <span className="resume-date">Mar 2025 – Apr 2025</span>
                </div>
                <div className="resume-item-sub">
                  <span className="resume-role">Python, FastAPI, React.js</span>
                </div>
                <ul className="resume-bullets">
                  <li>AI-driven code analysis tool for detecting bad code smells and recommending refactors.</li>
                </ul>
              </div>
            </div>

            {/* Certifications */}
            <div className="resume-section-block">
              <h2 className="resume-section-title">Certifications</h2>
              <ul className="resume-bullets">
                <li><strong>AWS Certified Solutions Architect – Associate</strong> — Amazon Web Services (AWS) &nbsp;<em>(Jul 2026, expires Jul 2029)</em></li>
                <li><strong>Networking Basics</strong> — Cisco &nbsp;<em>(Apr 2026)</em></li>
                <li><strong>Cyber Security Analyst (CCSA)</strong> — IBM Career Education Program &nbsp;<em>(Jun 2025)</em></li>
                <li><strong>Blockchain and its Applications</strong> — NPTEL / IIT Madras</li>
              </ul>
            </div>

            {/* Achievements */}
            <div className="resume-section-block">
              <h2 className="resume-section-title">Achievements</h2>
              <ul className="resume-bullets">
                <li>
                  <SiCodeforces style={{ color: "#1F8ACB" }} /> &nbsp;
                  <strong>Competitive Programming:</strong> Achieved <strong>Pupil</strong> rank on Codeforces (Peak: <strong>1289</strong>) and a <strong>1456</strong> contest rating on LeetCode. Solved <strong>360+ DSA problems</strong> using C++ (STL).
                </li>
                <li>Cleared <strong>118 Medium and Hard</strong> challenges. Secured global rank <strong>2185</strong> in Educational CF Round 190.</li>
              </ul>
            </div>
          </div>


        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
