# Anshul Kumar
**Full Stack & Distributed Systems Engineer**  
📞 +91 8307815380 | 📧 [anshullakra8@gmail.com](mailto:anshullakra8@gmail.com)  
🌐 [LinkedIn](https://linkedin.com/in/anshulkumar07) | 🐙 [GitHub](https://github.com/anshullakra007) | 🏆 [Codeforces](https://codeforces.com/profile/anshullakra8)

---

## 🎓 Education

### **Vellore Institute of Technology (VIT)** — *Bhopal, India*
- **B.Tech in Computer Science and Engineering** | **CGPA: 9.11/10.0** *(Sep 2023 – Jan 2027)*
- **Relevant Coursework:** Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Computer Networks, DBMS, Distributed Systems, System Design

---

## 🛠️ Technical Skills

- **Languages:** Java (JDK 21), C++ (STL), Python, JavaScript (ES6+), SQL, C
- **Backend & Systems:** Spring Boot 3, FastAPI, Node.js, Express, Docker, Multi-threading, Raw Sockets, TCP/IP, Concurrency (`ConcurrentHashMap`, `ThreadPoolExecutor`), Microservices
- **Frontend & Web:** React.js, Tailwind CSS, Socket.io, WebSockets, HTML5/CSS3, REST APIs
- **Databases & Tools:** MySQL, ChromaDB (Vector DB), MongoDB, Redis, Git, GitHub, Linux, Postman, VS Code, Render, Vercel

---

## 🌍 Open Source Contributions

### **[redis/jedis](https://github.com/redis/jedis)** *(Official Java Client for Redis)*
- **Pull Request:** [fix(cluster): prevent lock-inversion deadlock in MultiNodePipelineBase (#4557)](https://github.com/redis/jedis/pull/4645) *(Open)*
  - Investigated and resolved a critical multi-threading lock-inversion deadlock bug in Redis cluster pipeline execution (`MultiNodePipelineBase`).
  - Improved thread-safe connection pool acquisition ordering under high-concurrency multi-node environments.

### **[TheAlgorithms/Java](https://github.com/TheAlgorithms/Java)** *(200k+ Star Open Source Algorithms Library)*
- **Pull Request:** [Add Concurrent Merge Sort Implementation](https://github.com/TheAlgorithms/Java/pull/7544) *(Merged)*
  - Engineered a high-performance multi-threaded Concurrent Merge Sort algorithm using Java's `ForkJoinPool` and recursive task splitting to maximize CPU utilization on multi-core architectures.

---

## 💼 Experience

### **EPICS Initiative: Pumie (Slime)** — *VIT Bhopal*
**Frontend Developer & UI Designer** *(Feb 2025 – Mar 2026)*
- Spearheaded the frontend architecture for the Slime visual workflow project using React, improving application load times by **35%** and decreasing client-side rendering latency by **15%**.
- Collaborated cross-functionally with 4 backend engineers to integrate RESTful APIs, utilizing Git version control and deploying **15+ production updates**.

---

## 🚀 Technical Projects

### 1. **[Distributed Code Engine](https://github.com/anshullakra007/Distributed-Code-Execution-Engine)** | [Live Demo](https://distributed-code-execution-engine.vercel.app/)
*Java, Spring Boot, Docker, ProcessBuilder, React.js*
- Architected a remote code execution API capable of compiling and running Python, C++, and Java in isolated Docker containers with a **100% execution success rate** during concurrent load testing.
- Optimized Python execution streams to achieve a peak throughput of **130.64 req/s** and mean latency of **70.48 ms**.
- Engineered concurrent process management using Java `ProcessBuilder` to handle heavy multi-threaded compilation workloads for C++ (g++ 17) and Java (JDK 21).

### 2. **[MiniRedis](https://github.com/anshullakra007/MiniRedis)** | [Live TCP Server](https://miniredis.onrender.com)
*Java (JDK 21), Raw TCP Sockets, Multi-threading, Custom TCP Protocol*
- Built a multi-threaded server from scratch capable of concurrently handling **500+ clients** and achieving **94,000+ operations/sec** over raw TCP sockets.
- Designed a custom TCP protocol to handle continuous client-server data exchange, achieving sub-millisecond mean interaction (**0.05ms**) under high load contention using `ConcurrentHashMap` with fine-grained locking.

### 3. **[Sentinel AI](https://github.com/anshullakra007/sentinel-ai)** | [Live Demo](https://huggingface.co/spaces/anshullakra8/sentinel-ai)
*Python, FastAPI, ChromaDB, Google Gemini LLM, Docker*
- Built an AI-powered observability platform that ingests production crash logs, performs semantic code retrieval using ChromaDB, and generates structured root cause analyses and patch recommendations with Gemini.
- Designed an asynchronous FastAPI telemetry pipeline with crash deduplication and vector search to reduce diagnosis latency for repeated incidents.

### 4. **[ReconAI](https://github.com/anshullakra007/ReconAI)** | [Live Demo](https://frontend-fawn-five-21.vercel.app/)
*React.js, Node.js, Python, FastAPI, Pandas, Gemini LLM*
- Built an automated data reconciliation pipeline and React dashboard that detects transaction anomalies (currency mismatches, timestamp drifts, missing records).
- Utilized Google's Gemini LLM to automatically generate actionable root-cause summaries and L1 diagnostic reports for enterprise support teams.

### 5. **[FinTech Churn & Impact Analyzer](https://github.com/anshullakra007/fintech-churn-analyzer)** | [Live Demo](https://fintech-churn-analyzer.onrender.com)
*Python, Streamlit, Random Forest, Gemini API*
- Engineered an AI-powered operational CRM and analytics dashboard designed to quantify and mitigate the cost of technical debt and payment gateway failures.
- Implemented a Random Forest classifier to predict customer churn probability and utilized Gemini LLM to draft personalized retention outreach campaigns.

### 6. **[SyncDraw](https://github.com/anshullakra007/SyncDraw)** | [Live Demo](https://sync-draw-eight.vercel.app/)
*React.js, Node.js, Socket.io, WebSockets*
- Built a collaborative whiteboard web application featuring zero-latency multi-user synchronization.
- Engineered a Pub/Sub WebSocket architecture using Socket.io to broadcast drawing coordinates instantly across connected clients.

### 7. **[L7 Load Balancer](https://github.com/anshullakra007/LoadBalancer)** | [Live Demo](https://loadbalancer-sgfp.onrender.com)
*C++, Multi-threading, TCP/IP, HTTP Server, Lock-free Atomics*
- Engineered a custom Reverse Proxy that distributes traffic across backend servers using Round Robin and Least Connections routing algorithms.
- Utilized lock-free Atomic counters and thread pooling to minimize synchronization overhead under concurrent connection spikes.

### 8. **[System Design Learning Platform](https://github.com/anshullakra007/system-design-learning-platform)** | [Live Demo](https://system-design-learning-platform.vercel.app/)
*React.js, Node.js, Express, Tailwind CSS*
- Developed a comprehensive interactive platform for engineering students to master scalable System Design architectures and distributed systems patterns.

### 9. **[CodeLens AI](https://github.com/anshullakra007/codelens-ai)** | [Live Demo](https://codelens-ai-ixqc.onrender.com/)
*Python, FastAPI, React.js, Google Gemini Flash, Docker*
- Built an automated, hyper-optimized code review agent that audits code snippets for time and space complexity bottlenecks, catches bugs, and generates refactored solutions.



---

## 📜 Certifications

- **AWS Certified Solutions Architect – Associate** — *Amazon Web Services (AWS)* *(Jul 2026, expires Jul 2029)*
- **Networking Basics** — *Cisco* *(Apr 2026)*
- **Cyber Security Analyst (CCSA)** — *IBM Career Education Program* *(Jun 2025)*
- **Blockchain and its Applications** — *NPTEL / IIT Madras*

---

## 🏆 Achievements & Competitive Programming

- **Codeforces Pupil:** Achieved **Pupil** rank on Codeforces (Peak Rating: **1289**). Secured global rank **2185** in Educational CF Round 190.
- **LeetCode:** Achieved a **1456** contest rating. Cleared **118 Medium and Hard** challenges.
- **Problem Solving:** Solved **360+ DSA problems** across platforms primarily using C++ (STL) and Java.
